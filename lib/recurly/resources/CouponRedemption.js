'use strict'

/**
 * CouponRedemption
 * @typedef {Object} CouponRedemption
 * @prop {string} accountId - The Account ID on which the coupon was applied.
 * @prop {Coupon} coupon
 * @prop {datetime} createdAt - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} discounted - The amount that was discounted upon the application of the coupon, formatted with the currency.
 * @prop {string} id - Coupon Redemption ID
 * @prop {datetime} removedAt - The date and time the redemption was removed from the account (un-redeemed).
 * @prop {string} state - Coupon Redemption state
 * @prop {datetime} updatedAt - Last updated at
 */
class CouponRedemption {}

module.exports = CouponRedemption
