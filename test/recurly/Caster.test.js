/* globals describe, it */

const assert = require('assert').strict

const caster = require('../../lib/recurly/Caster')

class MyResource {}
class MySubResource {}

describe('Caster', () => {
  describe('#castResponse', () => {
    it('Should turn the response from a Recurly format to a js format', () => {
      const resourceDefs = {
        MyResource: MyResource,
        MySubResource: MySubResource
      }

      const response = {
        object: 'my_resource',
        my_attribute: 'My Attribute',
        my_sub_resource: {
          object: 'my_sub_resource',
          my_sub_attribute: 'My Sub Attribute'
        },
        my_sub_resource_list: [
          {
            object: 'my_sub_resource',
            my_sub_attribute: 'My Sub Attribute'
          },
          {
            object: 'my_sub_resource',
            my_sub_attribute: 'My Sub Attribute'
          }
        ],
        my_string_list: [ 'string1', 'string2' ],
        my_date_time: '2020-01-01T00:00:00Z'
      }

      const casted = caster.castResponse(response, resourceDefs)

      const expected = new MyResource()
      expected.myAttribute = 'My Attribute'
      expected.mySubResource = new MySubResource()
      expected.mySubResource.mySubAttribute = 'My Sub Attribute'
      expected.mySubResourceList = []
      for (let i = 0; i < 2; i++) {
        const subResource = new MySubResource()
        subResource.mySubAttribute = 'My Sub Attribute'
        expected.mySubResourceList.push(subResource)
      }
      expected.myStringList = [ 'string1', 'string2' ]
      expected.myDateTime = new Date('2020-01-01T00:00:00Z')

      assert.deepEqual(casted, expected)
    })
  })
  describe('#castRequest', () => {
    it('Should turn the request from a js format to Recurly format', () => {
      const casted = caster.castRequest({
        myAttribute: 'My Attribute',
        mySubResource: {
          mySubAttribute: 'My Sub Attribute'
        },
        mySubResourceList: [
          {
            mySubAttribute: 'My Sub Attribute'
          },
          {
            mySubAttribute: 'My Sub Attribute'
          }
        ]
      })

      const expected = {
        my_attribute: 'My Attribute',
        my_sub_resource: {
          my_sub_attribute: 'My Sub Attribute'
        },
        my_sub_resource_list: [
          {
            my_sub_attribute: 'My Sub Attribute'
          },
          {
            my_sub_attribute: 'My Sub Attribute'
          }
        ]
      }

      assert.deepEqual(casted, expected)
    })
  })
})
