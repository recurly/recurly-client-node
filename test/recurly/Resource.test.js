/* globals describe, it */

require('../test_helper')
const assert = require('assert').strict
const Schema = require('../../lib/recurly/schemas').Schema
const resourceDefs = require('../mock_resources')
const { MyResource, MySubResource } = resourceDefs

describe('Resource', () => {
  describe('.getCompiledSchema', () => {
    it('Should compile the schema correctly for all types', () => {
      const schema = MyResource.getCompiledSchema()

      // check that Schema was built
      assert.equal(schema.type, MyResource)
      assert(schema instanceof Schema)

      // check that schema was cached on the type
      assert.equal(schema, MyResource._compiledSchema)

      const props = schema.properties

      // check property types
      assert.equal(props.myString.constructor.name, 'PrimitiveProperty')
      assert.equal(props.myInt.constructor.name, 'PrimitiveProperty')
      assert.equal(props.myFloat.constructor.name, 'PrimitiveProperty')
      assert.equal(props.myArray.constructor.name, 'PrimitiveProperty')
      assert.equal(props.myObject.constructor.name, 'PrimitiveProperty')
      assert.equal(props.myBoolean.constructor.name, 'PrimitiveProperty')
      assert.equal(props.myDateTime.constructor.name, 'DateProperty')
      assert.equal(props.mySubResource.constructor.name, 'ResourceProperty')
      assert.equal(props.mySubResourceArray.constructor.name, 'ArrayProperty')

      // ensures properties were constructed correctly
      assert.equal(props.mySubResource.type, MySubResource)
      assert.equal(props.mySubResourceArray.type.constructor.name, 'ResourceProperty')
      assert.equal(props.mySubResourceArray.type.type, MySubResource)
    })
  })
})
