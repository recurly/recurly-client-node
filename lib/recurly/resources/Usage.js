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
 * Usage
 * @typedef {Object} Usage
 * @prop {number} amount - The amount of usage. Can be positive, negative, or 0. No decimals allowed, we will strip them. If the usage-based add-on is billed with a percentage, your usage will be a monetary amount you will want to format in cents. (e.g., $5.00 is "500").
 * @prop {Date} billedAt - When the usage record was billed on an invoice.
 * @prop {Date} createdAt - When the usage record was created in Recurly.
 * @prop {string} id
 * @prop {string} measuredUnitId - The ID of the measured unit associated with the add-on the usage record is for.
 * @prop {string} merchantTag - Custom field for recording the id in your own system associated with the usage, so you can provide auditable usage displays to your customers using a GET on this endpoint.
 * @prop {string} object - Object type
 * @prop {Date} recordingTimestamp - When the usage was recorded in your system.
 * @prop {string} tierType - The pricing model for the add-on.  For more information, [click here](https://docs.recurly.com/docs/billing-models#section-quantity-based). See our [Guide](https://developers.recurly.com/guides/item-addon-guide.html) for an overview of how to configure quantity-based pricing models.
 * @prop {Array.<SubscriptionAddOnTier>} tiers - The tiers and prices of the subscription based on the usage_timestamp. If tier_type = flat, tiers = null
 * @prop {number} unitAmount - Unit price
 * @prop {string} unitAmountDecimal - Unit price that can optionally support a sub-cent value.
 * @prop {Date} updatedAt - When the usage record was billed on an invoice.
 * @prop {number} usagePercentage - The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0.
 * @prop {Date} usageTimestamp - When the usage actually happened. This will define the line item dates this usage is billed under and is important for revenue recognition.
 * @prop {string} usageType - Type of usage, returns usage type if `add_on_type` is `usage`.
 */
class Usage extends Resource {
  static getSchema () {
    return {
      amount: Number,
      billedAt: Date,
      createdAt: Date,
      id: String,
      measuredUnitId: String,
      merchantTag: String,
      object: String,
      recordingTimestamp: Date,
      tierType: String,
      tiers: ['SubscriptionAddOnTier'],
      unitAmount: Number,
      unitAmountDecimal: String,
      updatedAt: Date,
      usagePercentage: Number,
      usageTimestamp: Date,
      usageType: String
    }
  }
}

module.exports = Usage
