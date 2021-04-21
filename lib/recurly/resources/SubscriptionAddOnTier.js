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
 * SubscriptionAddOnTier
 * @typedef {Object} SubscriptionAddOnTier
 * @prop {number} endingQuantity - Ending quantity
 * @prop {number} unitAmount - Allows up to 2 decimal places. Optionally, override the tiers' default unit amount. If add-on's `add_on_type` is `usage` and `usage_type` is `percentage`, cannot be provided.
 * @prop {string} unitAmountDecimal - Allows up to 9 decimal places.  Optionally, override tiers' default unit amount. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. If add-on's `add_on_type` is `usage` and `usage_type` is `percentage`, cannot be provided.
 * @prop {string} usagePercentage - The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places represented as a string. A value between 0.0 and 100.0. Optionally, override tiers' default usage percentage. Required if add-on's `add_on_type` is `usage` and `usage_type` is `percentage`. Must be omitted otherwise.
 */
class SubscriptionAddOnTier extends Resource {
  static getSchema () {
    return {
      endingQuantity: Number,
      unitAmount: Number,
      unitAmountDecimal: String,
      usagePercentage: String
    }
  }
}

module.exports = SubscriptionAddOnTier
