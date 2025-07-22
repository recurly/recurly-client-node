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
 * PriceSegment
 * @typedef {Object} PriceSegment
 * @prop {string} code - The price segment code, e.g. `my-price-segment`.
 * @prop {string} id - The price segment ID, e.g. `e28zov4fw0v2`.
 * @prop {string} object - Object type
 */
class PriceSegment extends Resource {
  static getSchema () {
    return {
      code: String,
      id: String,
      object: String
    }
  }
}

module.exports = PriceSegment
