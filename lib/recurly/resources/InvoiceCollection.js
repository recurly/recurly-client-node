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
 * InvoiceCollection
 * @typedef {Object} InvoiceCollection
 * @prop {Invoice} chargeInvoice
 * @prop {Array.<Invoice>} creditInvoices - Credit invoices
 * @prop {string} object - Object type
 */
class InvoiceCollection extends Resource {
  static getSchema () {
    return {
      chargeInvoice: 'Invoice',
      creditInvoices: ['Invoice'],
      object: String
    }
  }
}

module.exports = InvoiceCollection
