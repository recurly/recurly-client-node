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
 * ItemMini
 * @typedef {Object} ItemMini
 * @prop {string} code - Unique code to identify the item.
 * @prop {string} description - Optional, description.
 * @prop {string} id - Item ID
 * @prop {string} name - This name describes your item and will appear on the invoice when it's purchased on a one time basis.
 * @prop {string} object - Object type
 * @prop {string} state - The current state of the item.
 */
class ItemMini extends Resource {
  static getSchema () {
    return {
      code: String,
      description: String,
      id: String,
      name: String,
      object: String,
      state: String
    }
  }
}

module.exports = ItemMini
