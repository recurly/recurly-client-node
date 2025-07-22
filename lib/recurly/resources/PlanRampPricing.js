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
 * PlanRampPricing
 * @typedef {Object} PlanRampPricing
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} priceSegmentId - The price segment ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For requests, the code can also be used. Use prefix `code-`, e.g. `code-gold`.
 * @prop {number} unitAmount - Represents the price for the Ramp Interval.
 */
class PlanRampPricing extends Resource {
  static getSchema () {
    return {
      currency: String,
      priceSegmentId: String,
      unitAmount: Number
    }
  }
}

module.exports = PlanRampPricing
