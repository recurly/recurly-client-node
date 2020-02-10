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
 * AccountAcquisition
 * @typedef {Object} AccountAcquisition
 * @prop {AccountMini} account - Account mini details
 * @prop {string} campaign - An arbitrary identifier for the marketing campaign that led to the acquisition of this account.
 * @prop {string} channel - The channel through which the account was acquired.
 * @prop {AccountAcquisitionCost} cost - Account balance
 * @prop {Date} createdAt - When the account acquisition data was created.
 * @prop {string} id
 * @prop {string} object - Object type
 * @prop {string} subchannel - An arbitrary subchannel string representing a distinction/subcategory within a broader channel.
 * @prop {Date} updatedAt - When the account acquisition data was last changed.
 */
class AccountAcquisition extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      campaign: String,
      channel: String,
      cost: 'AccountAcquisitionCost',
      createdAt: Date,
      id: String,
      object: String,
      subchannel: String,
      updatedAt: Date
    }
  }
}

module.exports = AccountAcquisition
