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
 * Settings
 * @typedef {Object} Settings
 * @prop {Array.<string>} acceptedCurrencies
 * @prop {string} billingAddressRequirement - - full:      Full Address (Street, City, State, Postal Code and Country) - streetzip: Street and Postal Code only - zip:       Postal Code only - none:      No Address
 * @prop {string} defaultCurrency - The default 3-letter ISO 4217 currency code.
 */
class Settings extends Resource {
  static getSchema () {
    return {
      acceptedCurrencies: Array,
      billingAddressRequirement: String,
      defaultCurrency: String
    }
  }
}

module.exports = Settings
