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
 * InvoiceMini
 * @typedef {Object} InvoiceMini
 * @prop {string} id - Invoice ID
 * @prop {string} number - Invoice number
 * @prop {string} object - Object type
 * @prop {string} state - Invoice state
 * @prop {string} type - Invoice type
 */
class InvoiceMini extends Resource {
  static getSchema () {
    return {
      id: String,
      number: String,
      object: String,
      state: String,
      type: String
    }
  }
}

module.exports = InvoiceMini
