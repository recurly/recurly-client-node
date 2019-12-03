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
 * @prop {Array.<AddOnPricing>} currencies - Add-on pricing
 * @prop {number} defaultQuantity - Default quantity for the hosted pages.
 * @prop {Date} deletedAt - Deleted at
 * @prop {boolean} displayQuantity - Determines if the quantity field is displayed on the hosted pages for the add-on.
 * @prop {string} id - Add-on ID
 * @prop {string} name - Describes your add-on and will appear in subscribers' invoices.
 * @prop {string} object - Object type
 * @prop {string} planId - Plan ID
 * @prop {string} state - Add-ons can be either active or inactive.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
 * @prop {Date} updatedAt - Last updated at
 */
class AddOn extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      code: String,
      createdAt: Date,
      currencies: ['AddOnPricing'],
      defaultQuantity: Number,
      deletedAt: Date,
      displayQuantity: Boolean,
      id: String,
      name: String,
      object: String,
      planId: String,
      state: String,
      taxCode: String,
      updatedAt: Date
    }
  }
}

module.exports = AddOn
