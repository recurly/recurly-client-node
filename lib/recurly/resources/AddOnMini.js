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
 * AddOnMini
 * @typedef {Object} AddOnMini
 * @prop {string} accountingCode - Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
 * @prop {string} code - The unique identifier for the add-on within its plan.
 * @prop {string} id - Add-on ID
 * @prop {string} name - Describes your add-on and will appear in subscribers' invoices.
 * @prop {string} object - Object type
 */
class AddOnMini extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      code: String,
      id: String,
      name: String,
      object: String
    }
  }
}

module.exports = AddOnMini
