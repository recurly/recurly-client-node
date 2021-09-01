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
 * DunningInterval
 * @typedef {Object} DunningInterval
 * @prop {number} days - Number of days before sending the next email.
 * @prop {string} emailTemplate - Email template being used.
 */
class DunningInterval extends Resource {
  static getSchema () {
    return {
      days: Number,
      emailTemplate: String
    }
  }
}

module.exports = DunningInterval
