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
 * Entitlement
 * @typedef {Object} Entitlement
 * @prop {Date} createdAt - Time object was created.
 * @prop {CustomerPermission} customerPermission
 * @prop {Array.<GrantedBy>} grantedBy - Subscription or item that granted the customer permission.
 * @prop {string} object - Entitlement
 * @prop {Date} updatedAt - Time the object was last updated
 */
class Entitlement extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      customerPermission: 'CustomerPermission',
      grantedBy: ['GrantedBy'],
      object: String,
      updatedAt: Date
    }
  }
}

module.exports = Entitlement
