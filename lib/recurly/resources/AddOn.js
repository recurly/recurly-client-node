/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * AddOn
 * @typedef {Object} AddOn
 * @prop {string} accountingCode - Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
 * @prop {string} code - The unique identifier for the add-on within its plan.
 * @prop {datetime} createdAt - Created at
 * @prop {Array.<AddOnPricing>} currencies - Add-on pricing
 * @prop {number} defaultQuantity - Default quantity for the hosted pages.
 * @prop {datetime} deletedAt - Deleted at
 * @prop {boolean} displayQuantity - Determines if the quantity field is displayed on the hosted pages for the add-on.
 * @prop {string} id - Add-on ID
 * @prop {string} name - Describes your add-on and will appear in subscribers' invoices.
 * @prop {string} planId - Plan ID
 * @prop {string} state - Add-ons can be either active or inactive.
 * @prop {string} taxCode - Optional field for EU VAT merchants and Avalara AvaTax Pro merchants. If you are using Recurly's EU VAT feature, you can use values of 'unknown', 'physical', or 'digital'. If you have your own AvaTax account configured, you can use Avalara tax codes to assign custom tax rules.
 * @prop {datetime} updatedAt - Last updated at
 */
class AddOn {}

module.exports = AddOn
