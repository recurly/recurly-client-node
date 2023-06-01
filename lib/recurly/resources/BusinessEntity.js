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
 * BusinessEntity
 * @typedef {Object} BusinessEntity
 * @prop {string} code - The entity code of the business entity.
 * @prop {Date} createdAt - Created at
 * @prop {string} defaultRegistrationNumber - Registration number for the customer used on the invoice.
 * @prop {string} defaultVatNumber - VAT number for the customer used on the invoice.
 * @prop {string} id - Business entity ID
 * @prop {Address} invoiceDisplayAddress - Address information for the business entity that will appear on the invoice.
 * @prop {string} name - This name describes your business entity and will appear on the invoice.
 * @prop {string} object - Object type
 * @prop {Array.<string>} subscriberLocationCountries - List of countries for which the business entity will be used.
 * @prop {Address} taxAddress - Address information for the business entity that will be used for calculating taxes.
 * @prop {Date} updatedAt - Last updated at
 */
class BusinessEntity extends Resource {
  static getSchema () {
    return {
      code: String,
      createdAt: Date,
      defaultRegistrationNumber: String,
      defaultVatNumber: String,
      id: String,
      invoiceDisplayAddress: 'Address',
      name: String,
      object: String,
      subscriberLocationCountries: Array,
      taxAddress: 'Address',
      updatedAt: Date
    }
  }
}

module.exports = BusinessEntity
