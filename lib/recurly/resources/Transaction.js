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
 * Transaction
 * @typedef {Object} Transaction
 * @prop {AccountMini} account - Account mini details
 * @prop {Object} actionResult - Action result params to be used in Recurly-JS to complete a payment when using asynchronous payment methods, e.g., Boleto, iDEAL and Sofort.
 * @prop {number} amount - Total transaction amount sent to the payment gateway.
 * @prop {string} avsCheck - When processed, result from checking the overall AVS on the transaction.
 * @prop {boolean} backupPaymentMethodUsed - Indicates if the transaction was completed using a backup payment
 * @prop {AddressWithName} billingAddress
 * @prop {Date} collectedAt - Collected at, or if not collected yet, the time the transaction was created.
 * @prop {string} collectionMethod - The method by which the payment was collected.
 * @prop {Date} createdAt - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} customerMessage - For declined (`success=false`) transactions, the message displayed to the customer.
 * @prop {string} customerMessageLocale - Language code for the message
 * @prop {string} cvvCheck - When processed, result from checking the CVV/CVC value on the transaction.
 * @prop {TransactionFraudInfo} fraudInfo - Fraud information
 * @prop {string} gatewayApprovalCode - Transaction approval code from the payment gateway.
 * @prop {string} gatewayMessage - Transaction message from the payment gateway.
 * @prop {string} gatewayReference - Transaction reference number from the payment gateway.
 * @prop {string} gatewayResponseCode - For declined transactions (`success=false`), this field lists the gateway error code.
 * @prop {number} gatewayResponseTime - Time, in seconds, for gateway to process the transaction.
 * @prop {Object} gatewayResponseValues - The values in this field will vary from gateway to gateway.
 * @prop {string} id - Transaction ID
 * @prop {string} indicator - Must be sent for one-time transactions in order to provide context on which entity is submitting the transaction to ensure proper fraud checks are observed, such as 3DS. If the customer is in session, send `customer`. If this is a merchant initiated one-time transaction, send `merchant`.
 * @prop {InvoiceMini} invoice - Invoice mini details
 * @prop {string} ipAddressCountry - Origin IP address country, 2-letter ISO 3166-1 alpha-2 code, if known by Recurly.
 * @prop {string} ipAddressV4 - IP address provided when the billing information was collected:  - When the customer enters billing information into the Recurly.js or Hosted Payment Pages, Recurly records the IP address. - When the merchant enters billing information using the API, the merchant may provide an IP address. - When the merchant enters billing information using the UI, no IP address is recorded.
 * @prop {string} merchantReasonCode - This conditional parameter is useful for merchants in specific industries who need to submit one-time Merchant Initiated transactions in specific cases. Not all gateways support these methods, but will support a generic one-time Merchant Initiated transaction. Only use this if the initiator value is "merchant". Otherwise, it will be ignored.   - Incremental: Send `incremental` with an additional purchase if the original authorization amount is not sufficient to cover the costs of your service or product. For example, if the customer adds goods or services or there are additional expenses.   - No Show: Send `no_show` if you charge customers a fee due to an agreed-upon cancellation policy in your industry.   - Resubmission: Send `resubmission` if you need to attempt collection on a declined transaction. You may also use the force collection behavior which has the same effect.   - Service Extension: Send `service_extension` if you are in a service industry and the customer has increased/extended their service in some way. For example: adding a day onto a car rental agreement.   - Split Shipment: Send `split_shipment` if you sell physical product and need to split up a shipment into multiple transactions when the customer is no longer in session.   - Top Up: Send `top_up` if you process one-time transactions based on a pre-arranged agreement with your customer where there is a pre-arranged account balance that needs maintaining. For example, if the customer has agreed to maintain an account balance of 30.00 and their current balance is 20.00, the MIT amount would be at least 10.00 to meet that 30.00 threshold.
 * @prop {string} object - Object type
 * @prop {string} origin - Describes how the transaction was triggered.
 * @prop {string} originalTransactionId - If this transaction is a refund (`type=refund`), this will be the ID of the original transaction on the invoice being refunded.
 * @prop {TransactionPaymentGateway} paymentGateway
 * @prop {PaymentMethod} paymentMethod
 * @prop {boolean} refunded - Indicates if part or all of this transaction was refunded.
 * @prop {string} status - The current transaction status. Note that the status may change, e.g. a `pending` transaction may become `declined` or `success` may later become `void`.
 * @prop {string} statusCode - Status code
 * @prop {string} statusMessage - For declined (`success=false`) transactions, the message displayed to the merchant.
 * @prop {Array.<string>} subscriptionIds - If the transaction is charging or refunding for one or more subscriptions, these are their IDs.
 * @prop {boolean} success - Did this transaction complete successfully?
 * @prop {string} type - - `authorization` – verifies billing information and places a hold on money in the customer's account. - `capture` – captures funds held by an authorization and completes a purchase. - `purchase` – combines the authorization and capture in one transaction. - `refund` – returns all or a portion of the money collected in a previous transaction to the customer. - `verify` – a $0 or $1 transaction used to verify billing information which is immediately voided.
 * @prop {Date} updatedAt - Updated at
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 * @prop {string} vatNumber - VAT number for the customer on this transaction. If the customer's Billing Info country is BR or AR, then this will be their Tax Identifier. For all other countries this will come from the VAT Number field in the Billing Info.
 * @prop {Date} voidedAt - Voided at
 * @prop {InvoiceMini} voidedByInvoice - Invoice mini details
 */
class Transaction extends Resource {
  static getSchema () {
    return {
      account: 'AccountMini',
      actionResult: Object,
      amount: Number,
      avsCheck: String,
      backupPaymentMethodUsed: Boolean,
      billingAddress: 'AddressWithName',
      collectedAt: Date,
      collectionMethod: String,
      createdAt: Date,
      currency: String,
      customerMessage: String,
      customerMessageLocale: String,
      cvvCheck: String,
      fraudInfo: 'TransactionFraudInfo',
      gatewayApprovalCode: String,
      gatewayMessage: String,
      gatewayReference: String,
      gatewayResponseCode: String,
      gatewayResponseTime: Number,
      gatewayResponseValues: Object,
      id: String,
      indicator: String,
      invoice: 'InvoiceMini',
      ipAddressCountry: String,
      ipAddressV4: String,
      merchantReasonCode: String,
      object: String,
      origin: String,
      originalTransactionId: String,
      paymentGateway: 'TransactionPaymentGateway',
      paymentMethod: 'PaymentMethod',
      refunded: Boolean,
      status: String,
      statusCode: String,
      statusMessage: String,
      subscriptionIds: Array,
      success: Boolean,
      type: String,
      updatedAt: Date,
      uuid: String,
      vatNumber: String,
      voidedAt: Date,
      voidedByInvoice: 'InvoiceMini'
    }
  }
}

module.exports = Transaction
