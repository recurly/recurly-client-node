'use strict'

/**
 * PlanPricing
 * @typedef {Object} PlanPricing
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {number} setupFee - Amount of one-time setup fee automatically charged at the beginning of a subscription billing cycle. For subscription plans with a trial, the setup fee will be charged at the time of signup. Setup fees do not increase with the quantity of a subscription plan.
 * @prop {number} unitAmount - Unit price
 */
class PlanPricing {}

module.exports = PlanPricing
