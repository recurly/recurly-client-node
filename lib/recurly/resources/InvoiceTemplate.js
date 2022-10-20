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
 * InvoiceTemplate
 * @typedef {Object} InvoiceTemplate
 * @prop {string} code - Invoice template code.
 * @prop {Date} createdAt - When the invoice template was created in Recurly.
 * @prop {string} description - Invoice template description.
 * @prop {string} id
 * @prop {string} name - Invoice template name.
 * @prop {Date} updatedAt - When the invoice template was updated in Recurly.
 */
class InvoiceTemplate extends Resource {
  static getSchema () {
    return {
      code: String,
      createdAt: Date,
      description: String,
      id: String,
      name: String,
      updatedAt: Date,
    }
  }
}

module.exports = InvoiceTemplate
