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
 * Error
 * @typedef {Object} Error
 * @prop {string} message - Message
 * @prop {Array.<Object>} params - Parameter specific errors
 * @prop {string} type - Type
 */
class Error extends Resource {
  static getSchema () {
    return {
      message: String,
      params: Array,
      type: String
    }
  }
}

module.exports = Error
