/* globals describe, it */

require('../test_helper')
const assert = require('assert').strict
const { Request, Response } = require('../../lib/recurly/Http')
const { HttpResponse } = require('../../lib/recurly/HttpAdapter')

describe('Http', () => {
  describe('Request', () => {
    describe('constructor', () => {
      it('Should properly build a request', () => {
        const req = new Request('GET', '/path', { property: 123 })
        assert.equal(req.method, 'GET')
        assert.equal(req.path, '/path')
        assert.deepEqual(req.body, { property: 123 })
      })
    })
  })
  describe('Response', () => {
    describe('.fromHttpResponse', () => {
      let makeHttpResponse = (overrides = {}) => {
        const headers = Object.assign({
          'x-request-id': 'requestid',
          'x-ratelimit-limit': '2000',
          'x-ratelimit-remaining': '1999',
          'x-ratelimit-reset': '1571948450',
          'recurly-deprecated': 'false',
          'date': 'Monday',
          'server': 'cloudflare',
          'cf-ray': 'cf-1234',
          'content-type': 'application/json; charset=utf-8'
        }, overrides.headers || {})
        return new HttpResponse(overrides.statusCode || 200, headers, overrides.body !== undefined ? overrides.body : null)
      }

      it('Should properly build a response', () => {
        const req = new Request('GET', '/path', { property: 123 })
        const httpResp = makeHttpResponse({ body: '{ "id": "myid", "object": "my_resource" }' })
        const resp = Response.fromHttpResponse(httpResp, req)
        assert.equal(resp.request, req)
        assert.equal(resp.status, 200)
        assert.deepEqual(JSON.parse(resp.body), { id: 'myid', object: 'my_resource' })
        assert.equal(resp.requestId, 'requestid')
        assert.equal(resp.rateLimit, 2000)
        assert.equal(resp.rateLimitRemaining, 1999)
        assert(resp.rateLimitReset instanceof Date)
        assert.equal(resp.date, 'Monday')
        assert.equal(resp.proxyMetadata.server, 'cloudflare')
        assert.equal(resp.proxyMetadata['cf-ray'], 'cf-1234')
        assert.equal(resp.apiDeprecated, false)
      })

      it('Should keep the body null if there is no body', () => {
        const req = new Request('GET', '/path', { property: 123 })
        const httpResp = makeHttpResponse({ body: null })
        const resp = Response.fromHttpResponse(httpResp, req)
        assert.equal(resp.body, null)
      })

      it('Should set apiDeprecated to true and sunset if headers exist', () => {
        const req = new Request('GET', '/path', { property: 123 })
        const httpResp = makeHttpResponse({
          headers: { 'recurly-deprecated': 'TRUE', 'recurly-sunset-date': 'Tuesday' }
        })
        const resp = Response.fromHttpResponse(httpResp, req)
        assert.equal(resp.apiDeprecated, true)
        assert.equal(resp.apiSunsetDate, 'Tuesday')
      })

      it('Should set recordCount if recurly-total-records header is present', () => {
        const req = new Request('GET', '/path', { property: 123 })
        const httpResp = makeHttpResponse({ headers: { 'recurly-total-records': '9000' } })
        const resp = Response.fromHttpResponse(httpResp, req)
        assert.equal(resp.recordCount, 9000)
      })
    })
  })
})
