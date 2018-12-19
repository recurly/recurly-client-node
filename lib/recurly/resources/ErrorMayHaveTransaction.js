'use strict'

/**
 * ErrorMayHaveTransaction
 * @typedef {Object} ErrorMayHaveTransaction
 * @prop {string} message - Message
 * @prop {Array.<Object>} params - Parameter specific errors
 * @prop {Object} transactionError - This is only included on errors with `type=transaction`.
 * @prop {string} type - Type
 */
class ErrorMayHaveTransaction {}

module.exports = ErrorMayHaveTransaction
