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
 * Entitlements
 * @typedef {Object} Entitlements
 * @prop {Array.<Entitlement>} data
 * @prop {boolean} hasMore - Indicates there are more results on subsequent pages.
 * @prop {string} next - Path to subsequent page of results.
 * @prop {string} object - Object Type
 */
class Entitlements extends Resource {
  static getSchema () {
    return {
      data: ['Entitlement'],
      hasMore: Boolean,
      next: String,
      object: String
    }
  }
}

module.exports = Entitlements
