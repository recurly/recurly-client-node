'use strict'

const https = require('https')
const pkg = require('../../package.json')
const ApiError = require('./ApiError')
const casters = require('./Caster')
const querystring = require('querystring')
const apiErrors = require('./api_errors')
const networkErrors = require('./network_errors')
const utils = require('./utils')
const resources = require('./resources')
const { makeRequest } = require('./Http')

const BINARY_TYPES = [
  'application/pdf'
]
const JSON_CONTENT_TYPE = 'application/json'
const ALLOWED_OPTIONS = ['body', 'params']

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

  _interpolatePath (path, parameters = {}) {
    Object.keys(parameters).forEach(name => {
      path = path.replace(`{${name}}`, encodeURIComponent(parameters[name].toString()))
    })
    return path
  }

  _validateOptions (options) {
    Object.keys(options).forEach(key => {
      if (!ALLOWED_OPTIONS.includes(key)) {
        throw new Error(`'${key}' is not a valid option`)
      }
    })
  }

  _makeRequest (method, path, body, options = {}) {
    this._validateOptions(options)
    if (options.params && Object.keys(options.params).length > 0) {
      path = path + '?' + querystring.stringify(casters.castRequest(options.params))
    }

    const reqOptions = this._getDefaultOptions(method, path)

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
      'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6',
      'Content-Type': 'application/json; charset=utf-8'
    }

    return options
  }

  /**
   * @param {Response} resp
   * @return {(ApiError|null)}
   */
  _errorFromResponse (resp) {
    let err = null
    const jsonContent = (resp.contentType && resp.contentType.includes(JSON_CONTENT_TYPE))

    if (resp.status < 200 || resp.status > 299) {
      if (jsonContent) {
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
        err = new ApiError('Unknown Error', 'unknown')

        if (resp.status === 400) {
          err = new apiErrors.BadRequestError('Bad Request', 'bad_request')
        } else if (resp.status >= 401 && resp.status <= 403) {
          err = new apiErrors.UnauthorizedError('Request not authorized. Perhaps your API key or site-id is incorrect?', 'unauthorized')
        } else if (resp.status === 404) {
          err = new apiErrors.NotFoundError('Resource Not Found', 'not_found')
        } else if (resp.status === 422) {
          err = new apiErrors.ValidationError('Request not valid', 'validation')
        } else if (resp.status === 500) {
          err = new apiErrors.InternalServerError('Recurly Server Error', 'internal_server_error')
        } else if (resp.status === 502) {
          err = new networkErrors.ServiceUnavailableError('Recurly Service Unavialable Error', 'bad_gateway')
        } else if (resp.status === 503) {
          err = new networkErrors.ServiceUnavailableError('Recurly Service Unavialable Error', 'service_unavailable')
        } else if (resp.status === 504) {
          err = new networkErrors.TimeoutError('Recurly Timeout', 'gateway_timeout')
        } else {
          err = new networkErrors.UnexpectedResponseError('Unexpected Response', 'unexpected_response')
        }

        err._setResponse(resp)
      }
    }

    return err
  }
}

module.exports = BaseClient
