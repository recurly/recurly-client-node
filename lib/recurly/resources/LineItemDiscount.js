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
 * LineItemDiscount
 * @typedef {Object} LineItemDiscount
 * @prop {string} couponId - The ID of the coupon that generated this discount.
 * @prop {string} couponRedemptionId - The ID of the coupon redemption that generated this discount.
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {number} discountAmount - The amount discounted on this line item by this coupon redemption.
 * @prop {string} object - Will always be `line_item_discount`.
 * @prop {number} orderApplied - The order in which this discount was applied when multiple coupons were redeemed.
 */
class LineItemDiscount extends Resource {
  static getSchema () {
    return {
      couponId: String,
      couponRedemptionId: String,
      currency: String,
      discountAmount: Number,
      object: String,
      orderApplied: Number
    }
  }
}

module.exports = LineItemDiscount
