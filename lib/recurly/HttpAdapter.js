'use strict'

/**
 * Value object returned by every HttpAdapter implementation.
 * The constructor normalizes all response header keys to lowercase so the SDK
 * can read them consistently regardless of what the server or adapter sends.
 *
 * @property {number} statusCode - HTTP status code (e.g. 200, 404).
 * @property {Object} headers - Response headers, all keys lowercased.
 * @property {string|null} body - Fully buffered, gzip-decoded response body, or null for empty responses.
 */
class HttpResponse {
  constructor (statusCode, headers, body) {
    this.statusCode = statusCode
    this.headers = Object.keys(headers || {}).reduce((acc, k) => {
      acc[k.toLowerCase()] = headers[k]
      return acc
    }, {})
    this.body = (body !== null && body !== undefined && body !== '') ? body : null
  }
}

/**
 * Abstract base class for HTTP adapters.
 *
 * Implement `execute` to provide a custom HTTP transport. Inject the adapter
 * via `new Client(apiKey, { httpAdapter: adapter })`.
 *
 * Contract:
 * - Throw / reject only on transport failures (timeout, DNS, connection refused).
 * - Return HTTP 4xx/5xx as a normal HttpResponse — the SDK decides what's an error.
 * - The response body must always be gzip-decoded before returning.
 * - The SDK owns auth, accept, content-type, and idempotency headers.
 * - The adapter owns Accept-Encoding, Content-Length, and connection management.
 */
class HttpAdapter {
  /**
   * Execute an HTTP request.
   *
   * @param {string} method - HTTP method (use HttpMethod constants).
   * @param {string} url - Fully-formed URL; query string already serialized by SDK.
   * @param {Object} headers - Request headers provided by the SDK (lowercase keys).
   * @param {string|null} body - JSON-serialized request body, or null for no body.
   * @return {Promise<HttpResponse>}
   */
  execute (method, url, headers, body) {
    throw new Error('HttpAdapter.execute() must be implemented by subclass')
  }
}

/**
 * Named HTTP method constants. The SDK passes one of these to HttpAdapter.execute().
 */
const HttpMethod = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  HEAD: 'HEAD'
})

module.exports.HttpResponse = HttpResponse
module.exports.HttpAdapter = HttpAdapter
module.exports.HttpMethod = HttpMethod
