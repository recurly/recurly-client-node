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
 * AccountNote
 * @typedef {Object} AccountNote
 * @prop {string} accountId
 * @prop {Date} createdAt
 * @prop {string} id
 * @prop {string} message
 * @prop {string} object - Object type
 * @prop {User} user
 */
class AccountNote extends Resource {
  static getSchema () {
    return {
      accountId: String,
      createdAt: Date,
      id: String,
      message: String,
      object: String,
      user: 'User'
    }
  }
}

module.exports = AccountNote
