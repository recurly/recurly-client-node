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
 * AddOn
 * @typedef {Object} AddOn
 * @prop {string} accountingCode - Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
 * @prop {string} code - The unique identifier for the add-on within its plan.
 * @prop {Date} createdAt - Created at
 * @prop {Array.<Pricing>} currencies - Add-on pricing
 * @prop {number} defaultQuantity - Default quantity for the hosted pages.
 * @prop {Date} deletedAt - Deleted at
 * @prop {boolean} displayQuantity - Determines if the quantity field is displayed on the hosted pages for the add-on.
 * @prop {string} externalSku - Optional, stock keeping unit to link the item to other inventory systems.
 * @prop {string} id - Add-on ID
 * @prop {ItemMini} item - Just the important parts.
 * @prop {string} name - Describes your add-on and will appear in subscribers' invoices.
 * @prop {string} object - Object type
 * @prop {boolean} optional - Whether the add-on is optional for the customer to include in their purchase on the hosted payment page. If false, the add-on will be included when a subscription is created through the Recurly UI. However, the add-on will not be included when a subscription is created through the API.
 * @prop {string} planId - Plan ID
 * @prop {string} revenueScheduleType - When this add-on is invoiced, the line item will use this revenue schedule. If `item_code`/`item_id` is part of the request then `revenue_schedule_type` must be absent in the request as the value will be set from the item.
 * @prop {string} state - Add-ons can be either active or inactive.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
 * @prop {string} tierType - The pricing model for the add-on.  For more information, [click here](https://docs.recurly.com/docs/billing-models#section-quantity-based).
 * @prop {Array.<Tier>} tiers - Tiers
 * @prop {Date} updatedAt - Last updated at
 */
class AddOn extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      code: String,
      createdAt: Date,
      currencies: ['Pricing'],
      defaultQuantity: Number,
      deletedAt: Date,
      displayQuantity: Boolean,
      externalSku: String,
      id: String,
      item: 'ItemMini',
      name: String,
      object: String,
      optional: Boolean,
      planId: String,
      revenueScheduleType: String,
      state: String,
      taxCode: String,
      tierType: String,
      tiers: ['Tier'],
      updatedAt: Date
    }
  }
}

module.exports = AddOn
