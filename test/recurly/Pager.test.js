/* globals describe, it, beforeEach, afterEach */

require('../test_helper')
const { MyResource } = require('../mock_resources')
const assert = require('assert').strict
const { MockClient } = require('../mock_client')
const { HttpResponse, jsonResponse } = require('../http_test_helpers')
const Pager = require('../../lib/recurly/Pager')

const client = new MockClient('myapikey')
const pager = new Pager(client, '/resources', { params: { limit: 200 } })

describe('Pager', () => {
  describe('#constructor', () => {
    it('Should set the internal state', () => {
      assert.equal(pager.client, client)
      assert.equal(pager.path, '/resources')
      assert.deepEqual(pager.options, { params: { limit: 200 } })
    })
  })

  afterEach(() => {
    client.restore()
  })

  describe('#first', () => {
    beforeEach(() => {
      client.mock((method, url, headers, body) => {
        if (method === 'GET' && url.includes('/resources?limit=1')) {
          return jsonResponse(200, {
            object: 'list',
            has_more: false,
            next: null,
            data: [
              { id: '1', object: 'my_resource' },
              { id: '2', object: 'my_resource' },
              { id: '3', object: 'my_resource' }
            ]
          })
        }
        return jsonResponse(404, { error: { type: 'not_found' } })
      })
    })

    it('Should return the first item', () => {
      let p = client.listResources()
      return p.first().then(resource => {
        assert(resource instanceof MyResource)
        assert.equal(resource.id, '1')
      })
    })
  })

  describe('#count', () => {
    beforeEach(() => {
      client.mock((method, url, headers, body) => {
        if (method === 'HEAD' && url.includes('/resources?sort=updated_at')) {
          return Promise.resolve(new HttpResponse(200, { 'recurly-total-records': '9000' }, null))
        }
        return jsonResponse(404, { error: { type: 'not_found' } })
      })
    })

    it('Should return the count from recurly-total-records header', () => {
      let p = client.listResources({ params: { sort: 'updated_at' } })
      return p.count().then(count => {
        assert.equal(count, 9000)
      })
    })
  })

  describe('with multiple pages', () => {
    beforeEach(() => {
      client.mock((method, url, headers, body) => {
        if (url.includes('/resources?state=active&limit=3&cursor=1234567890')) {
          return jsonResponse(200, {
            object: 'list',
            has_more: false,
            next: '',
            data: [
              { id: 3, object: 'my_resource' },
              { id: 4, object: 'my_resource' }
            ]
          })
        } else if (url.includes('/resources?state=active&limit=3')) {
          return jsonResponse(200, {
            object: 'list',
            has_more: true,
            next: '/resources?state=active&limit=3&cursor=1234567890',
            data: [
              { id: 0, object: 'my_resource' },
              { id: 1, object: 'my_resource' },
              { id: 2, object: 'my_resource' }
            ]
          })
        }
        return jsonResponse(404, { error: { type: 'not_found' } })
      })
    })

    describe('#each', () => {
      it('Should return an asynciterable', () => {
        assert(typeof pager.each === 'function')
      })
      it('Should page through each component', () => {
        const resources = client.listResources({ params: { state: 'active', limit: 3 } })
        let count = 0

        return (async () => {
          for await (const r of resources.each()) {
            assert(r instanceof MyResource)
            assert.equal(r.id, count)
            count++
          }
          assert.equal(client.callCount(), 2)
          assert.equal(count, 5)
        })()
      })
    })

    describe('#eachPage', () => {
      it('Should return an asynciterable', () => {
        assert(typeof pager.eachPage === 'function')
      })
      it('Should page through each page', () => {
        const resources = client.listResources({ params: { state: 'active', limit: 3 } })
        let count = 0
        let pageCount = 0

        return (async () => {
          for await (const page of resources.eachPage()) {
            page.forEach(r => {
              assert(r instanceof MyResource)
              assert.equal(r.id, count)
              count++
            })
            pageCount++
          }
          assert.equal(client.callCount(), 2)
          assert.equal(count, 5)
          assert.equal(pageCount, 2)
        })()
      })
    })
  })
})
