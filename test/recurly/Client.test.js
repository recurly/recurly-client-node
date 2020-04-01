/* globals describe, it, beforeEach, afterEach */

require('../test_helper')
const sinon = require('sinon')
const assert = require('assert').strict
const BaseClient = require('../../lib/recurly/BaseClient')
const Client = require('../../lib/recurly/Client')

describe('Client', () => {
  let makeRequestStub
  let client

  beforeEach(() => {
    makeRequestStub = sinon.stub(BaseClient.prototype, '_makeRequest')
      .resolves({})
    client = new Client('myapikey')
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('#terminateSubscription', () => {
    it('Should pass empty params', async () => {
      await client.terminateSubscription('abcxyz')
      assert(makeRequestStub.calledWith('DELETE', '/subscriptions/abcxyz', {}))
    })

    it('Should pass non-empty params', async () => {
      await client.terminateSubscription('abcxyz', { refund: 'full' })
      assert(makeRequestStub.calledWith('DELETE', '/subscriptions/abcxyz', { refund: 'full' }))
    })
  })
})
