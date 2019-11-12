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
 * Site
 * @typedef {Object} Site
 * @prop {Address} address
 * @prop {Date} createdAt - Created at
 * @prop {Date} deletedAt - Deleted at
 * @prop {string} id - Site ID
 * @prop {string} mode - Mode
 * @prop {Settings} settings
 * @prop {string} subdomain
 * @prop {Date} updatedAt - Updated at
 */
class Site extends Resource {
  static getSchema () {
    return {
      address: 'Address',
      createdAt: Date,
      deletedAt: Date,
      id: String,
      mode: String,
      settings: 'Settings',
      subdomain: String,
      updatedAt: Date
    }
  }
}

module.exports = Site
