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
 * @prop {boolean} autoRenew - Whether the subscription renews at the end of its term.
 * @prop {Date} bankAccountAuthorizedAt - Recurring subscriptions paid with ACH will have this attribute set. This timestamp is used for alerting customers to reauthorize in 3 years in accordance with NACHA rules. If a subscription becomes inactive or the billing info is no longer a bank account, this timestamp is cleared.
 * @prop {Date} canceledAt - Canceled at
 * @prop {string} collectionMethod - Collection method
 * @prop {Array.<CouponRedemptionMini>} couponRedemptions - Coupon redemptions
 * @prop {Date} createdAt - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {Date} currentPeriodEndsAt - Current billing period ends at
 * @prop {Date} currentPeriodStartedAt - Current billing period started at
 * @prop {Date} currentTermEndsAt - When the term ends. This is calculated by a plan's interval and `total_billing_cycles` in a term. Subscription changes with a `timeframe=renewal` will be applied on this date.
 * @prop {Date} currentTermStartedAt - The start date of the term when the first billing period starts. The subscription term is the length of time that a customer will be committed to a subscription. A term can span multiple billing periods.
 * @prop {Array.<CustomField>} customFields
 * @prop {string} customerNotes - Customer notes
 * @prop {string} expirationReason - Expiration reason
 * @prop {Date} expiresAt - Expires at
 * @prop {string} id - Subscription ID
 * @prop {number} netTerms - Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
 * @prop {string} object - Object type
 * @prop {Date} pausedAt - Null unless subscription is paused or will pause at the end of the current billing period.
 * @prop {SubscriptionChange} pendingChange
 * @prop {PlanMini} plan
 * @prop {string} poNumber - For manual invoicing, this identifies the PO number associated with the subscription.
 * @prop {number} quantity - Subscription quantity
 * @prop {number} remainingBillingCycles - The remaining billing cycles in the current term.
 * @prop {number} remainingPauseCycles - Null unless subscription is paused or will pause at the end of the current billing period.
 * @prop {number} renewalBillingCycles - If `auto_renew=true`, when a term completes, `total_billing_cycles` takes this value as the length of subsequent terms. Defaults to the plan's `total_billing_cycles`.
 * @prop {SubscriptionShipping} shipping
 * @prop {string} state - State
 * @prop {number} subtotal - Estimated total, before tax.
 * @prop {string} termsAndConditions - Terms and conditions
 * @prop {number} totalBillingCycles - The number of cycles/billing periods in a term. When `remaining_billing_cycles=0`, if `auto_renew=true` the subscription will renew and a new term will begin, otherwise the subscription will expire.
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
      autoRenew: Boolean,
      bankAccountAuthorizedAt: Date,
      canceledAt: Date,
      collectionMethod: String,
      couponRedemptions: ['CouponRedemptionMini'],
      createdAt: Date,
      currency: String,
      currentPeriodEndsAt: Date,
      currentPeriodStartedAt: Date,
      currentTermEndsAt: Date,
      currentTermStartedAt: Date,
      customFields: ['CustomField'],
      customerNotes: String,
      expirationReason: String,
      expiresAt: Date,
      id: String,
      netTerms: Number,
      object: String,
      pausedAt: Date,
      pendingChange: 'SubscriptionChange',
      plan: 'PlanMini',
      poNumber: String,
      quantity: Number,
      remainingBillingCycles: Number,
      remainingPauseCycles: Number,
      renewalBillingCycles: Number,
      shipping: 'SubscriptionShipping',
      state: String,
      subtotal: Number,
      termsAndConditions: String,
      totalBillingCycles: Number,
      trialEndsAt: Date,
      trialStartedAt: Date,
      unitAmount: Number,
      updatedAt: Date,
      uuid: String
    }
  }
}

module.exports = Subscription
