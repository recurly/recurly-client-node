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
 * AccountBalanceAmount
 * @typedef {Object} AccountBalanceAmount
 * @prop {number} amount - Total amount the account is past due.
 * @prop {number} availableCreditAmount - Total amount of the open balances on credit invoices for the account.
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {number} processingPrepaymentAmount - Total amount for the prepayment credit invoices in a `processing` state on the account.
 */
class AccountBalanceAmount extends Resource {
  static getSchema () {
    return {
      amount: Number,
      availableCreditAmount: Number,
      currency: String,
      processingPrepaymentAmount: Number
    }
  }
}

module.exports = AccountBalanceAmount
