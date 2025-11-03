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
 * TransactionNextAction
 * @typedef {Object} TransactionNextAction
 * @prop {string} type - The type of next action required.
 * @prop {string} value - The value associated with the next action type.
 */
class TransactionNextAction extends Resource {
  static getSchema () {
    return {
      type: String,
      value: String
    }
  }
}

module.exports = TransactionNextAction
