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
 * ExternalProductMini
 * @typedef {Object} ExternalProductMini
 * @prop {string} id - External product ID
 * @prop {string} name - The merchant-facing name of the external product.
 * @prop {string} object - Object type
 */
class ExternalProductMini extends Resource {
  static getSchema () {
    return {
      id: String,
      name: String,
      object: String
    }
  }
}

module.exports = ExternalProductMini
