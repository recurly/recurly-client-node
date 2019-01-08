/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * CreditPayment
 * @typedef {Object} CreditPayment
 * @prop {AccountMini} account
 * @prop {string} action - The action for which the credit was created.
 * @prop {number} amount - Total credit payment amount applied to the charge invoice.
 * @prop {InvoiceMini} appliedToInvoice
 * @prop {datetime} createdAt - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} id - Credit Payment ID
 * @prop {string} originalCreditPaymentId - For credit payments with action `refund`, this is the credit payment that was refunded.
 * @prop {InvoiceMini} originalInvoice
 * @prop {Transaction} refundTransaction
 * @prop {datetime} updatedAt - Last updated at
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 * @prop {datetime} voidedAt - Voided at
 */
class CreditPayment {}

module.exports = CreditPayment
