/* globals describe, it, before, after */

require('../test_helper')
const utils = require('../../lib/recurly/utils')
const inspect = require('util').inspect
const assert = require('assert').strict
const resourceDefs = require('../mock_resources')
const { MyResource, MySubResource } = resourceDefs
const {
  Schema,
  Property,
  PrimitiveProperty,
  DateProperty,
  ArrayProperty,
  ResourceProperty
} = require('../../lib/recurly/schemas')

describe('schemas', () => {
  describe('Schema', () => {
    it('Should return a cast MyResource from an Object', () => {
      const schema = new Schema(MyResource)
      const resource = schema.cast({ myString: 'My String' })
      assert.ok(resource instanceof MyResource)
    })

    describe('with strict-mode = false', () => {
      before(() => { utils.STRICT_MODE = false })
      after(() => { utils.STRICT_MODE = true })

      it('Should leave an unknown property undefined', () => {
        const schema = new Schema(MyResource)
        const resource = schema.cast({ myString: 'My String', unknown: 'Unknown' })
        assert.equal(resource.myString, 'My String')
        assert.equal(resource.unknown, undefined)
      })
    })

    describe('with strict-mode = true', () => {
      before(() => { utils.STRICT_MODE = true })

      it('Should thrown an error with unknown property', () => {
        const schema = new Schema(MyResource)
        const statement = () => schema.cast({ myString: 'My String', unknown: 'Unknown' })
        assert.throws(statement, { name: 'Error', message: 'MyResource could not find schema property for value pair: unknown => \'Unknown\'' })
      })

      it('Should thrown an error with an invalid property', () => {
        const schema = new Schema(MyResource)
        const statement = () => schema.cast({ mySubResource: 'My String' })
        const propertyTypeInspect = inspect(MySubResource)
        assert.throws(statement, { name: 'Error', message: `MyResource could not map value pair mySubResource => 'My String' to schema type ResourceProperty { type: ${propertyTypeInspect} }` })
      })
    })
  })

  describe('Property', () => {
    describe('.build', () => {
      Schema.locateResource = name => resourceDefs[name]
      it('Should return a ResourceProperty for a string', () => {
        const prop = Property.build('MyResource')
        assert.ok(prop instanceof ResourceProperty)
        assert.equal(prop.type, MyResource)
      })
      it('Should return an ArrayProperty for an array of resources', () => {
        const prop = Property.build(['MyResource'])
        assert.ok(prop instanceof ArrayProperty)
        assert.ok(prop.type instanceof ResourceProperty)
        assert.equal(prop.type.type, MyResource)
      })
      it('Should return an DateProperty for a Date signature', () => {
        const prop = Property.build(Date)
        assert.ok(prop instanceof DateProperty)
      })
      it('Should return an PrimitiveProperty for a String signature', () => {
        const prop = Property.build(String)
        assert.ok(prop instanceof PrimitiveProperty)
      })
      it('Should return an PrimitiveProperty for a Number signature', () => {
        const prop = Property.build(Number)
        assert.ok(prop instanceof PrimitiveProperty)
      })
      it('Should return an PrimitiveProperty for a Boolean signature', () => {
        const prop = Property.build(Boolean)
        assert.ok(prop instanceof PrimitiveProperty)
      })
      it('Should return an PrimitiveProperty for a Array signature', () => {
        const prop = Property.build(Array)
        assert.ok(prop instanceof PrimitiveProperty)
      })
      it('Should return an PrimitiveProperty for a Object signature', () => {
        const prop = Property.build(Object)
        assert.ok(prop instanceof PrimitiveProperty)
      })
    })
  })
  describe('PrimitiveProperty', () => {
    describe('#isValid', () => {
      it('Should be valid for all types', () => {
        const prop = new PrimitiveProperty()
        assert.equal(prop.isValid({}), true)
        assert.equal(prop.isValid([]), true)
        assert.equal(prop.isValid(123), true)
        assert.equal(prop.isValid(123.4), true)
        assert.equal(prop.isValid(''), true)
        assert.equal(prop.isValid(true), true)
        assert.equal(prop.isValid(false), true)
      })
    })

    describe('#cast', () => {
      it('Should return the same value', () => {
        const prop = new PrimitiveProperty()
        const obj = {}
        const arr = []
        assert.equal(prop.cast(obj), obj)
        assert.equal(prop.cast(arr), arr)
        assert.equal(prop.cast(123), 123)
        assert.equal(prop.cast(123.4), 123.4)
        assert.equal(prop.cast(''), '')
        assert.equal(prop.cast(true), true)
        assert.equal(prop.cast(false), false)
      })
    })
  })

  describe('DateProperty', () => {
    describe('#isValid', () => {
      it('Should be valid for strings only', () => {
        const prop = new DateProperty()
        assert.equal(prop.isValid({}), false)
        assert.equal(prop.isValid([]), false)
        assert.equal(prop.isValid(123), false)
        assert.equal(prop.isValid(123.4), false)
        assert.equal(prop.isValid(''), true)
        assert.equal(prop.isValid(true), false)
        assert.equal(prop.isValid(false), false)
      })
    })

    describe('#cast', () => {
      it('Should parse a date from a string', () => {
        const prop = new DateProperty()
        const str = '2020-01-01T00:00:00Z'
        const expected = new Date(str)
        const actual = prop.cast(str)
        assert.equal(actual.getTime(), expected.getTime())
      })
    })
  })

  describe('ResourceProperty', () => {
    describe('#isValid', () => {
      it('Should be valid for objects only', () => {
        const prop = new ResourceProperty(MyResource)
        assert.equal(prop.isValid({}), true)
        assert.equal(prop.isValid([]), false)
        assert.equal(prop.isValid(123), false)
        assert.equal(prop.isValid(123.4), false)
        assert.equal(prop.isValid(''), false)
        assert.equal(prop.isValid(true), false)
        assert.equal(prop.isValid(false), false)
      })
    })

    describe('#cast', () => {
      it('Should cast a MyResource from an object', () => {
        const prop = new ResourceProperty(MyResource)
        const data = {
          my_string: 'My String',
          mySubResource: {
            my_string: 'My Sub String'
          }
        }
        const resource = prop.cast(data)
        assert.ok(resource instanceof MyResource)
        assert.ok(resource.mySubResource instanceof MySubResource)
        assert.equal(resource.myString, 'My String')
        assert.equal(resource.mySubResource.myString, 'My Sub String')
      })
    })
  })

  describe('ArrayProperty', () => {
    describe('#isValid', () => {
      it('Should valid for arrays of MyResource arrays of objects only', () => {
        const prop = new ArrayProperty(new ResourceProperty(MyResource))
        assert.equal(prop.isValid({}), false)
        assert.equal(prop.isValid(123), false)
        assert.equal(prop.isValid(123.4), false)
        assert.equal(prop.isValid(''), false)
        assert.equal(prop.isValid(true), false)
        assert.equal(prop.isValid(false), false)
        assert.equal(prop.isValid([123]), false)
        assert.equal(prop.isValid([123.4]), false)
        assert.equal(prop.isValid(['']), false)
        assert.equal(prop.isValid([true]), false)

        assert.equal(prop.isValid([]), true)
        assert.equal(prop.isValid([{}]), true)
      })
      describe('#cast', () => {
        it('Should cast an array of MyResources from an array of objects', () => {
          const prop = new ArrayProperty(new ResourceProperty(MyResource))
          const data = {
            my_string: 'My String',
            mySubResource: {
              my_string: 'My Sub String'
            }
          }
          const resources = prop.cast([data])
          assert.ok(Array.isArray(resources))
          const resource = resources[0]
          assert.ok(resource instanceof MyResource)
          assert.ok(resource.mySubResource instanceof MySubResource)
          assert.equal(resource.myString, 'My String')
          assert.equal(resource.mySubResource.myString, 'My Sub String')
        })
      })
    })
  })
})
