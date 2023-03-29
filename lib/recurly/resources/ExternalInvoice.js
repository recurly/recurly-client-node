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
 * ExternalInvoice
 * @typedef {Object} ExternalInvoice
 * @prop {AccountMini} account - Account mini details
 * @prop {Date} createdAt - When the external invoice was created in Recurly.
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} externalId - An identifier which associates the external invoice to a corresponding object in an external platform.
 * @prop {ExternalSubscription} externalSubscription - Subscription from an external resource such as Apple App Store or Google Play Store.
 * @prop {string} id - System-generated unique identifier for an external invoice ID, e.g. `e28zov4fw0v2`.
 * @prop {Array.<ExternalCharge>} lineItems
 * @prop {string} object - Object type
 * @prop {Date} purchasedAt - When the invoice was created in the external platform.
 * @prop {string} state
 * @prop {number} total - Total
 * @prop {Date} updatedAt - When the external invoice was updated in Recurly.
 */
class ExternalInvoice extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      createdAt: Date,
      currency: String,
      externalId: String,
      externalSubscription: 'ExternalSubscription',
      id: String,
      lineItems: ['ExternalCharge'],
      object: String,
      purchasedAt: Date,
      state: String,
      total: Number,
      updatedAt: Date
    }
  }
}

module.exports = ExternalInvoice
