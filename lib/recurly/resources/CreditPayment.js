'use strict';

/**
 * CreditPayment
 * @typedef {Object} CreditPayment
 * @prop {AccountMini} account
 * @prop {string} action - The action for which the credit was created.
 * @prop {number} amount - Total credit payment amount applied to the charge invoice.
 * @prop {InvoiceMini} applied_to_invoice
 * @prop {datetime} created_at - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} id - Credit Payment ID
 * @prop {string} original_credit_payment_id - For credit payments with action `refund`, this is the credit payment that was refunded.
 * @prop {InvoiceMini} original_invoice
 * @prop {Transaction} refund_transaction
 * @prop {datetime} updated_at - Last updated at
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 * @prop {datetime} voided_at - Voided at
 */
class CreditPayment {}

module.exports = CreditPayment
