'use strict'

/**
 * BillingInfo
 * @typedef {Object} BillingInfo
 * @prop {string} account_id
 * @prop {Address} address
 * @prop {string} company
 * @prop {datetime} created_at - When the billing information was created.
 * @prop {string} first_name
 * @prop {object} fraud - Most recent fraud result.
 * @prop {string} id
 * @prop {string} last_name
 * @prop {object} payment_method
 * @prop {datetime} updated_at - When the billing information was last changed.
 * @prop {object} updated_by
 * @prop {boolean} valid
 * @prop {string} vat_number - Customer's VAT number (to avoid having the VAT applied). This is only used for automatically collected invoices.
 */
class BillingInfo {}

module.exports = BillingInfo
