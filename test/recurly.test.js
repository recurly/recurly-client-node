/* globals describe, it */

const assert = require('assert').strict

const recurly = require('../lib/recurly')

const Client = require('../lib/recurly/Client')

const Account = require('../lib/recurly/resources/Account')

describe('recurly', () => {
  describe('#Client', () => {
    it('Should expose the Client in the top level module', () => {
      assert.equal(recurly.Client, Client)
    })
  })
  describe('#Account', () => {
    it('Should expose resources in the top level module', () => {
      assert.equal(recurly.Account, Account)
    })
  })
})
