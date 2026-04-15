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
 * UniqueCouponCodeGenerationResponse
 * @typedef {Object} UniqueCouponCodeGenerationResponse
 * @prop {string} object - Object type
 * @prop {Array.<UniqueCouponCode>} uniqueCouponCodes - An array containing the newly generated unique coupon codes.
 */
class UniqueCouponCodeGenerationResponse extends Resource {
  static getSchema () {
    return {
      object: String,
      uniqueCouponCodes: ['UniqueCouponCode']
    }
  }
}

module.exports = UniqueCouponCodeGenerationResponse
