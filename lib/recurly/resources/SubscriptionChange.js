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
 * @prop {SubscriptionChangeBillingInfo} billingInfo - Accept nested attributes for three_d_secure_action_result_token_id
 * @prop {Date} createdAt - Created at
 * @prop {Array.<CustomField>} customFields - The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
 * @prop {Date} deletedAt - Deleted at
 * @prop {string} id - The ID of the Subscription Change.
 * @prop {InvoiceCollection} invoiceCollection - Invoice Collection
 * @prop {string} object - Object type
 * @prop {PlanMini} plan - Just the important parts.
 * @prop {number} quantity - Subscription quantity
 * @prop {string} revenueScheduleType - Revenue schedule type
 * @prop {SubscriptionShipping} shipping - Subscription shipping details
 * @prop {string} subscriptionId - The ID of the subscription that is going to be changed.
 * @prop {boolean} taxInclusive - Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
 * @prop {number} unitAmount - Unit amount
 * @prop {Date} updatedAt - Updated at
 */
class SubscriptionChange extends Resource {
  static getSchema () {
    return {
      activateAt: Date,
      activated: Boolean,
      addOns: ['SubscriptionAddOn'],
      billingInfo: 'SubscriptionChangeBillingInfo',
      createdAt: Date,
      customFields: ['CustomField'],
      deletedAt: Date,
      id: String,
      invoiceCollection: 'InvoiceCollection',
      object: String,
      plan: 'PlanMini',
      quantity: Number,
      revenueScheduleType: String,
      shipping: 'SubscriptionShipping',
      subscriptionId: String,
      taxInclusive: Boolean,
      unitAmount: Number,
      updatedAt: Date
    }
  }
}

module.exports = SubscriptionChange
