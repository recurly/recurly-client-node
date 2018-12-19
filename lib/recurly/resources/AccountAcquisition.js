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
