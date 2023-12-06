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
 * ExternalPaymentPhase
 * @typedef {Object} ExternalPaymentPhase
 * @prop {string} amount - Allows up to 9 decimal places
 * @prop {Date} createdAt - When the external subscription was created in Recurly.
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {number} endingBillingPeriodIndex - Ending Billing Period Index
 * @prop {Date} endsAt - Ends At
 * @prop {ExternalSubscription} externalSubscription - Subscription from an external resource such as Apple App Store or Google Play Store.
 * @prop {string} id - System-generated unique identifier for an external payment phase ID, e.g. `e28zov4fw0v2`.
 * @prop {string} object - Object type
 * @prop {string} offerName - Name of the discount offer given, e.g. "introductory"
 * @prop {string} offerType - Type of discount offer given, e.g. "FREE_TRIAL"
 * @prop {number} periodCount - Number of billing periods
 * @prop {string} periodLength - Billing cycle length
 * @prop {Date} startedAt - Started At
 * @prop {number} startingBillingPeriodIndex - Starting Billing Period Index
 * @prop {Date} updatedAt - When the external subscription was updated in Recurly.
 */
class ExternalPaymentPhase extends Resource {
  static getSchema () {
    return {
      amount: String,
      createdAt: Date,
      currency: String,
      endingBillingPeriodIndex: Number,
      endsAt: Date,
      externalSubscription: 'ExternalSubscription',
      id: String,
      object: String,
      offerName: String,
      offerType: String,
      periodCount: Number,
      periodLength: String,
      startedAt: Date,
      startingBillingPeriodIndex: Number,
      updatedAt: Date
    }
  }
}

module.exports = ExternalPaymentPhase
