'use strict'

/**
 * UniqueCouponCode
 * @typedef {Object} UniqueCouponCode
 * @prop {string} code - The code the customer enters to redeem the coupon.
 * @prop {datetime} createdAt - Created at
 * @prop {datetime} expiredAt - The date and time the coupon was expired early or reached its `max_redemptions`.
 * @prop {string} id - Unique Coupon Code ID
 * @prop {datetime} redeemedAt - The date and time the unique coupon code was redeemed.
 * @prop {string} state - Indicates if the unique coupon code is redeemable or why not.
 * @prop {datetime} updatedAt - Updated at
 */
class UniqueCouponCode {}

module.exports = UniqueCouponCode
