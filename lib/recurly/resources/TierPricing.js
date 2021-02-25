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
 * TierPricing
 * @typedef {Object} TierPricing
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {number} unitAmount - Allows up to 2 decimal places. Required unless `unit_amount_decimal` is provided.
 * @prop {string} unitAmountDecimal - Allows up to 9 decimal places. Only supported when `add_on_type` = `usage`. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided.
 */
class TierPricing extends Resource {
  static getSchema () {
    return {
      currency: String,
      unitAmount: Number,
      unitAmountDecimal: String
    }
  }
}

module.exports = TierPricing
