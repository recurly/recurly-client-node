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
 * PlanRampInterval
 * @typedef {Object} PlanRampInterval
 * @prop {Array.<PlanRampPricing>} currencies - Represents the price for the ramp interval.
 * @prop {number} startingBillingCycle - Represents the billing cycle where a ramp interval starts.
 */
class PlanRampInterval extends Resource {
  static getSchema () {
    return {
      currencies: ['PlanRampPricing'],
      startingBillingCycle: Number
    }
  }
}

module.exports = PlanRampInterval
