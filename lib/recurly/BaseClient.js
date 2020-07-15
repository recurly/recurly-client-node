'use strict'

const https = require('https')
const pkg = require('../../package.json')
const ApiError = require('./ApiError')
const casters = require('./Caster')
const querystring = require('querystring')
const apiErrors = require('./api_errors')
const utils = require('./utils')
const resources = require('./resources')
const { makeRequest } = require('./Http')

const BINARY_TYPES = [
  'application/pdf'
]
const JSON_CONTENT_TYPE = 'application/json'
const ALLOWED_OPTIONS = ['body', 'params', 'headers']

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
        keepAlive: true,
        keepAliveMsecs: 600000,
        timeout: 10000
      })
    }

    this._requestAdapter = makeRequest
  }

  _validatePathParameters (parameters) {
    // Check to make sure that parameters are valid types
    const invalidTypes = Object.keys(parameters).filter(name => {
      return !['string', 'number', 'bigint'].includes(typeof parameters[name])
    })
    if (invalidTypes.length > 0) {
      const issues = invalidTypes.map(name => {
        return `'${name}:${parameters[name]}'`
      })
      throw new ApiError(`Invalid path parameters: ${issues.join(', ')}`)
    }
    // Check to make sure that parameters are not empty string values
    const invalidStrings = Object.keys(parameters).filter(name => {
      return typeof parameters[name] === 'string' && parameters[name].trim() === ''
    })
    if (invalidStrings.length > 0) {
      throw new ApiError(`${invalidStrings.join(', ')} cannot be an empty string`)
    }
  }

  _interpolatePath (path, parameters = {}) {
    this._validatePathParameters(parameters)
    Object.keys(parameters).forEach(name => {
      path = path.replace(`{${name}}`, encodeURIComponent(parameters[name].toString()))
    })
    return path
  }

  _validateOptions (options) {
    Object.keys(options).forEach(key => {
      if (!ALLOWED_OPTIONS.includes(key)) {
        throw new ApiError(`'${key}' is not a valid option: [${ALLOWED_OPTIONS.join(', ')}]`)
      }
    })
  }

  _makeRequest (method, path, body, options = {}) {
    this._validateOptions(options)

    const reqOptions = this._getRequestOptions(method, path, options)

    return new Promise((resolve, reject) => {
      const httpReq = this._requestAdapter(reqOptions, body)
      httpReq
        .then(recurlyResponse => {
          if (!this['_ignore_deprecation_warning'] && recurlyResponse.apiDeprecated) {
            console.log(`[recurly-client-node] WARNING: Your current API version "${this.apiVersion()}" is deprecated and will be sunset on ${recurlyResponse.apiSunsetDate}`)
          }

          const err = this._errorFromResponse(recurlyResponse)
          if (err) {
            reject(err)
          } else {
            let resource
            if (BINARY_TYPES.includes(recurlyResponse.contentType)) {
              resource = casters.castFileResponse(recurlyResponse.body)
            } else {
              resource = casters.castJsonResponse(recurlyResponse.body)
              // Maintain JSON parsed body for version < 4
              // TODO: Remove this (vv) for version 4
              if (recurlyResponse.body && recurlyResponse.body.length > 0) {
                if (recurlyResponse.contentType && recurlyResponse.contentType.includes(JSON_CONTENT_TYPE)) {
                  recurlyResponse.body = JSON.parse(recurlyResponse.body)
                }
              }
            }
            resource._setResponse(recurlyResponse)
            resolve(resource)
          }
        })
        .catch(reject)
    })
  }

  _buildQuery (options = {}) {
    if (!options.params || Object.keys(options.params).length === 0) {
      return ''
    }
    // The server expects array parameters as CSV strings
    const converted = Object.keys(options.params).reduce((res, key) => {
      if (Array.isArray(options.params[key])) {
        res[key] = options.params[key].join(',')
      } else {
        res[key] = options.params[key]
      }
      return res
    }, {})

    return '?' + querystring.stringify(casters.castRequest(converted))
  }

  _getRequestOptions (method, path, options) {
    // Create a copy to ensure that this._httpOptions is not modified
    const reqOptions = Object.assign({}, this._httpOptions)
    reqOptions.method = method
    reqOptions.path = path + this._buildQuery(options)

    // The headers can't be stored in _httpOptions because this object will
    // be directly modified for certain requests. Object.assign() does not allow
    // for deep cloning
    reqOptions.headers = Object.assign({}, options.headers, {
      'Accept': `application/vnd.recurly.${this.apiVersion()}`,
      'User-Agent': `Recurly/${pkg.version}; node ${process.version}`,
      'Authorization': 'Basic ' + Buffer.from(this._getApiKey() + ':', 'ascii').toString('base64'),
      'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6',
      'Content-Type': 'application/json; charset=utf-8'
    })

    return reqOptions
  }

  /**
   * @param {Response} resp
   * @return {(ApiError|null)}
   */
  _errorFromResponse (resp) {
    let err = null
    const jsonContent = (resp.contentType && resp.contentType.includes(JSON_CONTENT_TYPE))

    if (resp.status < 200 || resp.status > 299) {
      if (jsonContent && resp.body) {
        const errBody = resp.body && JSON.parse(resp.body).error
        // If we have a body, we determine the error based on
        // the contents of the body
        if (errBody) {
          let className = utils.classify(errBody.type)
          if (!className.endsWith('Error')) className += 'Error'
          const ErrClass = apiErrors[className] || ApiError
          if (ErrClass === apiErrors.TransactionError) {
            err = new ErrClass(errBody.message, errBody.type, {
              transactionError: resources.TransactionError.cast(errBody.transaction_error)
            })
          } else {
            err = new ErrClass(errBody.message, errBody.type, {
              params: errBody.params || []
            })
          }
          err._setResponse(resp)
          return err
        }
      // if we don't have a JSON body, we determine the error
      // based on the http status code
      } else {
        if (resp.status in apiErrors.ERROR_MAP) {
          const ErrClass = apiErrors.ERROR_MAP[resp.status]
          const errorType = ErrClass.name.replace(/([A-Z])/g, (_, p1) => `_${p1.toLowerCase()}`).slice(1)
          err = new ErrClass(`Unknown Error. Requrly Request Id: ${resp.requestId}`, errorType)
        } else {
          err = new ApiError(`Unknown Error. Requrly Request Id: ${resp.requestId}`, 'unknown')
        }
        err._setResponse(resp)
      }
    }

    return err
  }
}

module.exports = BaseClient
