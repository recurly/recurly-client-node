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
 * ErrorOverLimit
 * @typedef {Object} ErrorOverLimit
 * @prop {string} message - This credit card has too many cvv check attempts.
 * @prop {string} type - Type
 */
class ErrorOverLimit extends Resource {
  static getSchema () {
    return {
      message: String,
      type: String
    }
  }
}

module.exports = ErrorOverLimit
