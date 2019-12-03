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
 * Item
 * @typedef {Object} Item
 * @prop {string} accountingCode - Accounting code for invoice line items.
 * @prop {string} code - Unique code to identify the item.
 * @prop {Date} createdAt - Created at
 * @prop {Array.<Pricing>} currencies - Item Pricing
 * @prop {Array.<CustomField>} customFields
 * @prop {Date} deletedAt - Deleted at
 * @prop {string} description - Optional, description.
 * @prop {string} externalSku - Optional, stock keeping unit to link the item to other inventory systems.
 * @prop {string} id - Item ID
 * @prop {string} name - This name describes your item and will appear on the invoice when it's purchased on a one time basis.
 * @prop {string} object - Object type
 * @prop {string} revenueScheduleType - Revenue schedule type
 * @prop {string} state - The current state of the item.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
 * @prop {boolean} taxExempt - `true` exempts tax on the item, `false` applies tax on the item.
 * @prop {Date} updatedAt - Last updated at
 */
class Item extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      code: String,
      createdAt: Date,
      currencies: ['Pricing'],
      customFields: ['CustomField'],
      deletedAt: Date,
      description: String,
      externalSku: String,
      id: String,
      name: String,
      object: String,
      revenueScheduleType: String,
      state: String,
      taxCode: String,
      taxExempt: Boolean,
      updatedAt: Date
    }
  }
}

module.exports = Item
