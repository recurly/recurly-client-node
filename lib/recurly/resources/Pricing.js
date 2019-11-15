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
 * Pricing
 * @typedef {Object} Pricing
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {number} unitAmount - Unit price
 */
class Pricing extends Resource {
  static getSchema () {
    return {
      currency: String,
      unitAmount: Number
    }
  }
}

module.exports = Pricing
