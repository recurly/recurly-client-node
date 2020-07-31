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
 * SubscriptionAddOn
 * @typedef {Object} SubscriptionAddOn
 * @prop {AddOnMini} addOn - Just the important parts.
 * @prop {string} addOnSource - Used to determine where the associated add-on data is pulled from. If this value is set to `plan_add_on` or left blank, then add-on data will be pulled from the plan's add-ons. If the associated `plan` has `allow_any_item_on_subscriptions` set to `true` and this field is set to `item`, then the associated add-on data will be pulled from the site's item catalog.
 * @prop {Date} createdAt - Created at
 * @prop {Date} expiredAt - Expired at
 * @prop {string} id - Subscription Add-on ID
 * @prop {string} object - Object type
 * @prop {number} quantity - Add-on quantity
 * @prop {string} revenueScheduleType - Revenue schedule type
 * @prop {string} subscriptionId - Subscription ID
 * @prop {string} tierType - The type of tiering used by the Add-on.
 * @prop {Array.<SubscriptionAddOnTier>} tiers - If tiers are provided in the request, all existing tiers on the Subscription Add-on will be removed and replaced by the tiers in the request.
 * @prop {number} unitAmount - This is priced in the subscription's currency.
 * @prop {Date} updatedAt - Updated at
 * @prop {number} usagePercentage - The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0. Required if add_on_type is usage and usage_type is percentage.
 */
class SubscriptionAddOn extends Resource {
  static getSchema () {
    return {
      addOn: 'AddOnMini',
      addOnSource: String,
      createdAt: Date,
      expiredAt: Date,
      id: String,
      object: String,
      quantity: Number,
      revenueScheduleType: String,
      subscriptionId: String,
      tierType: String,
      tiers: ['SubscriptionAddOnTier'],
      unitAmount: Number,
      updatedAt: Date,
      usagePercentage: Number
    }
  }
}

module.exports = SubscriptionAddOn
