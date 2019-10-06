'use strict'

const https = require('https')
const pkg = require('../../package')
const ApiError = require('./ApiError')
const casters = require('./Caster')
const querystring = require('querystring')
const apiErrors = require('./api_errors')
const utils = require('./utils')
const { Request, Response } = require('./Http')

/**
 * This is the base functionality for the Recurly.Client.
 * @private
 * @param {string} apiKey - The private api key for the site.
 */
class BaseClient {
  constructor (apiKey) {
    // API key should not be instance variable.
    // This way it's not accidentally logged.
    this._getApiKey = () => apiKey

    this._httpOptions = {
      host: 'v3.recurly.com',
      port: 443,
      agent: new https.Agent({
        keepAlive: true
      })
    }
  }

  _interpolatePath (path, parameters = {}) {
    Object.keys(parameters).forEach(name => {
      path = path.replace(`{${name}}`, encodeURIComponent(parameters[name].toString()))
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
      const httpRequest = https.request(options, (httpResponse) => {
        const rbody = []
        httpResponse.setEncoding('utf8')
        httpResponse.on('data', chunk => rbody.push(chunk))
        httpResponse.on('end', () => {
          const deprecated = httpResponse.headers['Recurly-Deprecated'] || ''
          if (!this['_ignore_deprecation_warning'] && deprecated.toUpperCase() === 'TRUE') {
            const sunset = httpResponse.headers['Recurly-Sunset-Date']
            console.log(`[recurly-client-node] WARNING: Your current API version "${this.apiVersion()}" is deprecated and will be sunset on ${sunset}`)
          }

          const recurlyRequest = new Request(method, path, requestBody)
          const recurlyResponse = new Response(httpResponse, rbody, recurlyRequest)

          if (recurlyResponse.status < 200 || recurlyResponse.status > 299) {
            const errBody = recurlyResponse.body.error
            let className = utils.classify(errBody.type)
            if (!className.endsWith('Error')) className += 'Error'
            const ErrClass = apiErrors[className] || ApiError
            const err = new ErrClass(errBody.message, errBody.type, errBody.params)
            err._setResponse(recurlyResponse)
            reject(err)
          } else {
            const resource = casters.castResponse(recurlyResponse.body)
            resource._setResponse(recurlyResponse)
            resolve(resource)
          }
        })
      })
      httpRequest.on('error', reject)
      if (requestBody) {
        httpRequest.write(requestBody)
      }
      httpRequest.end()
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
      'User-Agent': `Recurly/${pkg.version}; node`,
      'Authorization': 'Basic ' + Buffer.from(this._getApiKey() + ':', 'ascii').toString('base64'),
      'Content-Type': 'application/json'
    }

    return options
  }
}

module.exports = BaseClient
