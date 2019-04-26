'use strict'

const https = require('https')

const pkg = require('../../package')

const ApiError = require('./ApiError')

const casters = require('./Caster')

const querystring = require('querystring')

const apiErrors = require('./api_errors')

const utils = require('./utils')

/**
 * This is the base functionality for the Recurly.Client.
 * @private
 * @param {string} apiKey - The private api key for the site.
 * @param {string} siteId - The site id (if you only have the subdomain, use the subdomain- prefix: `subdomain-${mySubdomain}`).
 */
class BaseClient {
  constructor (apiKey, siteId) {
    this.siteId = siteId

    // API key should not be instance variable.
    // This way it's not accidentally logged.
    this._getApiKey = () => apiKey

    this._httpOptions = {
      host: 'partner-api.recurly.com',
      port: 443,
      agent: new https.Agent({
        keepAlive: true
      })
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

    const options = this._getDefaultOptions(method, path)

    let requestBody
    if (request) {
      requestBody = JSON.stringify(casters.castRequest(request))
      options.headers['Content-Length'] = Buffer.byteLength(requestBody)
    }

    return new Promise((resolve, reject) => {
      // console.log('Sending Request: ', options)
      const request = https.request(options, (response) => {
        const body = []
        response.setEncoding('utf8')
        response.on('data', (chunk) => body.push(chunk))
        response.on('end', () => {
          let jsonBody
          if (body.length > 0) {
            jsonBody = JSON.parse(body.join(''))
            // console.log('Got Response: ', jsonBody)
          }

          let deprecated = response.headers['Recurly-Deprecated'] || ''
          if (!this['_ignore_deprecation_warning'] && deprecated.toUpperCase() === 'TRUE') {
            let sunset = response.headers['Recurly-Sunset-Date']
            console.log(`[recurly-client-node] WARNING: Your current API version "${this.apiVersion()}" is deprecated and will be sunset on ${sunset}`)
          }

          if (response.statusCode < 200 || response.statusCode > 299) {
            const errBody = jsonBody.error
            let className = utils.classify(errBody.type)
            if (!className.endsWith('Error')) className += 'Error'
            const ErrClass = apiErrors[className] || ApiError
            reject(new ErrClass(errBody.message, errBody.type, errBody.params))
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

  _getDefaultOptions (method, path) {
    // Create a copy to ensure that this._httpOptions is not modified
    const options = Object.assign({}, this._httpOptions)
    options.method = method
    options.path = path

    // The headers can't be stored in _httpOptions because this object will
    // be directly modified for certain requests. Object.assign() does not allow
    // for deep cloning
    options.headers = {
      'Accept': `application/vnd.recurly.${this.apiVersion()}`,
      'User-Agent': `Recurly/${pkg.version}; ${pkg.name}`,
      'Authorization': 'Basic ' + Buffer.from(this._getApiKey() + ':', 'ascii').toString('base64'),
      'Content-Type': 'application/json'
    }

    return options
  }
}

module.exports = BaseClient
