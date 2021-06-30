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
 * @prop {number} rate - Provides the tax rate for the region.
 * @prop {string} region - Provides the tax region applied on an invoice. For Canadian Sales Tax, this will be either the 2 letter province code or country code.
 * @prop {number} tax - The total tax applied for this tax type.
 * @prop {string} type - Provides the tax type for the region. For Canadian Sales Tax, this will be GST, HST, QST or PST.
 */
class TaxDetail extends Resource {
  static getSchema () {
    return {
      rate: Number,
      region: String,
      tax: Number,
      type: String
    }
  }
}

module.exports = TaxDetail
