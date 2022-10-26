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
 * CustomerPermission
 * @typedef {Object} CustomerPermission
 * @prop {string} code - Customer permission code.
 * @prop {string} description - Description of customer permission.
 * @prop {string} id - Customer permission ID.
 * @prop {string} name - Customer permission name.
 * @prop {string} object - It will always be "customer_permission".
 */
class CustomerPermission extends Resource {
  static getSchema () {
    return {
      code: String,
      description: String,
      id: String,
      name: String,
      object: String
    }
  }
}

module.exports = CustomerPermission
