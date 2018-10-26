'use strict';

/**
 * ErrorMayHaveTransaction
 * @typedef {Object} ErrorMayHaveTransaction
 * @prop {string} message - Message
 * @prop {Array.<object>} params - Parameter specific errors
 * @prop {object} transaction_error - This is only included on errors with `type=transaction`.
 * @prop {string} type - Type
 */
class ErrorMayHaveTransaction {}

module.exports = ErrorMayHaveTransaction
