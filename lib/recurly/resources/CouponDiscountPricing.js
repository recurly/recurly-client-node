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
 * CouponDiscountPricing
 * @typedef {Object} CouponDiscountPricing
 * @prop {number} amount - Value of the fixed discount that this coupon applies.
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 */
class CouponDiscountPricing extends Resource {
  static getSchema () {
    return {
      amount: Number,
      currency: String
    }
  }
}

module.exports = CouponDiscountPricing
