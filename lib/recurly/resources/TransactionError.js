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
 * TransactionError
 * @typedef {Object} TransactionError
 * @prop {string} category - Category
 * @prop {string} code - Code
 * @prop {string} merchantAdvice - Merchant message
 * @prop {string} message - Customer message
 * @prop {string} object - Object type
 * @prop {string} threeDSecureActionTokenId - Returned when 3-D Secure authentication is required for a transaction. Pass this value to Recurly.js so it can continue the challenge flow.
 * @prop {string} transactionId - Transaction ID
 */
class TransactionError extends Resource {
  static getSchema () {
    return {
      category: String,
      code: String,
      merchantAdvice: String,
      message: String,
      object: String,
      threeDSecureActionTokenId: String,
      transactionId: String
    }
  }
}

module.exports = TransactionError
