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
 * ShippingMethodMini
 * @typedef {Object} ShippingMethodMini
 * @prop {string} code - The internal name used identify the shipping method.
 * @prop {string} id - Shipping Method ID
 * @prop {string} name - The name of the shipping method displayed to customers.
 * @prop {string} object - Object type
 */
class ShippingMethodMini extends Resource {
  static getSchema () {
    return {
      code: String,
      id: String,
      name: String,
      object: String
    }
  }
}

module.exports = ShippingMethodMini
