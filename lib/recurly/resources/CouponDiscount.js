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
 * CouponDiscount
 * @typedef {Object} CouponDiscount
 * @prop {Array.<CouponDiscountPricing>} currencies - This is only present when `type=fixed`.
 * @prop {number} percent - This is only present when `type=percent`.
 * @prop {CouponDiscountTrial} trial - This is only present when `type=free_trial`.
 * @prop {string} type
 */
class CouponDiscount extends Resource {
  static getSchema () {
    return {
      currencies: ['CouponDiscountPricing'],
      percent: Number,
      trial: 'CouponDiscountTrial',
      type: String
    }
  }
}

module.exports = CouponDiscount
