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
 * PlanPricing
 * @typedef {Object} PlanPricing
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} priceSegmentId - The price segment ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For requests, the code can also be used. Use prefix `code-`, e.g. `code-gold`.
 * @prop {number} setupFee - This field is deprecated, please use top level `setup_fees` instead. Amount of one-time setup fee automatically charged at the beginning of a subscription billing cycle. For subscription plans with a trial, the setup fee will be charged at the time of signup. Setup fees do not increase with the quantity of a subscription plan.
 * @prop {boolean} taxInclusive - This field is deprecated. Please do not use it.
 * @prop {number} unitAmount - This field should not be sent when the pricing model is `'ramp'`.
 */
class PlanPricing extends Resource {
  static getSchema () {
    return {
      currency: String,
      priceSegmentId: String,
      setupFee: Number,
      taxInclusive: Boolean,
      unitAmount: Number
    }
  }
}

module.exports = PlanPricing
