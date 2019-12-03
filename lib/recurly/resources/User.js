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
 * User
 * @typedef {Object} User
 * @prop {Date} createdAt
 * @prop {Date} deletedAt
 * @prop {string} email
 * @prop {string} firstName
 * @prop {string} id
 * @prop {string} lastName
 * @prop {string} object - Object type
 * @prop {string} timeZone
 */
class User extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      deletedAt: Date,
      email: String,
      firstName: String,
      id: String,
      lastName: String,
      object: String,
      timeZone: String
    }
  }
}

module.exports = User
