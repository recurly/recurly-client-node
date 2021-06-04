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
 * BillingInfo
 * @typedef {Object} BillingInfo
 * @prop {string} accountId
 * @prop {Address} address
 * @prop {boolean} backupPaymentMethod - The `backup_payment_method` field is used to indicate a billing info as a backup on the account that will be tried if the initial billing info used for an invoice is declined.
 * @prop {string} company
 * @prop {Date} createdAt - When the billing information was created.
 * @prop {string} firstName
 * @prop {FraudInfo} fraud - Most recent fraud result.
 * @prop {string} id
 * @prop {string} lastName
 * @prop {string} object - Object type
 * @prop {PaymentMethod} paymentMethod
 * @prop {boolean} primaryPaymentMethod - The `primary_payment_method` field is used to indicate the primary billing info on the account. The first billing info created on an account will always become primary. This payment method will be used
 * @prop {Date} updatedAt - When the billing information was last changed.
 * @prop {BillingInfoUpdatedBy} updatedBy
 * @prop {boolean} valid
 * @prop {string} vatNumber - Customer's VAT number (to avoid having the VAT applied). This is only used for automatically collected invoices.
 */
class BillingInfo extends Resource {
  static getSchema () {
    return {
      accountId: String,
      address: 'Address',
      backupPaymentMethod: Boolean,
      company: String,
      createdAt: Date,
      firstName: String,
      fraud: 'FraudInfo',
      id: String,
      lastName: String,
      object: String,
      paymentMethod: 'PaymentMethod',
      primaryPaymentMethod: Boolean,
      updatedAt: Date,
      updatedBy: 'BillingInfoUpdatedBy',
      valid: Boolean,
      vatNumber: String
    }
  }
}

module.exports = BillingInfo
