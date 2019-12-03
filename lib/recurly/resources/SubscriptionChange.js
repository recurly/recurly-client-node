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
 * SubscriptionChange
 * @typedef {Object} SubscriptionChange
 * @prop {Date} activateAt - Activated at
 * @prop {boolean} activated - Returns `true` if the subscription change is activated.
 * @prop {Array.<SubscriptionAddOn>} addOns - These add-ons will be used when the subscription renews.
 * @prop {Date} createdAt - Created at
 * @prop {Date} deletedAt - Deleted at
 * @prop {string} id - The ID of the Subscription Change.
 * @prop {string} object - Object type
 * @prop {PlanMini} plan
 * @prop {number} quantity - Subscription quantity
 * @prop {SubscriptionShipping} shipping
 * @prop {string} subscriptionId - The ID of the subscription that is going to be changed.
 * @prop {number} unitAmount - Unit amount
 * @prop {Date} updatedAt - Updated at
 */
class SubscriptionChange extends Resource {
  static getSchema () {
    return {
      activateAt: Date,
      activated: Boolean,
      addOns: ['SubscriptionAddOn'],
      createdAt: Date,
      deletedAt: Date,
      id: String,
      object: String,
      plan: 'PlanMini',
      quantity: Number,
      shipping: 'SubscriptionShipping',
      subscriptionId: String,
      unitAmount: Number,
      updatedAt: Date
    }
  }
}

module.exports = SubscriptionChange
