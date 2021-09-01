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
 * DunningCycle
 * @typedef {Object} DunningCycle
 * @prop {boolean} appliesToManualTrial - Whether the dunning settings will be applied to manual trials. Only applies to trial cycles.
 * @prop {Date} createdAt - When the current settings were created in Recurly.
 * @prop {boolean} expireSubscription - Whether the subscription(s) should be cancelled at the end of the dunning cycle.
 * @prop {boolean} failInvoice - Whether the invoice should be failed at the end of the dunning cycle.
 * @prop {number} firstCommunicationInterval - The number of days after a transaction failure before the first dunning email is sent.
 * @prop {Array.<DunningInterval>} intervals - Dunning intervals.
 * @prop {boolean} sendImmediatelyOnHardDecline - Whether or not to send an extra email immediately to customers whose initial payment attempt fails with either a hard decline or invalid billing info.
 * @prop {number} totalDunningDays - The number of days between the first dunning email being sent and the end of the dunning cycle.
 * @prop {number} totalRecyclingDays - The number of days between a transaction failure and the end of the dunning cycle.
 * @prop {string} type - The type of invoice this cycle applies to.
 * @prop {Date} updatedAt - When the current settings were updated in Recurly.
 * @prop {number} version - Current campaign version.
 */
class DunningCycle extends Resource {
  static getSchema () {
    return {
      appliesToManualTrial: Boolean,
      createdAt: Date,
      expireSubscription: Boolean,
      failInvoice: Boolean,
      firstCommunicationInterval: Number,
      intervals: ['DunningInterval'],
      sendImmediatelyOnHardDecline: Boolean,
      totalDunningDays: Number,
      totalRecyclingDays: Number,
      type: String,
      updatedAt: Date,
      version: Number
    }
  }
}

module.exports = DunningCycle
