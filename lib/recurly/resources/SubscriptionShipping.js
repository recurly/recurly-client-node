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
 * SubscriptionShipping
 * @typedef {Object} SubscriptionShipping
 * @prop {ShippingAddress} address
 * @prop {number} amount - Subscription's shipping cost
 * @prop {ShippingMethodMini} method
 * @prop {string} object - Object type
 */
class SubscriptionShipping extends Resource {
  static getSchema () {
    return {
      address: 'ShippingAddress',
      amount: Number,
      method: 'ShippingMethodMini',
      object: String
    }
  }
}

module.exports = SubscriptionShipping
