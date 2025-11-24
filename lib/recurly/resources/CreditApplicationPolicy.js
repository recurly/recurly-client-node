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
 * CreditApplicationPolicy
 * @typedef {Object} CreditApplicationPolicy
 * @prop {string} mode - Determines which credit invoices are applied to invoices: - `all`: All available credit invoices are applied (default) - `none`: No credit invoices are applied automatically
 */
class CreditApplicationPolicy extends Resource {
  static getSchema () {
    return {
      mode: String
    }
  }
}

module.exports = CreditApplicationPolicy
