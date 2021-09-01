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
 * DunningCampaign
 * @typedef {Object} DunningCampaign
 * @prop {string} code - Campaign code.
 * @prop {Date} createdAt - When the current campaign was created in Recurly.
 * @prop {boolean} defaultCampaign - Whether or not this is the default campaign for accounts or plans without an assigned dunning campaign.
 * @prop {Date} deletedAt - When the current campaign was deleted in Recurly.
 * @prop {string} description - Campaign description.
 * @prop {Array.<DunningCycle>} dunningCycles - Dunning Cycle settings.
 * @prop {string} id
 * @prop {string} name - Campaign name.
 * @prop {string} object - Object type
 * @prop {Date} updatedAt - When the current campaign was updated in Recurly.
 */
class DunningCampaign extends Resource {
  static getSchema () {
    return {
      code: String,
      createdAt: Date,
      defaultCampaign: Boolean,
      deletedAt: Date,
      description: String,
      dunningCycles: ['DunningCycle'],
      id: String,
      name: String,
      object: String,
      updatedAt: Date
    }
  }
}

module.exports = DunningCampaign
