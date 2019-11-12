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
 * Subscription
 * @typedef {Object} Subscription
 * @prop {AccountMini} account
 * @prop {Date} activatedAt - Activated at
 * @prop {Array.<SubscriptionAddOn>} addOns - Add-ons
 * @prop {number} addOnsTotal - Total price of add-ons
 * @prop {Date} bankAccountAuthorizedAt - Recurring subscriptions paid with ACH will have this attribute set. This timestamp is used for alerting customers to reauthorize in 3 years in accordance with NACHA rules. If a subscription becomes inactive or the billing info is no longer a bank account, this timestamp is cleared.
 * @prop {Date} canceledAt - Canceled at
 * @prop {string} collectionMethod - Collection method
 * @prop {Array.<CouponRedemptionMini>} couponRedemptions - Coupon redemptions
 * @prop {Date} createdAt - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {Date} currentPeriodEndsAt - Current billing period ends at
 * @prop {Date} currentPeriodStartedAt - Current billing period started at
 * @prop {Array.<CustomField>} customFields
 * @prop {string} customerNotes - Customer notes
 * @prop {string} expirationReason - Expiration reason
 * @prop {Date} expiresAt - Expires at
 * @prop {string} id - Subscription ID
 * @prop {number} netTerms - Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
 * @prop {Date} pausedAt - Null unless subscription is paused or will pause at the end of the current billing period.
 * @prop {SubscriptionChange} pendingChange
 * @prop {PlanMini} plan
 * @prop {string} poNumber - For manual invoicing, this identifies the PO number associated with the subscription.
 * @prop {number} quantity - Subscription quantity
 * @prop {number} remainingBillingCycles - Remaining billing cycles
 * @prop {number} remainingPauseCycles - Null unless subscription is paused or will pause at the end of the current billing period.
 * @prop {ShippingAddress} shippingAddress
 * @prop {string} state - State
 * @prop {number} subtotal - Estimated total, before tax.
 * @prop {string} termsAndConditions - Terms and conditions
 * @prop {Date} trialEndsAt - Trial period ends at
 * @prop {Date} trialStartedAt - Trial period started at
 * @prop {number} unitAmount - Subscription unit price
 * @prop {Date} updatedAt - Last updated at
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 */
class Subscription extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      activatedAt: Date,
      addOns: ['SubscriptionAddOn'],
      addOnsTotal: Number,
      bankAccountAuthorizedAt: Date,
      canceledAt: Date,
      collectionMethod: String,
      couponRedemptions: ['CouponRedemptionMini'],
      createdAt: Date,
      currency: String,
      currentPeriodEndsAt: Date,
      currentPeriodStartedAt: Date,
      customFields: ['CustomField'],
      customerNotes: String,
      expirationReason: String,
      expiresAt: Date,
      id: String,
      netTerms: Number,
      pausedAt: Date,
      pendingChange: 'SubscriptionChange',
      plan: 'PlanMini',
      poNumber: String,
      quantity: Number,
      remainingBillingCycles: Number,
      remainingPauseCycles: Number,
      shippingAddress: 'ShippingAddress',
      state: String,
      subtotal: Number,
      termsAndConditions: String,
      trialEndsAt: Date,
      trialStartedAt: Date,
      unitAmount: Number,
      updatedAt: Date,
      uuid: String
    }
  }
}

module.exports = Subscription
