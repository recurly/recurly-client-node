/* istanbul ignore file */
/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

const Resource = require('../Resource')

/**
 * BusinessEntityMini
 * @typedef {Object} BusinessEntityMini
 * @prop {string} code - The entity code of the business entity.
 * @prop {string} id - Business entity ID
 * @prop {string} name - This name describes your business entity and will appear on the invoice.
 * @prop {string} object - Object type
 */
class BusinessEntityMini extends Resource {
  static getSchema () {
    return {
      code: String,
      id: String,
      name: String,
      object: String
    }
  }
}

module.exports = BusinessEntityMini
