/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * AccountAcquisition
 * @typedef {Object} AccountAcquisition
 * @prop {AccountMini} account
 * @prop {string} campaign - An arbitrary identifier for the marketing campaign that led to the acquisition of this account.
 * @prop {string} channel - The channel through which the account was acquired.
 * @prop {Object} cost - Account balance
 * @prop {datetime} createdAt - When the account acquisition data was created.
 * @prop {string} id
 * @prop {string} subchannel - An arbitrary subchannel string representing a distinction/subcategory within a broader channel.
 * @prop {datetime} updatedAt - When the account acquisition data was last changed.
 */
class AccountAcquisition {}

module.exports = AccountAcquisition
