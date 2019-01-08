'use strict'

const https = require('https')

const pkg = require('../../package')

const ApiError = require('./ApiError')

const casters = require('./Caster')

const querystring = require('querystring')

/**
 * This is the base functionality for the Recurly.Client.
 * @private
 * @param {string} apiKey - The private api key for the site.
 * @param {string} siteId - The site id (if you only have the subdomain, use the subdomain- prefix: `subdomain-${mySubdomain}`).
 */
class BaseClient {
  constructor (apiKey, siteId) {
    this.siteId = siteId
    this.httpAgent = new https.Agent({
      keepAlive: true
    })
    this.httpOptions = {
      // TODO host will need to be configurable from playground
      // at some point
      host: 'partner-api.recurly.com',
      headers: {
        'Accept': `application/vnd.recurly.${this.apiVersion()}`,
        'User-Agent': `Recurly/${pkg.version}; ${pkg.name}`,
        'Authorization': 'Basic ' + Buffer.from(apiKey + ':', 'ascii').toString('base64')
      }
    }
  }

  _interpolatePath (path, parameters = {}) {
    parameters['site_id'] = this.siteId
    Object.keys(parameters).forEach(name => {
      path = path.replace(`{${name}}`, parameters[name])
    })
    return path
  }

  _makeRequest (method, path, request, params) {
    if (params) {
      path = path + '?' + querystring.stringify(casters.castRequest(params))
    }
    const options = Object.assign({
      method: method,
      path: path,
      agent: this.httpAgent
    }, this.httpOptions)

    let requestBody
    if (request) {
      requestBody = JSON.stringify(casters.castRequest(request))
      options.headers['Content-Type'] = 'application/json'
      options.headers['Content-Length'] = Buffer.byteLength(requestBody)
    }

    return new Promise((resolve, reject) => {
      // console.log('Sending Request: ', options)
      const request = https.request(options, (response) => {
        const body = []
        response.setEncoding('utf8')
        response.on('data', (chunk) => body.push(chunk))
        response.on('end', () => {
          let jsonBody = JSON.parse(body.join(''))
          // console.log('Got Response: ', jsonBody)

          let deprecated = response.headers['Recurly-Deprecated'] || ''
          if (!this['_ignore_deprecation_warning'] && deprecated.toUpperCase() === 'TRUE') {
            let sunset = response.headers['Recurly-Sunset-Date']
            console.log(`[recurly-client-node] WARNING: Your current API version "${this.apiVersion()}" is deprecated and will be sunset on ${sunset}`)
          }

          if (response.statusCode < 200 || response.statusCode > 299) {
            const err = jsonBody.error
            reject(new ApiError(err.message, err.type, err.params))
          } else {
            resolve(casters.castResponse(jsonBody))
          }
        })
      })
      request.on('error', reject)
      if (requestBody) {
        request.write(requestBody)
      }
      request.end()
    })
  }
}

module.exports = BaseClient
