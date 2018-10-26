'use strict';

/**
 * AddOn
 * @typedef {Object} AddOn
 * @prop {string} accounting_code - Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
 * @prop {string} code - The unique identifier for the add-on within its plan.
 * @prop {datetime} created_at - Created at
 * @prop {Array.<object>} currencies - Add-on pricing
 * @prop {number} default_quantity - Default quantity for the hosted pages.
 * @prop {datetime} deleted_at - Deleted at
 * @prop {boolean} display_quantity - Determines if the quantity field is displayed on the hosted pages for the add-on.
 * @prop {string} id - Add-on ID
 * @prop {string} name - Describes your add-on and will appear in subscribers' invoices.
 * @prop {string} plan_id - Plan ID
 * @prop {string} state - Add-ons can be either active or inactive.
 * @prop {string} tax_code - Optional field for EU VAT merchants and Avalara AvaTax Pro merchants. If you are using Recurly's EU VAT feature, you can use values of 'unknown', 'physical', or 'digital'. If you have your own AvaTax account configured, you can use Avalara tax codes to assign custom tax rules.
 * @prop {datetime} updated_at - Last updated at
 */
class AddOn {}

module.exports = AddOn
