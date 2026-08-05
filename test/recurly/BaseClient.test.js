/* globals describe, it, beforeEach, afterEach */

require('../test_helper')
const sinon = require('sinon')
const { MyResource } = require('../mock_resources')
const assert = require('assert').strict
const recurly = require('../../lib/recurly')
const { MockClient } = require('../mock_client')
const { jsonResponse, emptyResponse } = require('../http_test_helpers')

const client = new MockClient('myapikey')

describe('BaseClient', () => {
  afterEach(() => {
    client.restore()
  })

  describe('#constructor', () => {
    it('Should set the internal state and headers', () => {
      const headers = client._buildHeaders({})
      assert.equal(headers['Authorization'], 'Basic bXlhcGlrZXk6')
      const userAgentRegex = /^Recurly\/\d+(\.\d+){0,2}; node v\d+(\.\d+){0,2}.*$/
      assert.ok(userAgentRegex.test(headers['User-Agent']))
      assert.equal(headers['Accept'], 'application/vnd.recurly.v2022-01-01')
    })

    it('should set host to EU DataCenter', () => {
      const clientEU = new MockClient('myapikey', { region: 'eu' })
      assert.equal(clientEU._apiHost, 'v3.eu.recurly.com')
    })

    it('should set host to US DataCenter', () => {
      assert.equal(client._apiHost, 'v3.recurly.com')
    })

    it('should validate that region is an invalid value', () => {
      assert.throws(() => new MockClient('myapikey', { region: 'none' }), recurly.ApiError)
    })

    it('should accept a custom httpAdapter', () => {
      const adapter = new recurly.HttpAdapter()
      const customClient = new MockClient('myapikey', { httpAdapter: adapter })
      assert.equal(customClient._httpAdapter, adapter)
    })

    it('should throw when httpAdapter is not an HttpAdapter instance', () => {
      assert.throws(() => new MockClient('myapikey', { httpAdapter: {} }), TypeError)
    })
  })

  describe('#_interpolatePath', () => {
    it('Should interpolate and encode the path with the given params', () => {
      const pathTmpl = '/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
      const path = client._interpolatePath(pathTmpl, {
        'account_id': 'code-benjamin du monde',
        'shipping_address_id': 1234567890
      })

      assert.equal(path, '/accounts/code-benjamin%20du%20monde/shipping_addresses/1234567890')
    })

    it('Should validate that there are no empty string values', () => {
      const pathTmpl = '/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
      assert.throws(() => {
        client._interpolatePath(pathTmpl, {
          'account_id': '',
          'shipping_address_id': 1234567890
        })
      }, recurly.ApiError)
    })

    it('Should validate that parameter values are valid types', () => {
      const pathTmpl = '/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
      assert.throws(() => {
        client._interpolatePath(pathTmpl, {
          'account_id': undefined,
          'shipping_address_id': {}
        })
      }, recurly.ApiError)
    })
  })

  describe('#_makeRequest', () => {
    beforeEach(() => {
      client.mock((method, url, headers, body) => {
        return jsonResponse(200, { id: 'myid', object: 'my_resource' })
      })
    })

    it('Should throw an Error when invalid options are passed in', () => {
      assert.throws(() => {
        client._makeRequest('GET', '/resources/myid', null, { invalid: 'param' })
      }, recurly.ApiError)
    })

    it('Should not throw an Error when semi-valid options are passed in', () => {
      const resp = client._makeRequest('GET', '/resources/myid', null, { params: { invalid: 'param' } })
      return resp
        .then(resource => {
          assert(resource instanceof MyResource)
        })
    })
  })

  describe('#_buildQuery', () => {
    it('Should return an empty string when options.params is an empty object', () => {
      assert.equal(client._buildQuery({ params: {} }), '')
    })

    it('Should add params to query string', () => {
      assert.equal(client._buildQuery({ params: { limit: 1 } }), '?limit=1')
    })

    it('Should convert array params to csv', () => {
      assert.equal(client._buildQuery({ params: { ids: [ 1, 2 ] } }), '?ids=1%2C2')
    })
  })

  describe('with mocked request adapter', () => {
    beforeEach(() => {
      client.mock((method, url, headers, body) => {
        if (url.includes('/resources/myid')) {
          return jsonResponse(200, { id: 'myid', object: 'my_resource' })
        } else if (url.includes('/resources') && method === 'POST') {
          return jsonResponse(422, { error: { type: 'transaction' } })
        } else {
          return jsonResponse(404, { error: { type: 'not_found' } })
        }
      })
    })

    describe('#getResource', () => {
      it('Should return a resource given a valid id', () => {
        return client.getResource('myid')
          .then(resource => {
            assert(resource instanceof MyResource)
            assert(client.calledWith('GET', sinon.match('/resources/myid')))
          })
      })

      it('Should throw a NotFoundError given an invalid id', () => {
        return client.getResource('idontexist')
          .catch(err => {
            assert(err instanceof recurly.errors.NotFoundError)
            assert(client.calledWith('GET', sinon.match('/resources/idontexist')))
          })
      })
    })

    describe('#createResource', () => {
      describe('When details are invalid', () => {
        it('Should throw a TransactionError', () => {
          return client.createResource({ myString: 'test' })
            .catch(err => {
              assert(err instanceof recurly.errors.TransactionError)
              assert(client.calledWith('POST', sinon.match('/resources')))
            })
        })
      })
    })
  })

  describe('adapter contract behavior', () => {
    it('Should propagate transport-level errors from the adapter', () => {
      client.mock(() => Promise.reject(new Error('ECONNREFUSED')))
      return client.getResource('myid')
        .then(() => { assert.fail('Expected rejection') })
        .catch(err => {
          assert.equal(err.message, 'ECONNREFUSED')
        })
    })

    it('Should not include transport headers in what is passed to the adapter', () => {
      let capturedHeaders
      client.mock((method, url, headers, body) => {
        capturedHeaders = headers
        return jsonResponse(200, { id: 'myid', object: 'my_resource' })
      })
      return client.getResource('myid').then(() => {
        assert.equal(capturedHeaders['Accept-Encoding'], undefined)
        assert.equal(capturedHeaders['Content-Length'], undefined)
      })
    })
  })

  describe('with a response without a body', () => {
    it('Should throw a BadRequestError on 400', () => {
      client.mock(() => emptyResponse(400))
      return client.listResources().count()
        .catch(err => {
          assert(err instanceof recurly.errors.BadRequestError)
          assert(client.calledWith('HEAD', sinon.match('/resources')))
        })
    })

    it('Should throw a UnauthorizedError on 401', () => {
      client.mock(() => emptyResponse(401))
      return client.listResources().count()
        .catch(err => {
          assert(err instanceof recurly.errors.UnauthorizedError)
          assert(client.calledWith('HEAD', sinon.match('/resources')))
        })
    })

    it('Should throw a NotFoundError on 404', () => {
      client.mock(() => emptyResponse(404))
      return client.listResources().count()
        .catch(err => {
          assert(err instanceof recurly.errors.NotFoundError)
          assert(client.calledWith('HEAD', sinon.match('/resources')))
        })
    })

    it('Should throw a UnprocessableEntityError on 422', () => {
      client.mock(() => emptyResponse(422))
      return client.listResources().count()
        .catch(err => {
          assert(err instanceof recurly.errors.UnprocessableEntityError)
          assert(client.calledWith('HEAD', sinon.match('/resources')))
        })
    })

    it('Should throw a InternalServerError on 500', () => {
      client.mock(() => emptyResponse(500))
      return client.listResources().count()
        .catch(err => {
          assert(err instanceof recurly.errors.InternalServerError)
          assert(client.calledWith('HEAD', sinon.match('/resources')))
        })
    })

    it('Should throw a generic ApiError on an unhandled status', () => {
      client.mock(() => emptyResponse(426))
      return client.listResources().count()
        .catch(err => {
          assert(err instanceof recurly.ApiError)
          assert(client.calledWith('HEAD', sinon.match('/resources')))
        })
    })
  })
})
