'use strict'

/**
 * CouponDiscount
 * @typedef {Object} CouponDiscount
 * @prop {Array.<object>} currencies - This is only present when `type=fixed`.
 * @prop {number} percent - This is only present when `type=percent`.
 * @prop {object} trial - This is only present when `type=free_trial`.
 * @prop {string} type
 */
class CouponDiscount {}

module.exports = CouponDiscount
