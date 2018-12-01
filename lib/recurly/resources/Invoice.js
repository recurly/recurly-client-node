'use strict'

/**
 * Invoice
 * @typedef {Object} Invoice
 * @prop {AccountMini} account
 * @prop {InvoiceAddress} address
 * @prop {number} balance - The outstanding balance remaining on this invoice.
 * @prop {datetime} closed_at - Date invoice was marked paid or failed.
 * @prop {string} collection_method - An automatic invoice means a corresponding transaction is run using the account's billing information at the same time the invoice is created. Manual invoices are created without a corresponding transaction. The merchant must enter a manual payment transaction or have the customer pay the invoice with an automatic method, like credit card, PayPal, Amazon, or ACH bank payment.
 * @prop {datetime} created_at - Created at
 * @prop {Array.<CreditPayment>} credit_payments - Credit payments
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} customer_notes - This will default to the Customer Notes text specified on the Invoice Settings. Specify custom notes to add or override Customer Notes.
 * @prop {number} discount - Total discounts applied to this invoice.
 * @prop {datetime} due_at - Date invoice is due. This is the date the net terms are reached.
 * @prop {string} id - Invoice ID
 * @prop {LineItemList} line_items
 * @prop {number} net_terms - Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
 * @prop {string} number - If VAT taxation and the Country Invoice Sequencing feature are enabled, invoices will have country-specific invoice numbers for invoices billed to EU countries (ex: FR1001). Non-EU invoices will continue to use the site-level invoice number sequence.
 * @prop {string} origin - The event that created the invoice.
 * @prop {number} paid - The total amount of successful payments transaction on this invoice.
 * @prop {string} po_number - For manual invoicing, this identifies the PO number associated with the subscription.
 * @prop {string} previous_invoice_id - On refund invoices, this value will exist and show the invoice ID of the purchase invoice the refund was created from.
 * @prop {number} refundable_amount - The refundable amount on a charge invoice. It will be null for all other invoices.
 * @prop {ShippingAddress} shipping_address
 * @prop {string} state - Invoice state
 * @prop {Array.<string>} subscription_ids - If the invoice is charging or refunding for one or more subscriptions, these are their IDs.
 * @prop {number} subtotal - The summation of charges, discounts, and credits, before tax.
 * @prop {number} tax - The total tax on this invoice.
 * @prop {TaxInfo} tax_info
 * @prop {string} terms_and_conditions - This will default to the Terms and Conditions text specified on the Invoice Settings page in your Recurly admin. Specify custom notes to add or override Terms and Conditions.
 * @prop {number} total - The final total on this invoice. The summation of invoice charges, discounts, credits, and tax.
 * @prop {Array.<Transaction>} transactions - Transactions
 * @prop {string} type - Invoices are either charge, credit, or legacy invoices.
 * @prop {datetime} updated_at - Last updated at
 * @prop {string} vat_number - VAT registration number for the customer on this invoice. This will come from the VAT Number field in the Billing Info or the Account Info depending on your tax settings and the invoice collection method.
 * @prop {string} vat_reverse_charge_notes - VAT Reverse Charge Notes only appear if you have EU VAT enabled or are using your own Avalara AvaTax account and the customer is in the EU, has a VAT number, and is in a different country than your own. This will default to the VAT Reverse Charge Notes text specified on the Tax Settings page in your Recurly admin, unless custom notes were created with the original subscription.
 */
class Invoice {}

module.exports = Invoice
