const https = require('https')
const zlib = require('zlib')
const casters = require('./Caster')
const apiErrors = require('./api_errors')

const BINARY_TYPES = [
  'application/pdf'
]
const TIMEOUT = 60000

const ZLIB_OPTIONS = {
  flush: zlib.Z_SYNC_FLUSH,
  finishFlush: zlib.Z_SYNC_FLUSH
}

function responseEncoding (contentType = '') {
  const isBinary = BINARY_TYPES.find((binaryType) => contentType.includes(binaryType))
  return isBinary ? 'binary' : 'utf-8'
}

// an adapter function to abstract away some of
// the low level details of requests and responses in node
function makeRequest (options, requestBody) {
  if (requestBody) {
    requestBody = JSON.stringify(casters.castRequest(requestBody))
    options.headers['Content-Length'] = Buffer.byteLength(requestBody)
  }
  return new Promise((resolve, reject) => {
    let aborted = false

    const submitRequest = () => {
      const httpRequest = https.request(options, (httpResponse) => {
        // downcase response headers
        const responseHeaders = {}
        for (const header in httpResponse.headers) {
          responseHeaders[header.toLowerCase()] = httpResponse.headers[header]
        }

        var responseStream
        const encoding = responseHeaders['content-encoding']

        if (encoding === 'gzip') {
          responseStream = zlib.createGunzip(ZLIB_OPTIONS)
          httpResponse.pipe(responseStream)
        } else if (encoding === 'deflate') {
          responseStream = zlib.createInflate(ZLIB_OPTIONS)
          httpResponse.pipe(responseStream)
        } else {
          responseStream = httpResponse
        }
        responseStream.setEncoding(responseEncoding(responseHeaders['content-type']))

        const chunks = []
        responseStream.on('data', chunk => chunks.push(chunk))
        responseStream.on('end', () => {
          const rbody = chunks.join('')

          const recurlyRequest = new Request(options.method, options.path, requestBody)
          const recurlyResponse = Response.build(httpResponse, rbody, recurlyRequest)
          resolve(recurlyResponse)
        })
      })
      httpRequest.setTimeout(TIMEOUT, () => {
        aborted = true
        httpRequest.abort()
        reject(new apiErrors.TimeoutError('Timeout while sending request', 'timeout_error'))
      })
      httpRequest.on('error', (err) => {
        if (aborted) {
          return
        }

        // when using keep-alive, we need to retry requests if the socket is reset
        // https://nodejs.org/api/http.html#http_request_reusedsocket
        if (!options.retried && err.code === 'ECONNRESET') {
          options.retried = true
          submitRequest()
        } else {
          reject(err)
        }
      })
      if (requestBody) {
        httpRequest.write(requestBody)
      }
      httpRequest.end()
    }

    submitRequest()
  })
}

/**
 * This class contains the metadata from the HTTP response
 * from Recurly.
 * @property {Request} request - The request responsible for this response.
 * @property {Object} body - The parsed JSON response body.
 * @property {number} statusCode - The HTTP status code.
 * @property {string} contentType - The HTTP content type.
 * @property {string} requestId - The unique id Recurly assigned to this request. Keep this for support.
 * @property {number} rateLimit - The max rate limit.
 * @property {number} rateLimitRemaining - The number of requests remaining until limit is reached.
 * @property {Date} rateLimitReset - The datetime in which the rate limiter will be reset.
 * @property {boolean} apiDeprecated - true if you are using a deprecated version of the API.
 * @property {string} apiSunsetDate - The date in which this version will be sunset.
 * @property {string} date - The date time from the server.
 * @property {Object} proxyMetadata - Metadata from the proxy (e.g. cloudflare). Can be useful for debugging.
 */
class Response {
  static build (response, body, request) {
    const resp = new Response()
    resp.request = request
    resp.body = null
    if (body && body.length > 0) {
      resp.body = body
    }
    // downcase response headers
    const responseHeaders = {}
    for (const header in response.headers) {
      responseHeaders[header.toLowerCase()] = response.headers[header]
    }
    resp.status = response.statusCode
    resp.requestId = responseHeaders['x-request-id']
    resp.rateLimit = parseInt(responseHeaders['x-ratelimit-limit'], 10)
    resp.rateLimitRemaining = parseInt(responseHeaders['x-ratelimit-remaining'], 10)
    resp.rateLimitReset = new Date(parseInt(responseHeaders['x-ratelimit-reset'], 10) * 1000)
    if (responseHeaders['content-type']) {
      resp.contentType = responseHeaders['content-type'].split(';')[0]
    }
    resp.recordCount = null
    resp.apiDeprecated = false
    resp.apiSunsetDate = null
    const deprecated = responseHeaders['recurly-deprecated'] || ''
    if (deprecated.toUpperCase() === 'TRUE') {
      resp.apiDeprecated = true
      resp.apiSunsetDate = responseHeaders['recurly-sunset-date']
    }

    if (responseHeaders['recurly-total-records']) {
      resp.recordCount = parseInt(responseHeaders['recurly-total-records'], 10)
    }
    resp.date = responseHeaders['date']
    resp.proxyMetadata = {
      'server': responseHeaders['server'],
      'cf-ray': responseHeaders['cf-ray']
    }

    return resp
  }
}

/**
 * This class contains the metadata from the HTTP request
 * sent to Recurly.
 */
class Request {
  /**
   * @param {string} method - The HTTP method of the request.
   * @param {string} path - The path of the request.
   * @param {Object} body - The JSON body of the request (optional).
   */
  constructor (method, path, body = null) {
    this.method = method.toUpperCase()
    this.path = path
    this.body = body
  }
}

module.exports.makeRequest = makeRequest
module.exports.Response = Response
module.exports.Request = Request
