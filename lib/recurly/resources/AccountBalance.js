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
 * AccountBalance
 * @typedef {Object} AccountBalance
 * @prop {AccountMini} account - Account mini details
 * @prop {Array.<AccountBalanceAmount>} balances
 * @prop {string} object - Object type
 * @prop {boolean} pastDue
 */
class AccountBalance extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      balances: ['AccountBalanceAmount'],
      object: String,
      pastDue: Boolean
    }
  }
}

module.exports = AccountBalance
