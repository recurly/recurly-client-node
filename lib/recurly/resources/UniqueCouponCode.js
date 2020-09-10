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
 * UniqueCouponCode
 * @typedef {Object} UniqueCouponCode
 * @prop {string} bulkCouponCode - The Coupon code of the parent Bulk Coupon
 * @prop {string} bulkCouponId - The Coupon ID of the parent Bulk Coupon
 * @prop {string} code - The code the customer enters to redeem the coupon.
 * @prop {Date} createdAt - Created at
 * @prop {Date} expiredAt - The date and time the coupon was expired early or reached its `max_redemptions`.
 * @prop {string} id - Unique Coupon Code ID
 * @prop {string} object - Object type
 * @prop {Date} redeemedAt - The date and time the unique coupon code was redeemed.
 * @prop {string} state - Indicates if the unique coupon code is redeemable or why not.
 * @prop {Date} updatedAt - Updated at
 */
class UniqueCouponCode extends Resource {
  static getSchema () {
    return {
      bulkCouponCode: String,
      bulkCouponId: String,
      code: String,
      createdAt: Date,
      expiredAt: Date,
      id: String,
      object: String,
      redeemedAt: Date,
      state: String,
      updatedAt: Date
    }
  }
}

module.exports = UniqueCouponCode
