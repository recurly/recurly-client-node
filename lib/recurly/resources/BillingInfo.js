/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * BillingInfo
 * @typedef {Object} BillingInfo
 * @prop {string} accountId
 * @prop {Address} address
 * @prop {string} company
 * @prop {datetime} createdAt - When the billing information was created.
 * @prop {string} firstName
 * @prop {Object} fraud - Most recent fraud result.
 * @prop {string} id
 * @prop {string} lastName
 * @prop {Object} paymentMethod
 * @prop {datetime} updatedAt - When the billing information was last changed.
 * @prop {Object} updatedBy
 * @prop {boolean} valid
 * @prop {string} vatNumber - Customer's VAT number (to avoid having the VAT applied). This is only used for automatically collected invoices.
 */
class BillingInfo {}

module.exports = BillingInfo
