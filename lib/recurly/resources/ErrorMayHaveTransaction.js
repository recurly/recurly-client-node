/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
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
