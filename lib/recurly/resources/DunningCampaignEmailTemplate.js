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
 * DunningCampaignEmailTemplate
 * @typedef {Object} DunningCampaignEmailTemplate
 * @prop {string} id - The id to assign under `intervals[].email_template_id`.
 * @prop {string} name - Template name.
 * @prop {string} type - The root template this custom template replaces, e.g. `payment_declined`, `invoice_past_due`, `post_trial_payment_declined`, `subscription_canceled_nonpayment`.
 */
class DunningCampaignEmailTemplate extends Resource {
  static getSchema () {
    return {
      id: String,
      name: String,
      type: String
    }
  }
}

module.exports = DunningCampaignEmailTemplate
