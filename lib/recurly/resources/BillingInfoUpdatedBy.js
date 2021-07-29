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
 * BillingInfoUpdatedBy
 * @typedef {Object} BillingInfoUpdatedBy
 * @prop {string} country - Country, 2-letter ISO 3166-1 alpha-2 code matching the origin IP address, if known by Recurly.
 * @prop {string} ip - Customer's IP address when updating their billing information.
 */
class BillingInfoUpdatedBy extends Resource {
  static getSchema () {
    return {
      country: String,
      ip: String
    }
  }
}

module.exports = BillingInfoUpdatedBy
