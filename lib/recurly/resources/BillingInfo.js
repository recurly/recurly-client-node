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
 * @prop {string} company
 * @prop {Date} createdAt - When the billing information was created.
 * @prop {string} firstName
 * @prop {FraudInfo} fraud - Most recent fraud result.
 * @prop {string} id
 * @prop {string} lastName
 * @prop {string} object - Object type
 * @prop {PaymentMethod} paymentMethod
 * @prop {boolean} primaryPaymentMethod - The `primary_payment_method` indicator is used to designate the primary billing info on the account. The first billing info created on an account will always become primary. Adding additional billing infos provides the flexibility to mark another billing info as primary, or adding additional non-primary billing infos. This can be accomplished by passing the `primary_payment_method` indicator. When adding billing infos via the billing_info and /accounts endpoints, this value is not permitted, and will return an error if provided.
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
