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
 * ExternalAccountResponse
 * @typedef {Object} ExternalAccountResponse
 * @prop {Date} createdAt - Created at
 * @prop {string} externalAccountCode - Represents the account code for the external account.
 * @prop {string} externalConnectionType - Represents the connection type. `AppleAppStore` or `GooglePlayStore`
 * @prop {string} id - UUID of the external_account .
 * @prop {string} object
 * @prop {Date} updatedAt - Last updated at
 */
class ExternalAccountResponse extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      externalAccountCode: String,
      externalConnectionType: String,
      id: String,
      object: String,
      updatedAt: Date
    }
  }
}

module.exports = ExternalAccountResponse
