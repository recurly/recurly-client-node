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
 * @prop {string} emailTemplateId - The id of the custom email template assigned to this interval, from `GET /dunning_campaigns/email_templates`. `null` means the system default template for this interval. Accepted on write; round-tripped on read.
 */
class DunningInterval extends Resource {
  static getSchema () {
    return {
      days: Number,
      emailTemplate: String,
      emailTemplateId: String
    }
  }
}

module.exports = DunningInterval
