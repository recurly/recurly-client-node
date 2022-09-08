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
 * SubscriptionRampIntervalResponse
 * @typedef {Object} SubscriptionRampIntervalResponse
 * @prop {number} remainingBillingCycles - Represents how many billing cycles are left in a ramp interval.
 * @prop {number} startingBillingCycle - Represents the billing cycle where a ramp interval starts.
 * @prop {number} unitAmount - Represents the price for the ramp interval.
 */
class SubscriptionRampIntervalResponse extends Resource {
  static getSchema () {
    return {
      remainingBillingCycles: Number,
      startingBillingCycle: Number,
      unitAmount: Number
    }
  }
}

module.exports = SubscriptionRampIntervalResponse
