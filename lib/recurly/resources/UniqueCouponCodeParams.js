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
 * UniqueCouponCodeParams
 * @typedef {Object} UniqueCouponCodeParams
 * @prop {Date} beginTime - The date-time to be included when listing UniqueCouponCodes
 * @prop {number} limit - The number of UniqueCouponCodes that will be generated
 * @prop {string} order - Sort order to list newly generated UniqueCouponCodes (should always be `asc`)
 * @prop {string} sort - Sort field to list newly generated UniqueCouponCodes (should always be `created_at`)
 */
class UniqueCouponCodeParams extends Resource {
  static getSchema () {
    return {
      beginTime: Date,
      limit: Number,
      order: String,
      sort: String
    }
  }
}

module.exports = UniqueCouponCodeParams
