/* globals describe, it, beforeEach, afterEach */

require('../test_helper')
const { MyResource } = require('../mock_resources')
const assert = require('assert').strict
const MockClient = require('../mock_client')
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
    // completely restore all fakes
    client.restore()
  })

  describe('#first', () => {
    beforeEach(() => {
      client.mock((resp, options) => {
        if (options.method === 'GET' && options.path === '/resources?limit=1') {
          resp.status = 200
          resp.body = JSON.stringify({
            object: 'list',
            has_more: false,
            next: null,
            data: [
              { id: '1', object: 'my_resource' },
              { id: '2', object: 'my_resource' },
              { id: '3', object: 'my_resource' }
            ]
          })
        } else {
          resp.status = 404
          resp.body = { error: { type: 'not_found' } }
        }
        return Promise.resolve(resp)
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
      client.mock((resp, options) => {
        if (options.method === 'HEAD' && options.path === '/resources?sort=updated_at') {
          resp.status = 200
          resp.recordCount = 9000
        } else {
          resp.status = 404
          resp.body = JSON.stringify({ error: { type: 'not_found' } })
        }
        return Promise.resolve(resp)
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
      client.mock((resp, options) => {
        if (options.path === '/resources?state=active&limit=3') {
          resp.status = 200
          resp.body = JSON.stringify({
            object: 'list',
            has_more: true,
            next: '/resources?state=active&limit=3&cursor=1234567890',
            data: [
              { id: 0, object: 'my_resource' },
              { id: 1, object: 'my_resource' },
              { id: 2, object: 'my_resource' }
            ]
          })
        } else if (options.path === '/resources?state=active&limit=3&cursor=1234567890') {
          resp.status = 200
          resp.body = JSON.stringify({
            object: 'list',
            has_more: false,
            next: '',
            data: [
              { id: 3, object: 'my_resource' },
              { id: 4, object: 'my_resource' }
            ]
          })
        } else {
          resp.status = 404
          resp.body = { error: { type: 'not_found' } }
        }
        return Promise.resolve(resp)
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
