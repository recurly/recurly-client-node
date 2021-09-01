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
 * DunningCampaignsBulkUpdateResponse
 * @typedef {Object} DunningCampaignsBulkUpdateResponse
 * @prop {string} object - Object type
 * @prop {Array.<Plan>} plans - An array containing all of the `Plan` resources that have been updated.
 */
class DunningCampaignsBulkUpdateResponse extends Resource {
  static getSchema () {
    return {
      object: String,
      plans: ['Plan']
    }
  }
}

module.exports = DunningCampaignsBulkUpdateResponse
