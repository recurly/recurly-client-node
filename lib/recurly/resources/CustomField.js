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
 * CustomField
 * @typedef {Object} CustomField
 * @prop {string} name - Fields must be created in the UI before values can be assigned to them.
 * @prop {string} value - Any values that resemble a credit card number or security code (CVV/CVC) will be rejected.
 */
class CustomField extends Resource {
  static getSchema () {
    return {
      name: String,
      value: String
    }
  }
}

module.exports = CustomField
