/* globals describe, it */

require('../test_helper')
const assert = require('assert').strict
const caster = require('../../lib/recurly/Caster')
const resources = require('../../lib/recurly/resources')

describe('Caster', () => {
  describe('#castResponse', () => {
    it('Should return null for undefined or null arguments', () => {
      assert.equal(caster.castResponse(null), null)
      assert.equal(caster.castResponse(undefined), null)
    })

    it('Should cast an Account', () => {
      const account = caster.castResponse({
        object: 'account',
        address: {
          city: 'New Orleans'
        }
      })

      assert(account instanceof resources.Account)
      assert(account.address instanceof resources.Address)
    })

    it('Should cast a Page of data', () => {
      const page = caster.castResponse({
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
      })

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
        mySubResourceList: [
          {
            myString: 'My Sub Attribute'
          },
          {
            myString: 'My Sub Attribute'
          }
        ]
      })

      const expected = {
        my_string: 'My Attribute',
        my_sub_resource: {
          my_string: 'My Sub Attribute'
        },
        my_sub_resource_list: [
          {
            my_string: 'My Sub Attribute'
          },
          {
            my_string: 'My Sub Attribute'
          }
        ]
      }

      assert.deepEqual(casted, expected)
    })
  })
})
