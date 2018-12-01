'use strict'

/**
 * UniqueCouponCode
 * @typedef {Object} UniqueCouponCode
 * @prop {string} code - The code the customer enters to redeem the coupon.
 * @prop {datetime} created_at - Created at
 * @prop {datetime} expired_at - The date and time the coupon was expired early or reached its `max_redemptions`.
 * @prop {string} id - Unique Coupon Code ID
 * @prop {datetime} redeemed_at - The date and time the unique coupon code was redeemed.
 * @prop {string} state - Indicates if the unique coupon code is redeemable or why not.
 * @prop {datetime} updated_at - Updated at
 */
class UniqueCouponCode {}

module.exports = UniqueCouponCode
