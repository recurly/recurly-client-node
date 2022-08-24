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
 * ErrorMayHaveCVV
 * @typedef {Object} ErrorMayHaveCVV
 * @prop {string} message - The security code you entered does not match. Please update the CVV and try again.
 * @prop {string} type - Type
 */
class ErrorMayHaveCVV extends Resource {
  static getSchema () {
    return {
      message: String,
      type: String
    }
  }
}

module.exports = ErrorMayHaveCVV
