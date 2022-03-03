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
 * PercentageTier
 * @typedef {Object} PercentageTier
 * @prop {number} endingAmount - Ending amount for the tier. Allows up to 2 decimal places. The last tier ending_amount is null.
 * @prop {string} usagePercentage - Decimal usage percentage.
 */
class PercentageTier extends Resource {
  static getSchema () {
    return {
      endingAmount: Number,
      usagePercentage: String
    }
  }
}

module.exports = PercentageTier
