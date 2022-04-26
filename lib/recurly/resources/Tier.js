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
 * Tier
 * @typedef {Object} Tier
 * @prop {Array.<TierPricing>} currencies - Tier pricing
 * @prop {number} endingQuantity - Ending quantity for the tier. This represents a unit amount for unit-priced add ons. Must be left empty if it is the final tier.
 */
class Tier extends Resource {
  static getSchema () {
    return {
      currencies: ['TierPricing'],
      endingQuantity: Number
    }
  }
}

module.exports = Tier
