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
 * ExternalCharge
 * @typedef {Object} ExternalCharge
 * @prop {AccountMini} account - Account mini details
 * @prop {Date} createdAt - When the external charge was created in Recurly.
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} description
 * @prop {ExternalProductReferenceMini} externalProductReference - External Product Reference details
 * @prop {string} id - System-generated unique identifier for an external charge ID, e.g. `e28zov4fw0v2`.
 * @prop {string} object - Object type
 * @prop {number} quantity
 * @prop {number} unitAmount - Unit Amount
 * @prop {Date} updatedAt - When the external charge was updated in Recurly.
 */
class ExternalCharge extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      createdAt: Date,
      currency: String,
      description: String,
      externalProductReference: 'ExternalProductReferenceMini',
      id: String,
      object: String,
      quantity: Number,
      unitAmount: Number,
      updatedAt: Date
    }
  }
}

module.exports = ExternalCharge
