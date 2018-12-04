/* globals describe, it */

const assert = require('assert').strict

const ApiError = require('../../lib/recurly/ApiError')

describe('ApiError', () => {
  describe('#constructor', () => {
    it('Should set the internal state', () => {
      const err = new ApiError('my err msg', 'validation', [{ param: 'code' }])
      assert.equal(err.name, 'RecurlyApiError')
      assert.equal(err.type, 'validation')
      assert.deepEqual(err.params, [{ param: 'code' }])
    })
  })
})
