/* globals describe, it, before */

'use strict'

const assert = require('assert').strict
const recurly = require('../../lib/recurly')

const API_KEY = process.env.RECURLY_API_KEY

describe('HttpAdapter integration', function () {
  before(function () {
    if (!API_KEY) this.skip()
  })

  it('custom adapter is injected and used for a real API call', async function () {
    this.timeout(10000)

    let executeCalled = false

    class TrackingAdapter extends recurly.DefaultHttpAdapter {
      execute (method, url, headers, body) {
        executeCalled = true
        return super.execute(method, url, headers, body)
      }
    }

    const client = new recurly.Client(API_KEY, {
      httpAdapter: new TrackingAdapter()
    })

    const count = await client.listAccounts({ params: { limit: 1 } }).count()

    assert.ok(typeof count === 'number', 'count() should return a number')
    assert.ok(executeCalled, 'adapter.execute() should have been called')
  })
})
