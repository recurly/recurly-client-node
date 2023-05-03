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
 * TaxDetail
 * @typedef {Object} TaxDetail
 * @prop {boolean} billable - Whether or not the line item is taxable. Only populated for a single LineItem fetch when Avalara for Communications is enabled.
 * @prop {string} level - Provides the jurisdiction level for the Communications tax applied. Example values include city, state and federal. Present only when Avalara for Communications is enabled.
 * @prop {string} name - Provides the name of the Communications tax applied. Present only when Avalara for Communications is enabled.
 * @prop {number} rate - Provides the tax rate for the region.
 * @prop {string} region - Provides the tax region applied on an invoice. For Canadian Sales Tax, this will be either the 2 letter province code or country code. Not present when Avalara for Communications is enabled.
 * @prop {number} tax - The total tax applied for this tax type.
 * @prop {string} type - Provides the tax type for the region or type of Comminications tax when Avalara for Communications is enabled. For Canadian Sales Tax, this will be GST, HST, QST or PST.
 */
class TaxDetail extends Resource {
  static getSchema () {
    return {
      billable: Boolean,
      level: String,
      name: String,
      rate: Number,
      region: String,
      tax: Number,
      type: String
    }
  }
}

module.exports = TaxDetail
