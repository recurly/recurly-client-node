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
 * GeneralLedgerAccount
 * @typedef {Object} GeneralLedgerAccount
 * @prop {string} accountType
 * @prop {string} code - Unique code to identify the ledger account. Each code must start with a letter or number. The following special characters are allowed: `-_.,:`
 * @prop {Date} createdAt - Created at
 * @prop {string} description - Optional description.
 * @prop {string} id - The ID of a general ledger account. General ledger accounts are only accessible as a part of the Recurly RevRec Standard and Recurly RevRec Advanced features.
 * @prop {string} object - Object type
 * @prop {Date} updatedAt - Last updated at
 */
class GeneralLedgerAccount extends Resource {
  static getSchema () {
    return {
      accountType: String,
      code: String,
      createdAt: Date,
      description: String,
      id: String,
      object: String,
      updatedAt: Date
    }
  }
}

module.exports = GeneralLedgerAccount
