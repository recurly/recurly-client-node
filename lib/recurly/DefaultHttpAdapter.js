'use strict'

const https = require('https')
const http = require('http')
const zlib = require('zlib')
const { URL } = require('url')
const { HttpAdapter, HttpResponse } = require('./HttpAdapter')
const apiErrors = require('./api_errors')

const ZLIB_OPTIONS = {
  flush: zlib.Z_SYNC_FLUSH,
  finishFlush: zlib.Z_SYNC_FLUSH
}

const BINARY_CONTENT_TYPES = ['application/pdf']

function isBinaryContentType (contentType) {
  return BINARY_CONTENT_TYPES.some(t => (contentType || '').includes(t))
}

function responseEncoding (contentType) {
  return isBinaryContentType(contentType) ? 'binary' : 'utf-8'
}

/**
 * Default HTTP adapter. Uses Node's built-in https/http modules.
 *
 * Owns:
 * - Accept-Encoding: gzip negotiation and response body decompression
 * - Content-Length header
 * - Keep-alive connection management via https.Agent
 * - Timeout and ECONNRESET retry
 *
 * @param {Object} [options]
 * @param {number} [options.timeout=60000] - Request timeout in milliseconds.
 * @param {{ debug: function(string): void }|null} [options.logger=null] - Optional logger for request lifecycle events.
 */
class DefaultHttpAdapter extends HttpAdapter {
  constructor ({ timeout = 60000, logger = null } = {}) {
    super()
    this._timeout = timeout
    this._logger = logger
    this._agents = {
      'https:': new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 600000,
        timeout: 10000
      }),
      'http:': new http.Agent({
        keepAlive: true,
        keepAliveMsecs: 600000,
        timeout: 10000
      })
    }
  }

  execute (method, url, headers, body) {
    if (this._logger) this._logger.debug(`[recurly] ${method} ${url}`)
    const parsed = new URL(url)
    const isHttps = parsed.protocol === 'https:'
    const transport = isHttps ? https : http

    const reqHeaders = Object.assign({}, headers, {
      'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6'
    })

    if (body) {
      reqHeaders['Content-Length'] = Buffer.byteLength(body)
    }

    const reqOptions = {
      hostname: parsed.hostname,
      port: parsed.port || (isHttps ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method: method,
      headers: reqHeaders,
      agent: this._agents[parsed.protocol]
    }

    return new Promise((resolve, reject) => {
      let aborted = false

      const submitRequest = () => {
        const httpRequest = transport.request(reqOptions, (httpResponse) => {
          const rawHeaders = httpResponse.headers

          const contentEncoding = (rawHeaders['content-encoding'] || '').toLowerCase()
          const contentType = rawHeaders['content-type'] || ''
          const encoding = responseEncoding(contentType)

          let responseStream
          if (contentEncoding === 'gzip') {
            responseStream = zlib.createGunzip(ZLIB_OPTIONS)
            httpResponse.pipe(responseStream)
          } else if (contentEncoding === 'deflate') {
            responseStream = zlib.createInflate(ZLIB_OPTIONS)
            httpResponse.pipe(responseStream)
          } else {
            responseStream = httpResponse
          }

          responseStream.setEncoding(encoding)

          const chunks = []
          responseStream.on('data', chunk => chunks.push(chunk))
          responseStream.on('end', () => {
            const bodyStr = chunks.join('')
            resolve(new HttpResponse(
              httpResponse.statusCode,
              rawHeaders,
              bodyStr
            ))
          })
          responseStream.on('error', reject)
        })

        httpRequest.setTimeout(this._timeout, () => {
          aborted = true
          httpRequest.destroy()
          reject(new apiErrors.TimeoutError('Request timed out', 'timeout_error'))
        })

        httpRequest.on('error', (err) => {
          if (aborted) return
          if (!reqOptions.retried && err.code === 'ECONNRESET') {
            reqOptions.retried = true
            submitRequest()
          } else {
            reject(err)
          }
        })

        if (body) {
          httpRequest.write(body)
        }
        httpRequest.end()
      }

      submitRequest()
    })
  }
}

module.exports = DefaultHttpAdapter
