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
 * Invoice
 * @typedef {Object} Invoice
 * @prop {AccountMini} account
 * @prop {InvoiceAddress} address
 * @prop {number} balance - The outstanding balance remaining on this invoice.
 * @prop {Date} closedAt - Date invoice was marked paid or failed.
 * @prop {string} collectionMethod - An automatic invoice means a corresponding transaction is run using the account's billing information at the same time the invoice is created. Manual invoices are created without a corresponding transaction. The merchant must enter a manual payment transaction or have the customer pay the invoice with an automatic method, like credit card, PayPal, Amazon, or ACH bank payment.
 * @prop {Date} createdAt - Created at
 * @prop {Array.<CreditPayment>} creditPayments - Credit payments
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} customerNotes - This will default to the Customer Notes text specified on the Invoice Settings. Specify custom notes to add or override Customer Notes.
 * @prop {number} discount - Total discounts applied to this invoice.
 * @prop {Date} dueAt - Date invoice is due. This is the date the net terms are reached.
 * @prop {string} id - Invoice ID
 * @prop {LineItemList} lineItems
 * @prop {number} netTerms - Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
 * @prop {string} number - If VAT taxation and the Country Invoice Sequencing feature are enabled, invoices will have country-specific invoice numbers for invoices billed to EU countries (ex: FR1001). Non-EU invoices will continue to use the site-level invoice number sequence.
 * @prop {string} object - Object type
 * @prop {string} origin - The event that created the invoice.
 * @prop {number} paid - The total amount of successful payments transaction on this invoice.
 * @prop {string} poNumber - For manual invoicing, this identifies the PO number associated with the subscription.
 * @prop {string} previousInvoiceId - On refund invoices, this value will exist and show the invoice ID of the purchase invoice the refund was created from.
 * @prop {number} refundableAmount - The refundable amount on a charge invoice. It will be null for all other invoices.
 * @prop {ShippingAddress} shippingAddress
 * @prop {string} state - Invoice state
 * @prop {Array.<string>} subscriptionIds - If the invoice is charging or refunding for one or more subscriptions, these are their IDs.
 * @prop {number} subtotal - The summation of charges, discounts, and credits, before tax.
 * @prop {number} tax - The total tax on this invoice.
 * @prop {TaxInfo} taxInfo
 * @prop {string} termsAndConditions - This will default to the Terms and Conditions text specified on the Invoice Settings page in your Recurly admin. Specify custom notes to add or override Terms and Conditions.
 * @prop {number} total - The final total on this invoice. The summation of invoice charges, discounts, credits, and tax.
 * @prop {Array.<Transaction>} transactions - Transactions
 * @prop {string} type - Invoices are either charge, credit, or legacy invoices.
 * @prop {Date} updatedAt - Last updated at
 * @prop {string} vatNumber - VAT registration number for the customer on this invoice. This will come from the VAT Number field in the Billing Info or the Account Info depending on your tax settings and the invoice collection method.
 * @prop {string} vatReverseChargeNotes - VAT Reverse Charge Notes only appear if you have EU VAT enabled or are using your own Avalara AvaTax account and the customer is in the EU, has a VAT number, and is in a different country than your own. This will default to the VAT Reverse Charge Notes text specified on the Tax Settings page in your Recurly admin, unless custom notes were created with the original subscription.
 */
class Invoice extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      address: 'InvoiceAddress',
      balance: Number,
      closedAt: Date,
      collectionMethod: String,
      createdAt: Date,
      creditPayments: ['CreditPayment'],
      currency: String,
      customerNotes: String,
      discount: Number,
      dueAt: Date,
      id: String,
      lineItems: 'LineItemList',
      netTerms: Number,
      number: String,
      object: String,
      origin: String,
      paid: Number,
      poNumber: String,
      previousInvoiceId: String,
      refundableAmount: Number,
      shippingAddress: 'ShippingAddress',
      state: String,
      subscriptionIds: Array,
      subtotal: Number,
      tax: Number,
      taxInfo: 'TaxInfo',
      termsAndConditions: String,
      total: Number,
      transactions: ['Transaction'],
      type: String,
      updatedAt: Date,
      vatNumber: String,
      vatReverseChargeNotes: String
    }
  }
}

module.exports = Invoice
