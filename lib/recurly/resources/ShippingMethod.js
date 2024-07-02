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
 * ShippingMethod
 * @typedef {Object} ShippingMethod
 * @prop {string} accountingCode - Accounting code for shipping method.
 * @prop {string} code - The internal name used identify the shipping method.
 * @prop {Date} createdAt - Created at
 * @prop {Date} deletedAt - Deleted at
 * @prop {string} id - Shipping Method ID
 * @prop {string} liabilityGlAccountId - The ID of a general ledger account. General ledger accounts are only accessible as a part of the Recurly RevRec Standard and Recurly RevRec Advanced features.
 * @prop {string} name - The name of the shipping method displayed to customers.
 * @prop {string} object - Object type
 * @prop {string} performanceObligationId - The ID of a performance obligation. Performance obligations are only accessible as a part of the Recurly RevRec Standard and Recurly RevRec Advanced features.
 * @prop {string} revenueGlAccountId - The ID of a general ledger account. General ledger accounts are only accessible as a part of the Recurly RevRec Standard and Recurly RevRec Advanced features.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s built-in tax feature. The tax code values are specific to each tax system. If you are using Recurly’s built-in taxes the values are:  - `FR` – Common Carrier FOB Destination - `FR022000` – Common Carrier FOB Origin - `FR020400` – Non Common Carrier FOB Destination - `FR020500` – Non Common Carrier FOB Origin - `FR010100` – Delivery by Company Vehicle Before Passage of Title - `FR010200` – Delivery by Company Vehicle After Passage of Title - `NT` – Non-Taxable
 * @prop {Date} updatedAt - Last updated at
 */
class ShippingMethod extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      code: String,
      createdAt: Date,
      deletedAt: Date,
      id: String,
      liabilityGlAccountId: String,
      name: String,
      object: String,
      performanceObligationId: String,
      revenueGlAccountId: String,
      taxCode: String,
      updatedAt: Date
    }
  }
}

module.exports = ShippingMethod
