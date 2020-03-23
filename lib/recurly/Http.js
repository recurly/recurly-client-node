const https = require('https')
const zlib = require('zlib')
const casters = require('./Caster')
const networkErrors = require('./network_errors')

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
        var responseStream
        const encoding = httpResponse.headers['content-encoding']

        if (encoding === 'gzip') {
          responseStream = zlib.createGunzip(ZLIB_OPTIONS)
          httpResponse.pipe(responseStream)
        } else if (encoding === 'deflate') {
          responseStream = zlib.createInflate(ZLIB_OPTIONS)
          httpResponse.pipe(responseStream)
        } else {
          responseStream = httpResponse
        }
        responseStream.setEncoding(responseEncoding(httpResponse.headers['content-type']))

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
        reject(new networkErrors.TimeoutError('Timeout while sending request'))
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

class Response {
  static build (response, body, request) {
    const resp = new Response()
    resp.request = request
    resp.body = null
    if (body && body.length > 0) {
      resp.body = body
    }
    resp.status = response.statusCode
    resp.requestId = response.headers['x-request-id']
    resp.rateLimit = parseInt(response.headers['x-ratelimit-limit'], 10)
    resp.rateLimitRemaining = parseInt(response.headers['x-ratelimit-remaining'], 10)
    resp.rateLimitReset = new Date(parseInt(response.headers['x-ratelimit-reset'], 10) * 1000)
    if (response.headers['content-type']) {
      resp.contentType = response.headers['content-type'].split(';')[0]
    }
    resp.recordCount = null
    resp.apiDeprecated = false
    resp.apiSunsetDate = null
    const deprecated = response.headers['Recurly-Deprecated'] || ''
    if (deprecated.toUpperCase() === 'TRUE') {
      resp.apiDeprecated = true
      resp.apiSunsetDate = response.headers['Recurly-Sunset-Date']
    }

    if (response.headers['recurly-total-records']) {
      resp.recordCount = parseInt(response.headers['recurly-total-records'], 10)
    }
    resp.date = response.headers['date']
    resp.proxyMetadata = {
      'server': response.headers['server'],
      'cf-ray': response.headers['cf-ray']
    }

    return resp
  }
}

class Request {
  constructor (method, path, body = null) {
    this.method = method.toUpperCase()
    this.path = path
    this.body = body
  }
}

module.exports.makeRequest = makeRequest
module.exports.Response = Response
module.exports.Request = Request
