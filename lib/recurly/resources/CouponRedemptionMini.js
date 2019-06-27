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
 * CouponRedemptionMini
 * @typedef {Object} CouponRedemptionMini
 * @prop {CouponMini} coupon
 * @prop {datetime} createdAt - Created at
 * @prop {string} discounted - The amount that was discounted upon the application of the coupon, formatted with the currency.
 * @prop {string} id - Coupon Redemption ID
 * @prop {string} state - Invoice state
 */
class CouponRedemptionMini extends Resource {
  static getSchema () {
    return {
      coupon: 'CouponMini',
      createdAt: Date,
      discounted: String,
      id: String,
      state: String
    }
  }
}

module.exports = CouponRedemptionMini
