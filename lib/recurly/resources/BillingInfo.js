'use strict'

/**
 * BillingInfo
 * @typedef {Object} BillingInfo
 * @prop {string} accountId
 * @prop {Address} address
 * @prop {string} company
 * @prop {datetime} createdAt - When the billing information was created.
 * @prop {string} firstName
 * @prop {object} fraud - Most recent fraud result.
 * @prop {string} id
 * @prop {string} lastName
 * @prop {object} paymentMethod
 * @prop {datetime} updatedAt - When the billing information was last changed.
 * @prop {object} updatedBy
 * @prop {boolean} valid
 * @prop {string} vatNumber - Customer's VAT number (to avoid having the VAT applied). This is only used for automatically collected invoices.
 */
class BillingInfo {}

module.exports = BillingInfo
