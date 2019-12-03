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
 * Plan
 * @typedef {Object} Plan
 * @prop {string} accountingCode - Accounting code for invoice line items for the plan. If no value is provided, it defaults to plan's code.
 * @prop {boolean} autoRenew - Subscriptions will automatically inherit this value once they are active. If `auto_renew` is `true`, then a subscription will automatically renew its term at renewal. If `auto_renew` is `false`, then a subscription will expire at the end of its term. `auto_renew` can be overridden on the subscription record itself.
 * @prop {string} code - Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
 * @prop {Date} createdAt - Created at
 * @prop {Array.<PlanPricing>} currencies - Pricing
 * @prop {Date} deletedAt - Deleted at
 * @prop {string} description - Optional description, not displayed.
 * @prop {PlanHostedPages} hostedPages - Hosted pages settings
 * @prop {string} id - Plan ID
 * @prop {number} intervalLength - Length of the plan's billing interval in `interval_unit`.
 * @prop {string} intervalUnit - Unit for the plan's billing interval.
 * @prop {string} name - This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
 * @prop {string} object - Object type
 * @prop {string} setupFeeAccountingCode - Accounting code for invoice line items for the plan's setup fee. If no value is provided, it defaults to plan's accounting code.
 * @prop {string} state - The current state of the plan.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
 * @prop {boolean} taxExempt - `true` exempts tax on the plan, `false` applies tax on the plan.
 * @prop {number} totalBillingCycles - Automatically terminate subscriptions after a defined number of billing cycles. Number of billing cycles before the plan automatically stops renewing, defaults to `null` for continuous, automatic renewal.
 * @prop {number} trialLength - Length of plan's trial period in `trial_units`. `0` means `no trial`.
 * @prop {string} trialUnit - Units for the plan's trial period.
 * @prop {Date} updatedAt - Last updated at
 */
class Plan extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      autoRenew: Boolean,
      code: String,
      createdAt: Date,
      currencies: ['PlanPricing'],
      deletedAt: Date,
      description: String,
      hostedPages: 'PlanHostedPages',
      id: String,
      intervalLength: Number,
      intervalUnit: String,
      name: String,
      object: String,
      setupFeeAccountingCode: String,
      state: String,
      taxCode: String,
      taxExempt: Boolean,
      totalBillingCycles: Number,
      trialLength: Number,
      trialUnit: String,
      updatedAt: Date
    }
  }
}

module.exports = Plan
