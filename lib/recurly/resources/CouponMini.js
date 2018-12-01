'use strict'

/**
 * CouponMini
 * @typedef {Object} CouponMini
 * @prop {string} code - The code the customer enters to redeem the coupon.
 * @prop {string} coupon_type - Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
 * @prop {CouponDiscount} discount
 * @prop {datetime} expired_at - The date and time the coupon was expired early or reached its `max_redemptions`.
 * @prop {string} id - Coupon ID
 * @prop {string} name - The internal name for the coupon.
 * @prop {string} state - Indicates if the coupon is redeemable, and if it is not, why.
 */
class CouponMini {}

module.exports = CouponMini
