'use strict'

/**
 * Transaction
 * @typedef {Object} Transaction
 * @prop {AccountMini} account
 * @prop {number} amount - Total transaction amount sent to the payment gateway.
 * @prop {string} avs_check - When processed, result from checking the overall AVS on the transaction.
 * @prop {Address} billing_address
 * @prop {datetime} collected_at - Collected at, or if not collected yet, the time the transaction was created.
 * @prop {string} collection_method - The method by which the payment was collected.
 * @prop {datetime} created_at - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {string} customer_message - For declined (`success=false`) transactions, the message displayed to the customer.
 * @prop {string} customer_message_locale - Language code for the message
 * @prop {string} cvv_check - When processed, result from checking the CVV/CVC value on the transaction.
 * @prop {string} gateway_approval_code - Transaction approval code from the payment gateway.
 * @prop {string} gateway_message - Transaction message from the payment gateway.
 * @prop {string} gateway_reference - Transaction reference number from the payment gateway.
 * @prop {string} gateway_response_code - For declined transactions (`success=false`), this field lists the gateway error code.
 * @prop {number} gateway_response_time - Time, in seconds, for gateway to process the transaction.
 * @prop {object} gateway_response_values - The values in this field will vary from gateway to gateway.
 * @prop {string} id - Transaction ID
 * @prop {InvoiceMini} invoice
 * @prop {string} ip_address_country - IP address's country
 * @prop {string} ip_address_v4 - IP address provided when the billing information was collected:  - When the customer enters billing information into the Recurly.JS or Hosted Payment Pages, Recurly records the IP address. - When the merchant enters billing information using the API, the merchant may provide an IP address. - When the merchant enters billing information using the UI, no IP address is recorded.
 * @prop {string} origin - Describes how the transaction was triggered.
 * @prop {string} original_transaction_id - If this transaction is a refund (`type=refund`), this will be the ID of the original transaction on the invoice being refunded.
 * @prop {object} payment_gateway
 * @prop {object} payment_method - Payment method (TODO: this overlaps with BillingInfo’s payment_method but only documents credit cards)
 * @prop {boolean} refunded - Indicates if part or all of this transaction was refunded.
 * @prop {string} status - The current transaction status. Note that the status may change, e.g. a `pending` transaction may become `declined` or `success` may later become `void`.
 * @prop {string} status_code - Status code
 * @prop {string} status_message - For declined (`success=false`) transactions, the message displayed to the merchant.
 * @prop {Array.<string>} subscription_ids - If the transaction is charging or refunding for one or more subscriptions, these are their IDs.
 * @prop {boolean} success - Did this transaction complete successfully?
 * @prop {string} type - Transaction type
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 * @prop {datetime} voided_at - Voided at
 * @prop {InvoiceMini} voided_by_invoice
 */
class Transaction {}

module.exports = Transaction
