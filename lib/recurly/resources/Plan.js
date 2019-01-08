/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * Plan
 * @typedef {Object} Plan
 * @prop {string} accountingCode - Accounting code for invoice line items for the plan. If no value is provided, it defaults to plan's code.
 * @prop {boolean} autoRenew - Subscriptions will automatically inherit this value once they are active. If `auto_renew` is `true`, then a subscription will automatically renew its term at renewal. If `auto_renew` is `false`, then a subscription will expire at the end of its term. `auto_renew` can be overridden on the subscription record itself.
 * @prop {string} code - Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
 * @prop {datetime} createdAt - Created at
 * @prop {Array.<PlanPricing>} currencies - Pricing
 * @prop {datetime} deletedAt - Deleted at
 * @prop {string} description - Optional description, not displayed.
 * @prop {Object} hostedPages - Hosted pages settings
 * @prop {string} id - Plan ID
 * @prop {number} intervalLength - Length of the plan's billing interval in `interval_unit`.
 * @prop {string} intervalUnit - Unit for the plan's billing interval.
 * @prop {string} name - This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
 * @prop {string} setupFeeAccountingCode - Accounting code for invoice line items for the plan's setup fee. If no value is provided, it defaults to plan's accounting code.
 * @prop {string} state - The current state of the plan.
 * @prop {string} taxCode - Optional field for EU VAT merchants and Avalara AvaTax Pro merchants. If you are using Recurly's EU VAT feature, you can use values of 'unknown', 'physical', or 'digital'. If you have your own AvaTax account configured, you can use Avalara tax codes to assign custom tax rules.
 * @prop {boolean} taxExempt - `true` exempts tax on the plan, `false` applies tax on the plan.
 * @prop {number} totalBillingCycles - Automatically terminate subscriptions after a defined number of billing cycles. Number of billing cycles before the plan automatically stops renewing, defaults to `null` for continuous, automatic renewal.
 * @prop {number} trialLength - Length of plan's trial period in `trial_units`. `0` means `no trial`.
 * @prop {string} trialUnit - Units for the plan's trial period.
 * @prop {datetime} updatedAt - Last updated at
 */
class Plan {}

module.exports = Plan
