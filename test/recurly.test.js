/* globals describe, it */

const assert = require('assert').strict
const recurly = require('../lib/recurly')
const Client = require('../lib/recurly/Client')
const Account = require('../lib/recurly/resources/Account')
const pkg = require('../package.json')

describe('recurly', () => {
  describe('Dependencies', () => {
    it('Should have no runtime dependencies', () => {
      const msg = `
        We do not allow adding runtime dependencies to this
        library for security and maintainability reasons.
        The "dependencies" key in package.json should be
        an empty object
      `
      let numDeps = Object.keys(pkg.dependencies || {}).length
      assert.equal(numDeps, 0, msg)
    })
    it('Should have no peer dependencies', () => {
      const msg = `
        We do not allow adding runtime dependencies to this
        library for security and maintainability reasons.
        The "peerDependencies" key in package.json should be
        an empty object
      `
      let numDeps = Object.keys(pkg.peerDependencies || {}).length
      assert.equal(numDeps, 0, msg)
    })
    it('Should have no optional dependencies', () => {
      const msg = `
        We do not allow adding runtime dependencies to this
        library for security and maintainability reasons.
        The "optionalDependencies" key in package.json should be
        an empty object
      `
      let numDeps = Object.keys(pkg.optionalDependencies || {}).length
      assert.equal(numDeps, 0, msg)
    })
  })
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
