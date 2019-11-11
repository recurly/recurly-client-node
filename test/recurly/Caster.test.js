/* globals describe, it */

require('../test_helper')
const assert = require('assert').strict
const caster = require('../../lib/recurly/Caster')
const resources = require('../../lib/recurly/resources')
const Empty = resources.Empty

describe('Caster', () => {
  describe('#castJsonResponse', () => {
    it('Should return Empty for undefined or null arguments', () => {
      assert(caster.castJsonResponse(null) instanceof Empty)
      assert(caster.castJsonResponse(undefined) instanceof Empty)
    })

    it('Should cast an Account', () => {
      const account = caster.castJsonResponse(JSON.stringify({
        object: 'account',
        address: {
          city: 'New Orleans'
        }
      }))

      assert(account instanceof resources.Account)
      assert(account.address instanceof resources.Address)
    })

    it('Should cast a Page of data', () => {
      const page = caster.castJsonResponse(JSON.stringify({
        object: 'list',
        has_more: true,
        next: '/accounts',
        data: [
          {
            object: 'account',
            code: '123',
            address: {
              city: 'New Orleans'
            }
          },
          {
            object: 'account',
            code: '124',
            address: {
              city: 'New Orleans'
            }
          }
        ]
      }))

      assert(page instanceof resources.List)
      assert.equal(page.constructor.name, 'Page')
      assert.equal(page.hasMore, true)
      assert(page.data[0] instanceof resources.Account)
      assert(page.data[0].address instanceof resources.Address)
      assert.equal(page.data[0].code, '123')
    })
  })

  describe('#castRequest', () => {
    it('Should turn the request from a js format to Recurly format', () => {
      const casted = caster.castRequest({
        myString: 'My Attribute',
        mySubResource: {
          myString: 'My Sub Attribute'
        },
        myStringArray: [
          'My String 1',
          'My String 2'
        ],
        myEmptyArray: [],
        mySubResourceList: [
          {
            myString: 'My Sub Attribute'
          },
          {
            myString: 'My Sub Attribute'
          }
        ],
        myNull: null,
        myUndefined: undefined,
        myDateTime: new Date(Date.UTC(2022, 1, 1, 0, 0, 0))
      })

      const expected = {
        my_string: 'My Attribute',
        my_sub_resource: {
          my_string: 'My Sub Attribute'
        },
        my_string_array: [
          'My String 1', 'My String 2'
        ],
        my_empty_array: [],
        my_sub_resource_list: [
          {
            my_string: 'My Sub Attribute'
          },
          {
            my_string: 'My Sub Attribute'
          }
        ],
        my_null: null,
        my_undefined: null,
        my_date_time: '2022-02-01T00:00:00.000Z'
      }

      assert.deepEqual(casted, expected)
    })
  })
})
