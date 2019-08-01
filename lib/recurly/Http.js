class Response {
  constructor (response, body, request) {
    this.request = request
    this.body = null
    if (body.length > 0) {
      this.body = JSON.parse(body.join(''))
    }
    this.status = response.statusCode
    this.requestId = response.headers['x-request-id']
    this.rateLimit = parseInt(response.headers['x-ratelimit-limit'], 10)
    this.rateLimitRemaining = parseInt(response.headers['x-ratelimit-remaining'], 10)
    this.rateLimitReset = new Date(parseInt(response.headers['x-ratelimit-reset'], 10) * 1000)
    this.date = response.headers['date']
    this.proxyMetadata = {
      'server': response.headers['server'],
      'cf-ray': response.headers['cf-ray']
    }
  }
}

class Request {
  constructor (method, path, body = null) {
    this.method = method.toUpperCase()
    this.path = path
    this.body = body
  }
}

module.exports.Response = Response
module.exports.Request = Request
