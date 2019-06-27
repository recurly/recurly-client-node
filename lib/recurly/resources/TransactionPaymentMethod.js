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
 * TransactionPaymentMethod
 * @typedef {Object} TransactionPaymentMethod
 * @prop {string} cardType - Visa, MasterCard, American Express, Discover, JCB, etc.
 * @prop {number} expMonth - Expiration month.
 * @prop {number} expYear - Expiration year.
 * @prop {string} firstSix - Credit card number's first six digits.
 * @prop {string} lastFour - Credit card number's last four digits.
 */
class TransactionPaymentMethod extends Resource {
  static getSchema () {
    return {
      cardType: String,
      expMonth: Number,
      expYear: Number,
      firstSix: String,
      lastFour: String
    }
  }
}

module.exports = TransactionPaymentMethod
