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
 * ReferenceOnlyCurrencyConversion
 * @typedef {Object} ReferenceOnlyCurrencyConversion
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} date - The date of the conversion rate.
 * @prop {string} rate - The conversion rate to the currency.
 * @prop {string} source - The source of the conversion rate.
 * @prop {number} subtotalInCents - The subtotal converted to the currency.
 * @prop {number} taxInCents - The tax converted to the currency.
 */
class ReferenceOnlyCurrencyConversion extends Resource {
  static getSchema () {
    return {
      currency: String,
      date: String,
      rate: String,
      source: String,
      subtotalInCents: Number,
      taxInCents: Number
    }
  }
}

module.exports = ReferenceOnlyCurrencyConversion
