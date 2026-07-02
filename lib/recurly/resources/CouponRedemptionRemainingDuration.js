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
 * CouponRedemptionRemainingDuration
 * @typedef {Object} CouponRedemptionRemainingDuration
 * @prop {Date} expiresAt - Present when `type` is `temporal`. The datetime after which this redemption will no longer apply.
 * @prop {number} redemptionsRemaining - The number of redemption periods remaining for which this coupon will still apply.
 * @prop {string} type - The coupon's duration type. `temporal` includes an `expires_at` timestamp. `billing_periods` includes a `redemptions_remaining` count of billing cycles. `forever` and `single_use` have no additional fields.
 */
class CouponRedemptionRemainingDuration extends Resource {
  static getSchema () {
    return {
      expiresAt: Date,
      redemptionsRemaining: Number,
      type: String
    }
  }
}

module.exports = CouponRedemptionRemainingDuration
