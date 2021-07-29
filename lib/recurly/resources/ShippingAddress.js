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
 * ShippingAddress
 * @typedef {Object} ShippingAddress
 * @prop {string} accountId - Account ID
 * @prop {string} city
 * @prop {string} company
 * @prop {string} country - Country, 2-letter ISO 3166-1 alpha-2 code.
 * @prop {Date} createdAt - Created at
 * @prop {string} email
 * @prop {string} firstName
 * @prop {string} id - Shipping Address ID
 * @prop {string} lastName
 * @prop {string} nickname
 * @prop {string} object - Object type
 * @prop {string} phone
 * @prop {string} postalCode - Zip or postal code.
 * @prop {string} region - State or province.
 * @prop {string} street1
 * @prop {string} street2
 * @prop {Date} updatedAt - Updated at
 * @prop {string} vatNumber
 */
class ShippingAddress extends Resource {
  static getSchema () {
    return {
      accountId: String,
      city: String,
      company: String,
      country: String,
      createdAt: Date,
      email: String,
      firstName: String,
      id: String,
      lastName: String,
      nickname: String,
      object: String,
      phone: String,
      postalCode: String,
      region: String,
      street1: String,
      street2: String,
      updatedAt: Date,
      vatNumber: String
    }
  }
}

module.exports = ShippingAddress
