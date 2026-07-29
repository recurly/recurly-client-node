'use strict'

/**
 * This class contains the metadata from the HTTP response
 * from Recurly.
 * @property {Request} request - The request responsible for this response.
 * @property {string|null} body - The raw response body string.
 * @property {number} status - The HTTP status code.
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
  /**
   * Build a Response from an HttpResponse value object returned by an HttpAdapter.
   *
   * @param {import('./HttpAdapter').HttpResponse} httpResponse
   * @param {Request} request
   * @return {Response}
   */
  static fromHttpResponse (httpResponse, request) {
    const resp = new Response()
    const h = httpResponse.headers // already lowercased by HttpResponse constructor

    resp.request = request
    resp.body = httpResponse.body
    resp.status = httpResponse.statusCode

    resp.requestId = h['x-request-id'] || null
    resp.rateLimit = parseInt(h['x-ratelimit-limit'], 10) || null
    resp.rateLimitRemaining = parseInt(h['x-ratelimit-remaining'], 10) || null
    resp.rateLimitReset = h['x-ratelimit-reset']
      ? new Date(parseInt(h['x-ratelimit-reset'], 10) * 1000)
      : null

    resp.contentType = h['content-type']
      ? h['content-type'].split(';')[0].trim()
      : null

    resp.recordCount = h['recurly-total-records']
      ? parseInt(h['recurly-total-records'], 10)
      : null

    resp.apiDeprecated = (h['recurly-deprecated'] || '').toUpperCase() === 'TRUE'
    resp.apiSunsetDate = resp.apiDeprecated ? (h['recurly-sunset-date'] || null) : null

    resp.date = h['date'] || null
    resp.proxyMetadata = {
      server: h['server'] || null,
      'cf-ray': h['cf-ray'] || null
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
   * @param {string|null} body - The JSON body of the request (optional).
   */
  constructor (method, path, body = null) {
    this.method = method.toUpperCase()
    this.path = path
    this.body = body
  }
}

module.exports.Response = Response
module.exports.Request = Request
