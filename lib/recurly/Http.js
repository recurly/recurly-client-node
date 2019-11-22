const https = require('https')
const casters = require('./Caster')

const BINARY_TYPES = [
  'application/pdf'
]

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
    const httpRequest = https.request(options, (httpResponse) => {
      const rbody = []
      httpResponse.setEncoding(responseEncoding(httpResponse.headers['content-type']))
      httpResponse.on('data', chunk => rbody.push(chunk))
      httpResponse.on('end', () => {
        const recurlyRequest = new Request(options.method, options.path, requestBody)
        const recurlyResponse = Response.build(httpResponse, rbody, recurlyRequest)
        resolve(recurlyResponse)
      })
    })
    httpRequest.on('error', reject)
    if (requestBody) {
      httpRequest.write(requestBody)
    }
    httpRequest.end()
  })
}

class Response {
  static build (response, body, request) {
    const resp = new Response()
    resp.request = request
    resp.body = null
    if (body && body.length > 0) {
      resp.body = body.join('')
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
