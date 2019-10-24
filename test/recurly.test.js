/* globals describe, it */

const assert = require('assert').strict
const recurly = require('../lib/recurly')
const Client = require('../lib/recurly/Client')
const Account = require('../lib/recurly/resources/Account')
const ApiError = require('../lib/recurly/ApiError')
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
  describe('.Client', () => {
    it('Should expose the Client in the top level module', () => {
      assert.equal(recurly.Client, Client)
    })
  })
  describe('.Account', () => {
    it('Should expose resources in the top level module', () => {
      assert.equal(recurly.Account, Account)
    })
  })
  describe('.errors', () => {
    it('Should expose errors in the top level module', () => {
      assert(Object.keys(recurly.errors).length > 0)
      assert.equal(recurly.ApiError, ApiError)
    })
  })
  describe('Schema.locateResource', () => {
    it('Should implement Schema.locateResource', () => {
      const clazz = recurly.Schema.locateResource('Account')
      assert.equal(clazz, Account)
    })
  })
})
