/* globals before */

const mockResources = require('./mock_resources')
const resources = require('../lib/recurly/resources')
const Schema = require('../lib/recurly/schemas').Schema

// Adds the mock resources to the resource locator before
// every test is run
before(() => {
  Schema.locateResource = name => mockResources[name] || resources[name]
})
