/* globals describe, it */

require('../test_helper')
const assert = require('assert').strict
const ApiError = require('../../lib/recurly/ApiError')

describe('ApiError', () => {
  describe('#constructor', () => {
    it('Should set the internal state', () => {
      const err = new ApiError('my err msg', 'validation', { params: [{ param: 'code' }] })
      assert.equal(err.name, 'RecurlyApiError')
      assert.equal(err.type, 'validation')
      assert.deepEqual(err.params, [{ param: 'code' }])
    })
  })
})
