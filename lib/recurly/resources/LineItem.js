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
 * LineItem
 * @typedef {Object} LineItem
 * @prop {AccountMini} account - Account mini details
 * @prop {string} accountingCode - Internal accounting code to help you reconcile your revenue to the correct ledger. Line items created as part of a subscription invoice will use the plan or add-on's accounting code, otherwise the value will only be present if you define an accounting code when creating the line item.
 * @prop {string} addOnCode - If the line item is a charge or credit for an add-on, this is its code.
 * @prop {string} addOnId - If the line item is a charge or credit for an add-on this is its ID.
 * @prop {number} amount - `(quantity * unit_amount) - (discount + tax)`
 * @prop {number} avalaraServiceType - Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the line item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
 * @prop {number} avalaraTransactionType - Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the line item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
 * @prop {string} billForAccountId - The UUID of the account responsible for originating the line item.
 * @prop {Date} createdAt - When the line item was created.
 * @prop {number} creditApplied - The amount of credit from this line item that was applied to the invoice.
 * @prop {string} creditReasonCode - The reason the credit was given when line item is `type=credit`.
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} description - Description that appears on the invoice. For subscription related items this will be filled in automatically.
 * @prop {number} discount - The discount applied to the line item.
 * @prop {Date} endDate - If this date is provided, it indicates the end of a time range.
 * @prop {string} externalSku - Optional Stock Keeping Unit assigned to an item. Available when the Credit Invoices feature is enabled.
 * @prop {string} id - Line item ID
 * @prop {string} invoiceId - Once the line item has been invoiced this will be the invoice's ID.
 * @prop {string} invoiceNumber - Once the line item has been invoiced this will be the invoice's number. If VAT taxation and the Country Invoice Sequencing feature are enabled, invoices will have country-specific invoice numbers for invoices billed to EU countries (ex: FR1001). Non-EU invoices will continue to use the site-level invoice number sequence.
 * @prop {string} itemCode - Unique code to identify an item. Available when the Credit Invoices feature is enabled.
 * @prop {string} itemId - System-generated unique identifier for an item. Available when the Credit Invoices feature is enabled.
 * @prop {string} legacyCategory - Category to describe the role of a line item on a legacy invoice: - "charges" refers to charges being billed for on this invoice. - "credits" refers to refund or proration credits. This portion of the invoice can be considered a credit memo. - "applied_credits" refers to previous credits applied to this invoice. See their original_line_item_id to determine where the credit first originated. - "carryforwards" can be ignored. They exist to consume any remaining credit balance. A new credit with the same amount will be created and placed back on the account.
 * @prop {string} object - Object type
 * @prop {string} origin - A credit created from an original charge will have the value of the charge's origin.
 * @prop {string} originalLineItemInvoiceId - The invoice where the credit originated. Will only have a value if the line item is a credit created from a previous credit, or if the credit was created from a charge refund.
 * @prop {string} planCode - If the line item is a charge or credit for a plan or add-on, this is the plan's code.
 * @prop {string} planId - If the line item is a charge or credit for a plan or add-on, this is the plan's ID.
 * @prop {string} previousLineItemId - Will only have a value if the line item is a credit created from a previous credit, or if the credit was created from a charge refund.
 * @prop {string} productCode - For plan-related line items this will be the plan's code, for add-on related line items it will be the add-on's code. For item-related line items it will be the item's `external_sku`.
 * @prop {number} prorationRate - When a line item has been prorated, this is the rate of the proration. Proration rates were made available for line items created after March 30, 2017. For line items created prior to that date, the proration rate will be `null`, even if the line item was prorated.
 * @prop {number} quantity - This number will be multiplied by the unit amount to compute the subtotal before any discounts or taxes.
 * @prop {boolean} refund - Refund?
 * @prop {number} refundedQuantity - For refund charges, the quantity being refunded. For non-refund charges, the total quantity refunded (possibly over multiple refunds).
 * @prop {string} revenueScheduleType - Revenue schedule type
 * @prop {ShippingAddress} shippingAddress
 * @prop {Date} startDate - If an end date is present, this is value indicates the beginning of a billing time range. If no end date is present it indicates billing for a specific date.
 * @prop {string} state - Pending line items are charges or credits on an account that have not been applied to an invoice yet. Invoiced line items will always have an `invoice_id` value.
 * @prop {string} subscriptionId - If the line item is a charge or credit for a subscription, this is its ID.
 * @prop {number} subtotal - `quantity * unit_amount`
 * @prop {number} tax - The tax amount for the line item.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
 * @prop {boolean} taxExempt - `true` exempts tax on charges, `false` applies tax on charges. If not defined, then defaults to the Plan and Site settings. This attribute does not work for credits (negative line items). Credits are always applied post-tax. Pre-tax discounts should use the Coupons feature.
 * @prop {TaxInfo} taxInfo - Tax info
 * @prop {boolean} taxable - `true` if the line item is taxable, `false` if it is not.
 * @prop {string} type - Charges are positive line items that debit the account. Credits are negative line items that credit the account.
 * @prop {number} unitAmount - Positive amount for a charge, negative amount for a credit.
 * @prop {string} unitAmountDecimal - Positive amount for a charge, negative amount for a credit.
 * @prop {Date} updatedAt - When the line item was last changed.
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 */
class LineItem extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      accountingCode: String,
      addOnCode: String,
      addOnId: String,
      amount: Number,
      avalaraServiceType: Number,
      avalaraTransactionType: Number,
      billForAccountId: String,
      createdAt: Date,
      creditApplied: Number,
      creditReasonCode: String,
      currency: String,
      description: String,
      discount: Number,
      endDate: Date,
      externalSku: String,
      id: String,
      invoiceId: String,
      invoiceNumber: String,
      itemCode: String,
      itemId: String,
      legacyCategory: String,
      object: String,
      origin: String,
      originalLineItemInvoiceId: String,
      planCode: String,
      planId: String,
      previousLineItemId: String,
      productCode: String,
      prorationRate: Number,
      quantity: Number,
      refund: Boolean,
      refundedQuantity: Number,
      revenueScheduleType: String,
      shippingAddress: 'ShippingAddress',
      startDate: Date,
      state: String,
      subscriptionId: String,
      subtotal: Number,
      tax: Number,
      taxCode: String,
      taxExempt: Boolean,
      taxInfo: 'TaxInfo',
      taxable: Boolean,
      type: String,
      unitAmount: Number,
      unitAmountDecimal: String,
      updatedAt: Date,
      uuid: String
    }
  }
}

module.exports = LineItem
