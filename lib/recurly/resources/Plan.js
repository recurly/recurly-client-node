'use strict';

/**
 * Plan
 * @typedef {Object} Plan
 * @prop {string} accounting_code - Accounting code for invoice line items for the plan. If no value is provided, it defaults to plan's code.
 * @prop {boolean} auto_renew - Subscriptions will automatically inherit this value once they are active. If `auto_renew` is `true`, then a subscription will automatically renew its term at renewal. If `auto_renew` is `false`, then a subscription will expire at the end of its term. `auto_renew` can be overridden on the subscription record itself.
 * @prop {string} code - Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
 * @prop {datetime} created_at - Created at
 * @prop {Array.<object>} currencies - Pricing
 * @prop {datetime} deleted_at - Deleted at
 * @prop {string} description - Optional description, not displayed.
 * @prop {object} hosted_pages - Hosted pages settings
 * @prop {string} id - Plan ID
 * @prop {number} interval_length - Length of the plan's billing interval in `interval_unit`.
 * @prop {string} interval_unit - Unit for the plan's billing interval.
 * @prop {string} name - This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
 * @prop {string} setup_fee_accounting_code - Accounting code for invoice line items for the plan's setup fee. If no value is provided, it defaults to plan's accounting code.
 * @prop {string} state - The current state of the plan.
 * @prop {string} tax_code - Optional field for EU VAT merchants and Avalara AvaTax Pro merchants. If you are using Recurly's EU VAT feature, you can use values of 'unknown', 'physical', or 'digital'. If you have your own AvaTax account configured, you can use Avalara tax codes to assign custom tax rules.
 * @prop {boolean} tax_exempt - `true` exempts tax on the plan, `false` applies tax on the plan.
 * @prop {number} total_billing_cycles - Automatically terminate subscriptions after a defined number of billing cycles. Number of billing cycles before the plan automatically stops renewing, defaults to `null` for continuous, automatic renewal.
 * @prop {number} trial_length - Length of plan's trial period in `trial_units`. `0` means `no trial`.
 * @prop {string} trial_unit - Units for the plan's trial period.
 * @prop {datetime} updated_at - Last updated at
 */
class Plan {}

module.exports = Plan
