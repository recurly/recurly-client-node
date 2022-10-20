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
 * SubscriptionAddOnPercentageTier
 * @typedef {Object} SubscriptionAddOnPercentageTier
 * @prop {number} endingAmount - Ending amount for the tier. Allows up to 2 decimal places. Must be left empty if it is the final tier.
 * @prop {string} usagePercentage - The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places represented as a string. 
 */
class SubscriptionAddOnPercentageTier extends Resource {
  static getSchema () {
    return {
      endingAmount: Number,
      usagePercentage: String,
    }
  }
}

module.exports = SubscriptionAddOnPercentageTier
