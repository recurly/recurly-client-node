/* globals describe, it */

require('../test_helper')
const assert = require('assert').strict
const resources = require('../../lib/recurly/resources')
const Empty = resources.Empty
const Schema = require('../../lib/recurly/schemas').Schema

const allResources = Object.keys(resources).map(k => {
  const klass = resources[k]
  return klass
}).filter(klass => {
  return typeof klass.getSchema === 'function'
})

describe('resources', () => {
  describe('schemas', () => {
    it('Should have the Page resource under the key "List"', () => {
      assert.equal(resources.List.name, 'Page')
    })

    it('All resources should have a valid schema', () => {
      const allowedPrimitives = [String, Date, Number, Boolean, Object, Array, Date]
      assert.ok(allResources.length > 1)
      allResources.forEach(r => {
        const name = r.name
        const schema = r.getSchema()
        assert.ok(typeof (schema) === 'object')
        if (r !== Empty) {
          assert.ok(Object.keys(schema).length > 0)
          for (const prop in schema) {
            const type = schema[prop]
            const err = `${name} has invalid schema for "${prop}".`
            if (typeof type === 'string') {
              assert.equal(typeof resources[type], 'function', err)
            } else if (Array.isArray(type) && type.length === 1 && typeof type[0] === 'string') {
              assert.equal(typeof resources[type[0]], 'function', err)
            } else {
              assert.ok(allowedPrimitives.includes(type), err)
            }
          }
        }
      })
    })

    it('All resources should be able to compile a Schema without error', () => {
      allResources.forEach(r => assert.ok(r.getCompiledSchema() instanceof Schema))
    })
  })
})
