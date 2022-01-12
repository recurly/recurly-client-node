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
 * AccountInvoiceTemplate
 * @typedef {Object} AccountInvoiceTemplate
 * @prop {string} id - Unique ID to identify the invoice template.
 * @prop {string} name - Template name
 */
class AccountInvoiceTemplate extends Resource {
  static getSchema () {
    return {
      id: String,
      name: String
    }
  }
}

module.exports = AccountInvoiceTemplate
