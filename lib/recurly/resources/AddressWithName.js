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
 * AddressWithName
 * @typedef {Object} AddressWithName
 * @prop {string} city - City
 * @prop {string} country - Country, 2-letter ISO 3166-1 alpha-2 code.
 * @prop {string} firstName - First name
 * @prop {string} lastName - Last name
 * @prop {string} phone - Phone number
 * @prop {string} postalCode - Zip or postal code.
 * @prop {string} region - State or province.
 * @prop {string} street1 - Street 1
 * @prop {string} street2 - Street 2
 */
class AddressWithName extends Resource {
  static getSchema () {
    return {
      city: String,
      country: String,
      firstName: String,
      lastName: String,
      phone: String,
      postalCode: String,
      region: String,
      street1: String,
      street2: String
    }
  }
}

module.exports = AddressWithName