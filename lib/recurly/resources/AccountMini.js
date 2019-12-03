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
 * AccountMini
 * @typedef {Object} AccountMini
 * @prop {string} billTo
 * @prop {string} code - The unique identifier of the account.
 * @prop {string} company
 * @prop {string} email - The email address used for communicating with this customer.
 * @prop {string} firstName
 * @prop {string} id
 * @prop {string} lastName
 * @prop {string} object - Object type
 * @prop {string} parentAccountId
 */
class AccountMini extends Resource {
  static getSchema () {
    return {
      billTo: String,
      code: String,
      company: String,
      email: String,
      firstName: String,
      id: String,
      lastName: String,
      object: String,
      parentAccountId: String
    }
  }
}

module.exports = AccountMini
