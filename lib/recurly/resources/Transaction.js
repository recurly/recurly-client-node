/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * Transaction
 * @typedef {Object} Transaction
 * @prop {AccountMini} account
 * @prop {number} amount - Total transaction amount sent to the payment gateway.
 * @prop {string} avsCheck - When processed, result from checking the overall AVS on the transaction.
 * @prop {Address} billingAddress
 * @prop {datetime} collectedAt - Collected at, or if not collected yet, the time the transaction was created.
 * @prop {string} collectionMethod - The method by which the payment was collected.
 * @prop {datetime} createdAt - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} customerMessage - For declined (`success=false`) transactions, the message displayed to the customer.
 * @prop {string} customerMessageLocale - Language code for the message
 * @prop {string} cvvCheck - When processed, result from checking the CVV/CVC value on the transaction.
 * @prop {string} gatewayApprovalCode - Transaction approval code from the payment gateway.
 * @prop {string} gatewayMessage - Transaction message from the payment gateway.
 * @prop {string} gatewayReference - Transaction reference number from the payment gateway.
 * @prop {string} gatewayResponseCode - For declined transactions (`success=false`), this field lists the gateway error code.
 * @prop {number} gatewayResponseTime - Time, in seconds, for gateway to process the transaction.
 * @prop {Object} gatewayResponseValues - The values in this field will vary from gateway to gateway.
 * @prop {string} id - Transaction ID
 * @prop {InvoiceMini} invoice
 * @prop {string} ipAddressCountry - IP address's country
 * @prop {string} ipAddressV4 - IP address provided when the billing information was collected:  - When the customer enters billing information into the Recurly.JS or Hosted Payment Pages, Recurly records the IP address. - When the merchant enters billing information using the API, the merchant may provide an IP address. - When the merchant enters billing information using the UI, no IP address is recorded.
 * @prop {string} origin - Describes how the transaction was triggered.
 * @prop {string} originalTransactionId - If this transaction is a refund (`type=refund`), this will be the ID of the original transaction on the invoice being refunded.
 * @prop {Object} paymentGateway
 * @prop {Object} paymentMethod - Payment method (TODO: this overlaps with BillingInfo’s payment_method but only documents credit cards)
 * @prop {boolean} refunded - Indicates if part or all of this transaction was refunded.
 * @prop {string} status - The current transaction status. Note that the status may change, e.g. a `pending` transaction may become `declined` or `success` may later become `void`.
 * @prop {string} statusCode - Status code
 * @prop {string} statusMessage - For declined (`success=false`) transactions, the message displayed to the merchant.
 * @prop {Array.<string>} subscriptionIds - If the transaction is charging or refunding for one or more subscriptions, these are their IDs.
 * @prop {boolean} success - Did this transaction complete successfully?
 * @prop {string} type - - `authorization` – verifies billing information and places a hold on money in the customer's account. - `capture` – captures funds held by an authorization and completes a purchase. - `purchase` – combines the authorization and capture in one transaction. - `refund` – returns all or a portion of the money collected in a previous transaction to the customer. - `verify` – a $0 or $1 transaction used to verify billing information which is immediately voided.
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 * @prop {datetime} voidedAt - Voided at
 * @prop {InvoiceMini} voidedByInvoice
 */
class Transaction {}

module.exports = Transaction
