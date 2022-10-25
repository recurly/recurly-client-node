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
 * GrantedBy
 * @typedef {Object} GrantedBy
 * @prop {string} id - The ID of the subscription or external subscription that grants the permission to the account.
 * @prop {string} object - Object Type
 */
class GrantedBy extends Resource {
  static getSchema () {
    return {
      id: String,
      object: String
    }
  }
}

module.exports = GrantedBy
