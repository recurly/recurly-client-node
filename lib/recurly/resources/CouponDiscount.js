'use strict'

/**
 * CouponDiscount
 * @typedef {Object} CouponDiscount
 * @prop {Array.<CouponDiscountPricing>} currencies - This is only present when `type=fixed`.
 * @prop {number} percent - This is only present when `type=percent`.
 * @prop {Object} trial - This is only present when `type=free_trial`.
 * @prop {string} type
 */
class CouponDiscount {}

module.exports = CouponDiscount
