/* globals describe, it, beforeEach, afterEach */

require('../test_helper')
const sinon = require('sinon')
const { MyResource } = require('../mock_resources')
const assert = require('assert').strict
const recurly = require('../../lib/recurly')
const pkg = require('../../package.json')
const MockClient = require('../mock_client')

const client = new MockClient('myapikey')

describe('BaseClient', () => {
  afterEach(() => {
    // completely restore all fakes
    client.restore()
  })

  describe('#constructor', () => {
    it('Should set the internal state and headers', () => {
      assert.equal(client._getDefaultOptions().headers['Authorization'], 'Basic bXlhcGlrZXk6')
      assert.equal(client._getDefaultOptions().headers['User-Agent'], `Recurly/${pkg.version}; node`)
      assert.equal(client._getDefaultOptions().headers['Accept'], 'application/vnd.recurly.v2022-01-01')
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
  })

  describe('with mocked request adapter', () => {
    beforeEach(() => {
      client.mock((resp, options) => {
        if (options.path === '/resources/myid') {
          resp.status = 200
          resp.body = JSON.stringify({ id: 'myid', object: 'my_resource' })
        } else {
          resp.status = 404
          resp.body = JSON.stringify({ error: { type: 'not_found' } })
        }
        return Promise.resolve(resp)
      })
    })

    describe('#getResource', () => {
      it('Should return a resource given a valid id', () => {
        const resp = client.getResource('myid')
        return resp
          .then(resource => {
            assert(resource instanceof MyResource)

            let options = sinon.match({
              method: 'GET',
              path: '/resources/myid'
            })
            assert(client.calledWith(options, null))
          })
      })
      it('Should throw a NotFoundError given an invalid id', () => {
        const resp = client.getResource('idontexist')
        return resp
          .catch(err => {
            assert(err instanceof recurly.errors.NotFoundError)

            let options = sinon.match({
              method: 'GET',
              path: '/resources/idontexist'
            })
            assert(client.calledWith(options, null))
          })
      })
    })
  })

  describe('with a response without a body', () => {
    it('Should throw a BadRequestError on 400', () => {
      client.mock((resp, options) => {
        resp.status = 400
        resp.body = null
        return Promise.resolve(resp)
      })
      return client
        .listResources()
        .count()
        .catch(err => {
          assert(err instanceof recurly.errors.BadRequestError)

          let options = sinon.match({
            method: 'HEAD',
            path: '/resources'
          })
          assert(client.calledWith(options, null))
        })
    })
    it('Should throw a UnauthorizedError on 401', () => {
      client.mock((resp, options) => {
        resp.status = 401
        resp.body = null
        return Promise.resolve(resp)
      })
      return client
        .listResources()
        .count()
        .catch(err => {
          assert(err instanceof recurly.errors.UnauthorizedError)

          let options = sinon.match({
            method: 'HEAD',
            path: '/resources'
          })
          assert(client.calledWith(options, null))
        })
    })
    it('Should throw a NotFoundError on 404', () => {
      client.mock((resp, options) => {
        resp.status = 404
        resp.body = null
        return Promise.resolve(resp)
      })
      return client
        .listResources()
        .count()
        .catch(err => {
          assert(err instanceof recurly.errors.NotFoundError)

          let options = sinon.match({
            method: 'HEAD',
            path: '/resources'
          })
          assert(client.calledWith(options, null))
        })
    })
    it('Should throw a ValidationError on 422', () => {
      client.mock((resp, options) => {
        resp.status = 422
        resp.body = null
        return Promise.resolve(resp)
      })
      return client
        .listResources()
        .count()
        .catch(err => {
          assert(err instanceof recurly.errors.ValidationError)

          let options = sinon.match({
            method: 'HEAD',
            path: '/resources'
          })
          assert(client.calledWith(options, null))
        })
    })
    it('Should throw a InternalServerError on 500', () => {
      client.mock((resp, options) => {
        resp.status = 500
        resp.body = null
        return Promise.resolve(resp)
      })
      return client
        .listResources()
        .count()
        .catch(err => {
          assert(err instanceof recurly.errors.InternalServerError)

          let options = sinon.match({
            method: 'HEAD',
            path: '/resources'
          })
          assert(client.calledWith(options, null))
        })
    })
    it('Should throw a generic ApiError on an unhandled status', () => {
      client.mock((resp, options) => {
        resp.status = 426
        resp.body = null
        return Promise.resolve(resp)
      })
      return client
        .listResources()
        .count()
        .catch(err => {
          assert(err instanceof recurly.ApiError)

          let options = sinon.match({
            method: 'HEAD',
            path: '/resources'
          })
          assert(client.calledWith(options, null))
        })
    })
  })
})
