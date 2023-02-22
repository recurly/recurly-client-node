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
 * ExternalSubscription
 * @typedef {Object} ExternalSubscription
 * @prop {AccountMini} account - Account mini details
 * @prop {Date} activatedAt - When the external subscription was activated in the external platform.
 * @prop {string} appIdentifier - Identifier of the app that generated the external subscription.
 * @prop {boolean} autoRenew - An indication of whether or not the external subscription will auto-renew at the expiration date.
 * @prop {Date} createdAt - When the external subscription was created in Recurly.
 * @prop {Date} expiresAt - When the external subscription expires in the external platform.
 * @prop {string} externalId - The id of the subscription in the external systems., I.e. Apple App Store or Google Play Store.
 * @prop {ExternalProductReferenceMini} externalProductReference - External Product Reference details
 * @prop {string} id - System-generated unique identifier for an external subscription ID, e.g. `e28zov4fw0v2`.
 * @prop {Date} lastPurchased - When a new billing event occurred on the external subscription in conjunction with a recent billing period, reactivation or upgrade/downgrade.
 * @prop {string} object - Object type
 * @prop {number} quantity - An indication of the quantity of a subscribed item's quantity.
 * @prop {string} state - External subscriptions can be active, canceled, expired, or future.
 * @prop {Date} updatedAt - When the external subscription was updated in Recurly.
 */
class ExternalSubscription extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      activatedAt: Date,
      appIdentifier: String,
      autoRenew: Boolean,
      createdAt: Date,
      expiresAt: Date,
      externalId: String,
      externalProductReference: 'ExternalProductReferenceMini',
      id: String,
      lastPurchased: Date,
      object: String,
      quantity: Number,
      state: String,
      updatedAt: Date
    }
  }
}

module.exports = ExternalSubscription
