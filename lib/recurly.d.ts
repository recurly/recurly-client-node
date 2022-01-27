// Type definitions for recurly
// Project: recurly
// Definitions by: Developer Experience <dx@recurly.com>

export as namespace recurly;

export declare class Site {
  /**
   * Site ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  subdomain?: string | null;
  /**
   * This value is used to configure RecurlyJS to submit tokenized billing information.
   */
  publicApiKey?: string | null;
  /**
   * Mode
   */
  mode?: string | null;
  address?: Address | null;
  settings?: Settings | null;
  /**
   * A list of features enabled for the site.
   */
  features?: string[] | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Updated at
   */
  updatedAt?: Date | null;
  /**
   * Deleted at
   */
  deletedAt?: Date | null;

}

export declare class Address {
  /**
   * Phone number
   */
  phone?: string | null;
  /**
   * Street 1
   */
  street1?: string | null;
  /**
   * Street 2
   */
  street2?: string | null;
  /**
   * City
   */
  city?: string | null;
  /**
   * State or province.
   */
  region?: string | null;
  /**
   * Zip or postal code.
   */
  postalCode?: string | null;
  /**
   * Country, 2-letter ISO 3166-1 alpha-2 code.
   */
  country?: string | null;

}

export declare class Settings {
  /**
   * - full:      Full Address (Street, City, State, Postal Code and Country) - streetzip: Street and Postal Code only - zip:       Postal Code only - none:      No Address 
   */
  billingAddressRequirement?: string | null;
  acceptedCurrencies?: string[] | null;
  /**
   * The default 3-letter ISO 4217 currency code.
   */
  defaultCurrency?: string | null;

}

export declare class Error {
  /**
   * Type
   */
  type?: string | null;
  /**
   * Message
   */
  message?: string | null;
  /**
   * Parameter specific errors
   */
  params?: object[] | null;

}

export declare class Account {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Accounts can be either active or inactive.
   */
  state?: string | null;
  /**
   * The unique token for automatically logging the account in to the hosted management pages. You may automatically log the user into their hosted management pages by directing the user to: `https://{subdomain}.recurly.com/account/{hosted_login_token}`.
   */
  hostedLoginToken?: string | null;
  /**
   * The shipping addresses on the account.
   */
  shippingAddresses?: ShippingAddress[] | null;
  /**
   * Indicates if the account has a subscription that is either active, canceled, future, or paused.
   */
  hasLiveSubscription?: boolean | null;
  /**
   * Indicates if the account has an active subscription.
   */
  hasActiveSubscription?: boolean | null;
  /**
   * Indicates if the account has a future subscription.
   */
  hasFutureSubscription?: boolean | null;
  /**
   * Indicates if the account has a canceled subscription.
   */
  hasCanceledSubscription?: boolean | null;
  /**
   * Indicates if the account has a paused subscription.
   */
  hasPausedSubscription?: boolean | null;
  /**
   * Indicates if the account has a past due invoice.
   */
  hasPastDueInvoice?: boolean | null;
  /**
   * When the account was created.
   */
  createdAt?: Date | null;
  /**
   * When the account was last changed.
   */
  updatedAt?: Date | null;
  /**
   * If present, when the account was last marked inactive.
   */
  deletedAt?: Date | null;
  /**
   * The unique identifier of the account. This cannot be changed once the account is created.
   */
  code?: string | null;
  /**
   * A secondary value for the account.
   */
  username?: string | null;
  /**
   * The email address used for communicating with this customer. The customer will also use this email address to log into your hosted account management pages. This value does not need to be unique.
   */
  email?: string | null;
  /**
   * Used to determine the language and locale of emails sent on behalf of the merchant to the customer.
   */
  preferredLocale?: string | null;
  /**
   * Additional email address that should receive account correspondence. These should be separated only by commas. These CC emails will receive all emails that the `email` field also receives.
   */
  ccEmails?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  /**
   * The VAT number of the account (to avoid having the VAT applied). This is only used for manually collected invoices.
   */
  vatNumber?: string | null;
  /**
   * The tax status of the account. `true` exempts tax on the account, `false` applies tax on the account.
   */
  taxExempt?: boolean | null;
  /**
   * The tax exemption certificate number for the account. If the merchant has an integration for the Vertex tax provider, this optional value will be sent in any tax calculation requests for the account.
   */
  exemptionCertificate?: string | null;
  /**
   * The UUID of the parent account associated with this account.
   */
  parentAccountId?: string | null;
  /**
   * An enumerable describing the billing behavior of the account, specifically whether the account is self-paying or will rely on the parent account to pay.
   */
  billTo?: string | null;
  /**
   * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this account. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
   */
  dunningCampaignId?: string | null;
  address?: Address | null;
  billingInfo?: BillingInfo | null;
  /**
   * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
   */
  customFields?: CustomField[] | null;
  /**
   * Invoice template associated to the account. Available when invoice customization flag is enabled.
   */
  invoiceTemplate?: AccountInvoiceTemplate | null;

}

export declare class ShippingAddress {
  /**
   * Shipping Address ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Account ID
   */
  accountId?: string | null;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  email?: string | null;
  vatNumber?: string | null;
  phone?: string | null;
  street1?: string | null;
  street2?: string | null;
  city?: string | null;
  /**
   * State or province.
   */
  region?: string | null;
  /**
   * Zip or postal code.
   */
  postalCode?: string | null;
  /**
   * Country, 2-letter ISO 3166-1 alpha-2 code.
   */
  country?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Updated at
   */
  updatedAt?: Date | null;

}

export declare class BillingInfo {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  accountId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  address?: Address | null;
  /**
   * Customer's VAT number (to avoid having the VAT applied). This is only used for automatically collected invoices.
   */
  vatNumber?: string | null;
  valid?: boolean | null;
  paymentMethod?: PaymentMethod | null;
  /**
   * Most recent fraud result.
   */
  fraud?: FraudInfo | null;
  /**
   * The `primary_payment_method` field is used to indicate the primary billing info on the account. The first billing info created on an account will always become primary. This payment method will be used
   */
  primaryPaymentMethod?: boolean | null;
  /**
   * The `backup_payment_method` field is used to indicate a billing info as a backup on the account that will be tried if the initial billing info used for an invoice is declined.
   */
  backupPaymentMethod?: boolean | null;
  /**
   * When the billing information was created.
   */
  createdAt?: Date | null;
  /**
   * When the billing information was last changed.
   */
  updatedAt?: Date | null;
  updatedBy?: BillingInfoUpdatedBy | null;

}

export declare class PaymentMethod {
  object?: string | null;
  /**
   * Visa, MasterCard, American Express, Discover, JCB, etc.
   */
  cardType?: string | null;
  /**
   * Credit card number's first six digits.
   */
  firstSix?: string | null;
  /**
   * Credit card number's last four digits. Will refer to bank account if payment method is ACH.
   */
  lastFour?: string | null;
  /**
   * The IBAN bank account's last two digits.
   */
  lastTwo?: string | null;
  /**
   * Expiration month.
   */
  expMonth?: number | null;
  /**
   * Expiration year.
   */
  expYear?: number | null;
  /**
   * A token used in place of a credit card in order to perform transactions.
   */
  gatewayToken?: string | null;
  /**
   * The 2-letter ISO 3166-1 alpha-2 country code associated with the credit card BIN, if known by Recurly. Available on the BillingInfo object only. Available when the BIN country lookup feature is enabled.
   */
  ccBinCountry?: string | null;
  /**
   * An identifier for a specific payment gateway.
   */
  gatewayCode?: string | null;
  /**
   * Billing Agreement identifier. Only present for Amazon or Paypal payment methods.
   */
  billingAgreementId?: string | null;
  /**
   * The name associated with the bank account.
   */
  nameOnAccount?: string | null;
  /**
   * The bank account type. Only present for ACH payment methods.
   */
  accountType?: string | null;
  /**
   * The bank account's routing number. Only present for ACH payment methods.
   */
  routingNumber?: string | null;
  /**
   * The bank name of this routing number.
   */
  routingNumberBank?: string | null;

}

export declare class FraudInfo {
  /**
   * Kount score
   */
  score?: number | null;
  /**
   * Kount decision
   */
  decision?: string | null;
  /**
   * Kount rules
   */
  riskRulesTriggered?: object | null;

}

export declare class BillingInfoUpdatedBy {
  /**
   * Customer's IP address when updating their billing information.
   */
  ip?: string | null;
  /**
   * Country, 2-letter ISO 3166-1 alpha-2 code matching the origin IP address, if known by Recurly.
   */
  country?: string | null;

}

export declare class CustomField {
  /**
   * Fields must be created in the UI before values can be assigned to them.
   */
  name?: string | null;
  /**
   * Any values that resemble a credit card number or security code (CVV/CVC) will be rejected.
   */
  value?: string | null;

}

export declare class AccountInvoiceTemplate {
  /**
   * Unique ID to identify the invoice template.
   */
  id?: string | null;
  /**
   * Template name
   */
  name?: string | null;

}

export declare class ErrorMayHaveTransaction {
  /**
   * Type
   */
  type?: string | null;
  /**
   * Message
   */
  message?: string | null;
  /**
   * Parameter specific errors
   */
  params?: object[] | null;
  /**
   * This is only included on errors with `type=transaction`.
   */
  transactionError?: TransactionError | null;

}

export declare class TransactionError {
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Transaction ID
   */
  transactionId?: string | null;
  /**
   * Category
   */
  category?: string | null;
  /**
   * Code
   */
  code?: string | null;
  /**
   * Customer message
   */
  message?: string | null;
  /**
   * Merchant message
   */
  merchantAdvice?: string | null;
  /**
   * Returned when 3-D Secure authentication is required for a transaction. Pass this value to Recurly.js so it can continue the challenge flow.
   */
  threeDSecureActionTokenId?: string | null;

}

export declare class AccountAcquisition {
  /**
   * Account balance
   */
  cost?: AccountAcquisitionCost | null;
  /**
   * The channel through which the account was acquired.
   */
  channel?: string | null;
  /**
   * An arbitrary subchannel string representing a distinction/subcategory within a broader channel.
   */
  subchannel?: string | null;
  /**
   * An arbitrary identifier for the marketing campaign that led to the acquisition of this account.
   */
  campaign?: string | null;
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Account mini details
   */
  account?: AccountMini | null;
  /**
   * When the account acquisition data was created.
   */
  createdAt?: Date | null;
  /**
   * When the account acquisition data was last changed.
   */
  updatedAt?: Date | null;

}

export declare class AccountAcquisitionCost {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * The amount of the corresponding currency used to acquire the account.
   */
  amount?: number | null;

}

export declare class AccountMini {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The unique identifier of the account.
   */
  code?: string | null;
  /**
   * The email address used for communicating with this customer.
   */
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  parentAccountId?: string | null;
  billTo?: string | null;
  /**
   * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this account. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
   */
  dunningCampaignId?: string | null;

}

export declare class AccountBalance {
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Account mini details
   */
  account?: AccountMini | null;
  pastDue?: boolean | null;
  balances?: AccountBalanceAmount[] | null;

}

export declare class AccountBalanceAmount {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Total amount the account is past due.
   */
  amount?: number | null;

}

export declare class Transaction {
  /**
   * Transaction ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid?: string | null;
  /**
   * If this transaction is a refund (`type=refund`), this will be the ID of the original transaction on the invoice being refunded.
   */
  originalTransactionId?: string | null;
  /**
   * Account mini details
   */
  account?: AccountMini | null;
  /**
   * Invoice mini details
   */
  invoice?: InvoiceMini | null;
  /**
   * Invoice mini details
   */
  voidedByInvoice?: InvoiceMini | null;
  /**
   * If the transaction is charging or refunding for one or more subscriptions, these are their IDs.
   */
  subscriptionIds?: string[] | null;
  /**
   * - `authorization` – verifies billing information and places a hold on money in the customer's account. - `capture` – captures funds held by an authorization and completes a purchase. - `purchase` – combines the authorization and capture in one transaction. - `refund` – returns all or a portion of the money collected in a previous transaction to the customer. - `verify` – a $0 or $1 transaction used to verify billing information which is immediately voided. 
   */
  type?: string | null;
  /**
   * Describes how the transaction was triggered.
   */
  origin?: string | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Total transaction amount sent to the payment gateway.
   */
  amount?: number | null;
  /**
   * The current transaction status. Note that the status may change, e.g. a `pending` transaction may become `declined` or `success` may later become `void`.
   */
  status?: string | null;
  /**
   * Did this transaction complete successfully?
   */
  success?: boolean | null;
  /**
   * Indicates if the transaction was completed using a backup payment
   */
  backupPaymentMethodUsed?: boolean | null;
  /**
   * Indicates if part or all of this transaction was refunded.
   */
  refunded?: boolean | null;
  billingAddress?: AddressWithName | null;
  /**
   * The method by which the payment was collected.
   */
  collectionMethod?: string | null;
  paymentMethod?: PaymentMethod | null;
  /**
   * IP address provided when the billing information was collected:  - When the customer enters billing information into the Recurly.js or Hosted Payment Pages, Recurly records the IP address. - When the merchant enters billing information using the API, the merchant may provide an IP address. - When the merchant enters billing information using the UI, no IP address is recorded. 
   */
  ipAddressV4?: string | null;
  /**
   * Origin IP address country, 2-letter ISO 3166-1 alpha-2 code, if known by Recurly.
   */
  ipAddressCountry?: string | null;
  /**
   * Status code
   */
  statusCode?: string | null;
  /**
   * For declined (`success=false`) transactions, the message displayed to the merchant.
   */
  statusMessage?: string | null;
  /**
   * For declined (`success=false`) transactions, the message displayed to the customer.
   */
  customerMessage?: string | null;
  /**
   * Language code for the message
   */
  customerMessageLocale?: string | null;
  paymentGateway?: TransactionPaymentGateway | null;
  /**
   * Transaction message from the payment gateway.
   */
  gatewayMessage?: string | null;
  /**
   * Transaction reference number from the payment gateway.
   */
  gatewayReference?: string | null;
  /**
   * Transaction approval code from the payment gateway.
   */
  gatewayApprovalCode?: string | null;
  /**
   * For declined transactions (`success=false`), this field lists the gateway error code.
   */
  gatewayResponseCode?: string | null;
  /**
   * Time, in seconds, for gateway to process the transaction.
   */
  gatewayResponseTime?: number | null;
  /**
   * The values in this field will vary from gateway to gateway.
   */
  gatewayResponseValues?: object | null;
  /**
   * When processed, result from checking the CVV/CVC value on the transaction.
   */
  cvvCheck?: string | null;
  /**
   * When processed, result from checking the overall AVS on the transaction.
   */
  avsCheck?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Updated at
   */
  updatedAt?: Date | null;
  /**
   * Voided at
   */
  voidedAt?: Date | null;
  /**
   * Collected at, or if not collected yet, the time the transaction was created.
   */
  collectedAt?: Date | null;

}

export declare class InvoiceMini {
  /**
   * Invoice ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Invoice number
   */
  number?: string | null;
  /**
   * Invoice type
   */
  type?: string | null;
  /**
   * Invoice state
   */
  state?: string | null;

}

export declare class AddressWithName {
  /**
   * First name
   */
  firstName?: string | null;
  /**
   * Last name
   */
  lastName?: string | null;
  /**
   * Phone number
   */
  phone?: string | null;
  /**
   * Street 1
   */
  street1?: string | null;
  /**
   * Street 2
   */
  street2?: string | null;
  /**
   * City
   */
  city?: string | null;
  /**
   * State or province.
   */
  region?: string | null;
  /**
   * Zip or postal code.
   */
  postalCode?: string | null;
  /**
   * Country, 2-letter ISO 3166-1 alpha-2 code.
   */
  country?: string | null;

}

export declare class TransactionPaymentGateway {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  type?: string | null;
  name?: string | null;

}

export declare class CouponRedemption {
  /**
   * Coupon Redemption ID
   */
  id?: string | null;
  /**
   * Will always be `coupon`.
   */
  object?: string | null;
  /**
   * The Account on which the coupon was applied.
   */
  account?: AccountMini | null;
  /**
   * Subscription ID
   */
  subscriptionId?: string | null;
  coupon?: Coupon | null;
  /**
   * Coupon Redemption state
   */
  state?: string | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * The amount that was discounted upon the application of the coupon, formatted with the currency.
   */
  discounted?: number | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * The date and time the redemption was removed from the account (un-redeemed).
   */
  removedAt?: Date | null;

}

export declare class Coupon {
  /**
   * Coupon ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The code the customer enters to redeem the coupon.
   */
  code?: string | null;
  /**
   * The internal name for the coupon.
   */
  name?: string | null;
  /**
   * Indicates if the coupon is redeemable, and if it is not, why.
   */
  state?: string | null;
  /**
   * A maximum number of redemptions for the coupon. The coupon will expire when it hits its maximum redemptions.
   */
  maxRedemptions?: number | null;
  /**
   * Redemptions per account is the number of times a specific account can redeem the coupon. Set redemptions per account to `1` if you want to keep customers from gaming the system and getting more than one discount from the coupon campaign.
   */
  maxRedemptionsPerAccount?: number | null;
  /**
   * When this number reaches `max_redemptions` the coupon will no longer be redeemable.
   */
  uniqueCouponCodesCount?: number | null;
  /**
   * On a bulk coupon, the template from which unique coupon codes are generated.
   */
  uniqueCodeTemplate?: string | null;
  /**
   * Will be populated when the Coupon being returned is a `UniqueCouponCode`.
   */
  uniqueCouponCode?: object | null;
  /**
   * - "single_use" coupons applies to the first invoice only. - "temporal" coupons will apply to invoices for the duration determined by the `temporal_unit` and `temporal_amount` attributes. 
   */
  duration?: string | null;
  /**
   * If `duration` is "temporal" than `temporal_amount` is an integer which is multiplied by `temporal_unit` to define the duration that the coupon will be applied to invoices for.
   */
  temporalAmount?: number | null;
  /**
   * If `duration` is "temporal" than `temporal_unit` is multiplied by `temporal_amount` to define the duration that the coupon will be applied to invoices for.
   */
  temporalUnit?: string | null;
  /**
   * Description of the unit of time the coupon is for. Used with `free_trial_amount` to determine the duration of time the coupon is for.
   */
  freeTrialUnit?: string | null;
  /**
   * Sets the duration of time the `free_trial_unit` is for.
   */
  freeTrialAmount?: number | null;
  /**
   * The coupon is valid for all plans if true. If false then `plans` will list the applicable plans.
   */
  appliesToAllPlans?: boolean | null;
  /**
   * The coupon is valid for all items if true. If false then `items` will list the applicable items. 
   */
  appliesToAllItems?: boolean | null;
  /**
   * The coupon is valid for one-time, non-plan charges if true.
   */
  appliesToNonPlanCharges?: boolean | null;
  /**
   * A list of plans for which this coupon applies. This will be `null` if `applies_to_all_plans=true`.
   */
  plans?: PlanMini[] | null;
  /**
   * A list of items for which this coupon applies. This will be `null` if `applies_to_all_items=true`. 
   */
  items?: ItemMini[] | null;
  /**
   * Whether the discount is for all eligible charges on the account, or only a specific subscription.
   */
  redemptionResource?: string | null;
  /**
   * Details of the discount a coupon applies. Will contain a `type` property and one of the following properties: `percent`, `fixed`, `trial`. 
   */
  discount?: CouponDiscount | null;
  /**
   * Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
   */
  couponType?: string | null;
  /**
   * This description will show up when a customer redeems a coupon on your Hosted Payment Pages, or if you choose to show the description on your own checkout page.
   */
  hostedPageDescription?: string | null;
  /**
   * Description of the coupon on the invoice.
   */
  invoiceDescription?: string | null;
  /**
   * The date and time the coupon will expire and can no longer be redeemed. Time is always 11:59:59, the end-of-day Pacific time.
   */
  redeemBy?: Date | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * The date and time the coupon was expired early or reached its `max_redemptions`.
   */
  expiredAt?: Date | null;

}

export declare class PlanMini {
  /**
   * Plan ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
   */
  code?: string | null;
  /**
   * This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
   */
  name?: string | null;

}

export declare class ItemMini {
  /**
   * Item ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Unique code to identify the item.
   */
  code?: string | null;
  /**
   * The current state of the item.
   */
  state?: string | null;
  /**
   * This name describes your item and will appear on the invoice when it's purchased on a one time basis.
   */
  name?: string | null;
  /**
   * Optional, description.
   */
  description?: string | null;

}

export declare class CouponDiscount {
  type?: string | null;
  /**
   * This is only present when `type=percent`.
   */
  percent?: number | null;
  /**
   * This is only present when `type=fixed`.
   */
  currencies?: CouponDiscountPricing[] | null;
  /**
   * This is only present when `type=free_trial`.
   */
  trial?: CouponDiscountTrial | null;

}

export declare class CouponDiscountPricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Value of the fixed discount that this coupon applies.
   */
  amount?: number | null;

}

export declare class CouponDiscountTrial {
  /**
   * Temporal unit of the free trial
   */
  unit?: string | null;
  /**
   * Trial length measured in the units specified by the sibling `unit` property
   */
  length?: number | null;

}

export declare class CreditPayment {
  /**
   * Credit Payment ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid?: string | null;
  /**
   * The action for which the credit was created.
   */
  action?: string | null;
  /**
   * Account mini details
   */
  account?: AccountMini | null;
  /**
   * Invoice mini details
   */
  appliedToInvoice?: InvoiceMini | null;
  /**
   * Invoice mini details
   */
  originalInvoice?: InvoiceMini | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Total credit payment amount applied to the charge invoice.
   */
  amount?: number | null;
  /**
   * For credit payments with action `refund`, this is the credit payment that was refunded.
   */
  originalCreditPaymentId?: string | null;
  refundTransaction?: Transaction | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Voided at
   */
  voidedAt?: Date | null;

}

export declare class Invoice {
  /**
   * Invoice ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Invoices are either charge, credit, or legacy invoices.
   */
  type?: string | null;
  /**
   * The event that created the invoice.
   */
  origin?: string | null;
  /**
   * Invoice state
   */
  state?: string | null;
  /**
   * Account mini details
   */
  account?: AccountMini | null;
  /**
   * The `billing_info_id` is the value that represents a specific billing info for an end customer. When `billing_info_id` is used to assign billing info to the subscription, all future billing events for the subscription will bill to the specified billing info. `billing_info_id` can ONLY be used for sites utilizing the Wallet feature.
   */
  billingInfoId?: string | null;
  /**
   * If the invoice is charging or refunding for one or more subscriptions, these are their IDs.
   */
  subscriptionIds?: string[] | null;
  /**
   * On refund invoices, this value will exist and show the invoice ID of the purchase invoice the refund was created from.
   */
  previousInvoiceId?: string | null;
  /**
   * If VAT taxation and the Country Invoice Sequencing feature are enabled, invoices will have country-specific invoice numbers for invoices billed to EU countries (ex: FR1001). Non-EU invoices will continue to use the site-level invoice number sequence.
   */
  number?: string | null;
  /**
   * An automatic invoice means a corresponding transaction is run using the account's billing information at the same time the invoice is created. Manual invoices are created without a corresponding transaction. The merchant must enter a manual payment transaction or have the customer pay the invoice with an automatic method, like credit card, PayPal, Amazon, or ACH bank payment.
   */
  collectionMethod?: string | null;
  /**
   * For manual invoicing, this identifies the PO number associated with the subscription.
   */
  poNumber?: string | null;
  /**
   * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
   */
  netTerms?: number | null;
  address?: InvoiceAddress | null;
  shippingAddress?: ShippingAddress | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Total discounts applied to this invoice.
   */
  discount?: number | null;
  /**
   * The summation of charges and credits, before discounts and taxes.
   */
  subtotal?: number | null;
  /**
   * The total tax on this invoice.
   */
  tax?: number | null;
  /**
   * The final total on this invoice. The summation of invoice charges, discounts, credits, and tax.
   */
  total?: number | null;
  /**
   * The refundable amount on a charge invoice. It will be null for all other invoices.
   */
  refundableAmount?: number | null;
  /**
   * The total amount of successful payments transaction on this invoice.
   */
  paid?: number | null;
  /**
   * The outstanding balance remaining on this invoice.
   */
  balance?: number | null;
  /**
   * Tax info
   */
  taxInfo?: TaxInfo | null;
  /**
   * VAT registration number for the customer on this invoice. This will come from the VAT Number field in the Billing Info or the Account Info depending on your tax settings and the invoice collection method.
   */
  vatNumber?: string | null;
  /**
   * VAT Reverse Charge Notes only appear if you have EU VAT enabled or are using your own Avalara AvaTax account and the customer is in the EU, has a VAT number, and is in a different country than your own. This will default to the VAT Reverse Charge Notes text specified on the Tax Settings page in your Recurly admin, unless custom notes were created with the original subscription.
   */
  vatReverseChargeNotes?: string | null;
  /**
   * This will default to the Terms and Conditions text specified on the Invoice Settings page in your Recurly admin. Specify custom notes to add or override Terms and Conditions.
   */
  termsAndConditions?: string | null;
  /**
   * This will default to the Customer Notes text specified on the Invoice Settings. Specify custom notes to add or override Customer Notes.
   */
  customerNotes?: string | null;
  /**
   * Line Items
   */
  lineItems?: LineItem[] | null;
  /**
   * Identifies if the invoice has more line items than are returned in `line_items`. If `has_more_line_items` is `true`, then a request needs to be made to the `list_invoice_line_items` endpoint.
   */
  hasMoreLineItems?: boolean | null;
  /**
   * Transactions
   */
  transactions?: Transaction[] | null;
  /**
   * Credit payments
   */
  creditPayments?: CreditPayment[] | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Date invoice is due. This is the date the net terms are reached.
   */
  dueAt?: Date | null;
  /**
   * Date invoice was marked paid or failed.
   */
  closedAt?: Date | null;
  /**
   * Unique ID to identify the dunning campaign used when dunning the invoice. Available when the Dunning Campaigns feature is enabled. For sites without multiple dunning campaigns enabled, this will always be the default dunning campaign.
   */
  dunningCampaignId?: string | null;

}

export declare class InvoiceAddress {
  /**
   * Name on account
   */
  nameOnAccount?: string | null;
  /**
   * Company
   */
  company?: string | null;
  /**
   * Phone number
   */
  phone?: string | null;
  /**
   * Street 1
   */
  street1?: string | null;
  /**
   * Street 2
   */
  street2?: string | null;
  /**
   * City
   */
  city?: string | null;
  /**
   * State or province.
   */
  region?: string | null;
  /**
   * Zip or postal code.
   */
  postalCode?: string | null;
  /**
   * Country, 2-letter ISO 3166-1 alpha-2 code.
   */
  country?: string | null;
  /**
   * First name
   */
  firstName?: string | null;
  /**
   * Last name
   */
  lastName?: string | null;

}

export declare class TaxInfo {
  /**
   * Provides the tax type as "vat" for EU VAT, "usst" for U.S. Sales Tax, or the 2 letter country code for country level tax types like Canada, Australia, New Zealand, Israel, and all non-EU European countries.
   */
  type?: string | null;
  /**
   * Provides the tax region applied on an invoice. For U.S. Sales Tax, this will be the 2 letter state code. For EU VAT this will be the 2 letter country code. For all country level tax types, this will display the regional tax, like VAT, GST, or PST.
   */
  region?: string | null;
  /**
   * Rate
   */
  rate?: number | null;
  /**
   * Provides additional tax details for Canadian Sales Tax when there is tax applied at both the country and province levels. This will only be populated for the Invoice response when fetching a single invoice and not for the InvoiceList or LineItem.
   */
  taxDetails?: TaxDetail[] | null;

}

export declare class TaxDetail {
  /**
   * Provides the tax type for the region. For Canadian Sales Tax, this will be GST, HST, QST or PST.
   */
  type?: string | null;
  /**
   * Provides the tax region applied on an invoice. For Canadian Sales Tax, this will be either the 2 letter province code or country code.
   */
  region?: string | null;
  /**
   * Provides the tax rate for the region.
   */
  rate?: number | null;
  /**
   * The total tax applied for this tax type.
   */
  tax?: number | null;

}

export declare class LineItem {
  /**
   * Line item ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid?: string | null;
  /**
   * Charges are positive line items that debit the account. Credits are negative line items that credit the account.
   */
  type?: string | null;
  /**
   * Unique code to identify an item. Available when the Credit Invoices feature is enabled.
   */
  itemCode?: string | null;
  /**
   * System-generated unique identifier for an item. Available when the Credit Invoices feature is enabled.
   */
  itemId?: string | null;
  /**
   * Optional Stock Keeping Unit assigned to an item. Available when the Credit Invoices feature is enabled.
   */
  externalSku?: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType?: string | null;
  /**
   * Pending line items are charges or credits on an account that have not been applied to an invoice yet. Invoiced line items will always have an `invoice_id` value.
   */
  state?: string | null;
  /**
   * Category to describe the role of a line item on a legacy invoice: - "charges" refers to charges being billed for on this invoice. - "credits" refers to refund or proration credits. This portion of the invoice can be considered a credit memo. - "applied_credits" refers to previous credits applied to this invoice. See their original_line_item_id to determine where the credit first originated. - "carryforwards" can be ignored. They exist to consume any remaining credit balance. A new credit with the same amount will be created and placed back on the account. 
   */
  legacyCategory?: string | null;
  /**
   * Account mini details
   */
  account?: AccountMini | null;
  /**
   * The UUID of the account responsible for originating the line item.
   */
  billForAccountId?: string | null;
  /**
   * If the line item is a charge or credit for a subscription, this is its ID.
   */
  subscriptionId?: string | null;
  /**
   * If the line item is a charge or credit for a plan or add-on, this is the plan's ID.
   */
  planId?: string | null;
  /**
   * If the line item is a charge or credit for a plan or add-on, this is the plan's code.
   */
  planCode?: string | null;
  /**
   * If the line item is a charge or credit for an add-on this is its ID.
   */
  addOnId?: string | null;
  /**
   * If the line item is a charge or credit for an add-on, this is its code.
   */
  addOnCode?: string | null;
  /**
   * Once the line item has been invoiced this will be the invoice's ID.
   */
  invoiceId?: string | null;
  /**
   * Once the line item has been invoiced this will be the invoice's number. If VAT taxation and the Country Invoice Sequencing feature are enabled, invoices will have country-specific invoice numbers for invoices billed to EU countries (ex: FR1001). Non-EU invoices will continue to use the site-level invoice number sequence.
   */
  invoiceNumber?: string | null;
  /**
   * Will only have a value if the line item is a credit created from a previous credit, or if the credit was created from a charge refund.
   */
  previousLineItemId?: string | null;
  /**
   * The invoice where the credit originated. Will only have a value if the line item is a credit created from a previous credit, or if the credit was created from a charge refund.
   */
  originalLineItemInvoiceId?: string | null;
  /**
   * A credit created from an original charge will have the value of the charge's origin.
   */
  origin?: string | null;
  /**
   * Internal accounting code to help you reconcile your revenue to the correct ledger. Line items created as part of a subscription invoice will use the plan or add-on's accounting code, otherwise the value will only be present if you define an accounting code when creating the line item.
   */
  accountingCode?: string | null;
  /**
   * For plan-related line items this will be the plan's code, for add-on related line items it will be the add-on's code. For item-related line items it will be the item's `external_sku`.
   */
  productCode?: string | null;
  /**
   * The reason the credit was given when line item is `type=credit`.
   */
  creditReasonCode?: string | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * `(quantity * unit_amount) - (discount + tax)`
   */
  amount?: number | null;
  /**
   * Description that appears on the invoice. For subscription related items this will be filled in automatically.
   */
  description?: string | null;
  /**
   * This number will be multiplied by the unit amount to compute the subtotal before any discounts or taxes.
   */
  quantity?: number | null;
  /**
   * Positive amount for a charge, negative amount for a credit.
   */
  unitAmount?: number | null;
  /**
   * Positive amount for a charge, negative amount for a credit.
   */
  unitAmountDecimal?: string | null;
  /**
   * `quantity * unit_amount`
   */
  subtotal?: number | null;
  /**
   * The discount applied to the line item.
   */
  discount?: number | null;
  /**
   * The tax amount for the line item.
   */
  tax?: number | null;
  /**
   * `true` if the line item is taxable, `false` if it is not.
   */
  taxable?: boolean | null;
  /**
   * `true` exempts tax on charges, `false` applies tax on charges. If not defined, then defaults to the Plan and Site settings. This attribute does not work for credits (negative line items). Credits are always applied post-tax. Pre-tax discounts should use the Coupons feature.
   */
  taxExempt?: boolean | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the line item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraTransactionType?: number | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the line item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraServiceType?: number | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode?: string | null;
  /**
   * Tax info
   */
  taxInfo?: TaxInfo | null;
  /**
   * When a line item has been prorated, this is the rate of the proration. Proration rates were made available for line items created after March 30, 2017. For line items created prior to that date, the proration rate will be `null`, even if the line item was prorated.
   */
  prorationRate?: number | null;
  /**
   * Refund?
   */
  refund?: boolean | null;
  /**
   * For refund charges, the quantity being refunded. For non-refund charges, the total quantity refunded (possibly over multiple refunds).
   */
  refundedQuantity?: number | null;
  /**
   * The amount of credit from this line item that was applied to the invoice.
   */
  creditApplied?: number | null;
  shippingAddress?: ShippingAddress | null;
  /**
   * If an end date is present, this is value indicates the beginning of a billing time range. If no end date is present it indicates billing for a specific date.
   */
  startDate?: Date | null;
  /**
   * If this date is provided, it indicates the end of a time range.
   */
  endDate?: Date | null;
  /**
   * When the line item was created.
   */
  createdAt?: Date | null;
  /**
   * When the line item was last changed.
   */
  updatedAt?: Date | null;

}

export declare class InvoiceCollection {
  /**
   * Object type
   */
  object?: string | null;
  chargeInvoice?: Invoice | null;
  /**
   * Credit invoices
   */
  creditInvoices?: Invoice[] | null;

}

export declare class AccountNote {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  accountId?: string | null;
  user?: User | null;
  message?: string | null;
  createdAt?: Date | null;

}

export declare class User {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timeZone?: string | null;
  createdAt?: Date | null;
  deletedAt?: Date | null;

}

export declare class Subscription {
  /**
   * Subscription ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid?: string | null;
  /**
   * Account mini details
   */
  account?: AccountMini | null;
  /**
   * Just the important parts.
   */
  plan?: PlanMini | null;
  /**
   * State
   */
  state?: string | null;
  /**
   * Subscription shipping details
   */
  shipping?: SubscriptionShipping | null;
  /**
   * Returns subscription level coupon redemptions that are tied to this subscription.
   */
  couponRedemptions?: CouponRedemptionMini[] | null;
  /**
   * Subscription Change
   */
  pendingChange?: SubscriptionChange | null;
  /**
   * Current billing period started at
   */
  currentPeriodStartedAt?: Date | null;
  /**
   * Current billing period ends at
   */
  currentPeriodEndsAt?: Date | null;
  /**
   * The start date of the term when the first billing period starts. The subscription term is the length of time that a customer will be committed to a subscription. A term can span multiple billing periods.
   */
  currentTermStartedAt?: Date | null;
  /**
   * When the term ends. This is calculated by a plan's interval and `total_billing_cycles` in a term. Subscription changes with a `timeframe=renewal` will be applied on this date.
   */
  currentTermEndsAt?: Date | null;
  /**
   * Trial period started at
   */
  trialStartedAt?: Date | null;
  /**
   * Trial period ends at
   */
  trialEndsAt?: Date | null;
  /**
   * The remaining billing cycles in the current term.
   */
  remainingBillingCycles?: number | null;
  /**
   * The number of cycles/billing periods in a term. When `remaining_billing_cycles=0`, if `auto_renew=true` the subscription will renew and a new term will begin, otherwise the subscription will expire.
   */
  totalBillingCycles?: number | null;
  /**
   * If `auto_renew=true`, when a term completes, `total_billing_cycles` takes this value as the length of subsequent terms. Defaults to the plan's `total_billing_cycles`.
   */
  renewalBillingCycles?: number | null;
  /**
   * Whether the subscription renews at the end of its term.
   */
  autoRenew?: boolean | null;
  /**
   * Null unless subscription is paused or will pause at the end of the current billing period.
   */
  pausedAt?: Date | null;
  /**
   * Null unless subscription is paused or will pause at the end of the current billing period.
   */
  remainingPauseCycles?: number | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType?: string | null;
  /**
   * Subscription unit price
   */
  unitAmount?: number | null;
  /**
   * Subscription quantity
   */
  quantity?: number | null;
  /**
   * Add-ons
   */
  addOns?: SubscriptionAddOn[] | null;
  /**
   * Total price of add-ons
   */
  addOnsTotal?: number | null;
  /**
   * Estimated total, before tax.
   */
  subtotal?: number | null;
  /**
   * Estimated tax
   */
  tax?: number | null;
  /**
   * Tax info
   */
  taxInfo?: TaxInfo | null;
  /**
   * Estimated total
   */
  total?: number | null;
  /**
   * Collection method
   */
  collectionMethod?: string | null;
  /**
   * For manual invoicing, this identifies the PO number associated with the subscription.
   */
  poNumber?: string | null;
  /**
   * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
   */
  netTerms?: number | null;
  /**
   * Terms and conditions
   */
  termsAndConditions?: string | null;
  /**
   * Customer notes
   */
  customerNotes?: string | null;
  /**
   * Expiration reason
   */
  expirationReason?: string | null;
  /**
   * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
   */
  customFields?: CustomField[] | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Activated at
   */
  activatedAt?: Date | null;
  /**
   * Canceled at
   */
  canceledAt?: Date | null;
  /**
   * Expires at
   */
  expiresAt?: Date | null;
  /**
   * Recurring subscriptions paid with ACH will have this attribute set. This timestamp is used for alerting customers to reauthorize in 3 years in accordance with NACHA rules. If a subscription becomes inactive or the billing info is no longer a bank account, this timestamp is cleared.
   */
  bankAccountAuthorizedAt?: Date | null;
  /**
   * If present, this subscription's transactions will use the payment gateway with this code.
   */
  gatewayCode?: string | null;
  /**
   * Billing Info ID.
   */
  billingInfoId?: string | null;

}

export declare class SubscriptionShipping {
  /**
   * Object type
   */
  object?: string | null;
  address?: ShippingAddress | null;
  method?: ShippingMethodMini | null;
  /**
   * Subscription's shipping cost
   */
  amount?: number | null;

}

export declare class ShippingMethodMini {
  /**
   * Shipping Method ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The internal name used identify the shipping method.
   */
  code?: string | null;
  /**
   * The name of the shipping method displayed to customers.
   */
  name?: string | null;

}

export declare class CouponRedemptionMini {
  /**
   * Coupon Redemption ID
   */
  id?: string | null;
  /**
   * Will always be `coupon`.
   */
  object?: string | null;
  coupon?: CouponMini | null;
  /**
   * Invoice state
   */
  state?: string | null;
  /**
   * The amount that was discounted upon the application of the coupon, formatted with the currency.
   */
  discounted?: number | null;
  /**
   * Created at
   */
  createdAt?: Date | null;

}

export declare class CouponMini {
  /**
   * Coupon ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The code the customer enters to redeem the coupon.
   */
  code?: string | null;
  /**
   * The internal name for the coupon.
   */
  name?: string | null;
  /**
   * Indicates if the coupon is redeemable, and if it is not, why.
   */
  state?: string | null;
  /**
   * Details of the discount a coupon applies. Will contain a `type` property and one of the following properties: `percent`, `fixed`, `trial`. 
   */
  discount?: CouponDiscount | null;
  /**
   * Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
   */
  couponType?: string | null;
  /**
   * The date and time the coupon was expired early or reached its `max_redemptions`.
   */
  expiredAt?: Date | null;

}

export declare class SubscriptionChange {
  /**
   * The ID of the Subscription Change.
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The ID of the subscription that is going to be changed.
   */
  subscriptionId?: string | null;
  /**
   * Just the important parts.
   */
  plan?: PlanMini | null;
  /**
   * These add-ons will be used when the subscription renews.
   */
  addOns?: SubscriptionAddOn[] | null;
  /**
   * Unit amount
   */
  unitAmount?: number | null;
  /**
   * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
   */
  taxInclusive?: boolean | null;
  /**
   * Subscription quantity
   */
  quantity?: number | null;
  /**
   * Subscription shipping details
   */
  shipping?: SubscriptionShipping | null;
  /**
   * Activated at
   */
  activateAt?: Date | null;
  /**
   * Returns `true` if the subscription change is activated.
   */
  activated?: boolean | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType?: string | null;
  /**
   * Invoice Collection
   */
  invoiceCollection?: InvoiceCollection | null;
  /**
   * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
   */
  customFields?: CustomField[] | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Updated at
   */
  updatedAt?: Date | null;
  /**
   * Deleted at
   */
  deletedAt?: Date | null;
  /**
   * Accept nested attributes for three_d_secure_action_result_token_id
   */
  billingInfo?: SubscriptionChangeBillingInfo | null;

}

export declare class SubscriptionAddOn {
  /**
   * Subscription Add-on ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Subscription ID
   */
  subscriptionId?: string | null;
  /**
   * Just the important parts.
   */
  addOn?: AddOnMini | null;
  /**
   * Used to determine where the associated add-on data is pulled from. If this value is set to `plan_add_on` or left blank, then add-on data will be pulled from the plan's add-ons. If the associated `plan` has `allow_any_item_on_subscriptions` set to `true` and this field is set to `item`, then the associated add-on data will be pulled from the site's item catalog. 
   */
  addOnSource?: string | null;
  /**
   * Add-on quantity
   */
  quantity?: number | null;
  /**
   * Supports up to 2 decimal places.
   */
  unitAmount?: number | null;
  /**
   * Supports up to 9 decimal places.
   */
  unitAmountDecimal?: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType?: string | null;
  /**
   * The pricing model for the add-on.  For more information, [click here](https://docs.recurly.com/docs/billing-models#section-quantity-based). See our [Guide](https://developers.recurly.com/guides/item-addon-guide.html) for an overview of how to configure quantity-based pricing models. 
   */
  tierType?: string | null;
  /**
   * If tiers are provided in the request, all existing tiers on the Subscription Add-on will be removed and replaced by the tiers in the request. 
   */
  tiers?: SubscriptionAddOnTier[] | null;
  /**
   * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0. Required if add_on_type is usage and usage_type is percentage.
   */
  usagePercentage?: number | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Updated at
   */
  updatedAt?: Date | null;
  /**
   * Expired at
   */
  expiredAt?: Date | null;

}

export declare class AddOnMini {
  /**
   * Add-on ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The unique identifier for the add-on within its plan.
   */
  code?: string | null;
  /**
   * Describes your add-on and will appear in subscribers' invoices.
   */
  name?: string | null;
  /**
   * Whether the add-on type is fixed, or usage-based.
   */
  addOnType?: string | null;
  /**
   * Type of usage, returns usage type if `add_on_type` is `usage`.
   */
  usageType?: string | null;
  /**
   * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0.
   */
  usagePercentage?: number | null;
  /**
   * System-generated unique identifier for an measured unit associated with the add-on.
   */
  measuredUnitId?: string | null;
  /**
   * Item ID
   */
  itemId?: string | null;
  /**
   * Optional, stock keeping unit to link the item to other inventory systems.
   */
  externalSku?: string | null;
  /**
   * Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
   */
  accountingCode?: string | null;

}

export declare class SubscriptionAddOnTier {
  /**
   * Ending quantity
   */
  endingQuantity?: number | null;
  /**
   * Allows up to 2 decimal places. Optionally, override the tiers' default unit amount. If add-on's `add_on_type` is `usage` and `usage_type` is `percentage`, cannot be provided.
   */
  unitAmount?: number | null;
  /**
   * Allows up to 9 decimal places.  Optionally, override tiers' default unit amount. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. If add-on's `add_on_type` is `usage` and `usage_type` is `percentage`, cannot be provided. 
   */
  unitAmountDecimal?: string | null;
  /**
   * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places represented as a string. A value between 0.0 and 100.0. Optionally, override tiers' default usage percentage. Required if add-on's `add_on_type` is `usage` and `usage_type` is `percentage`. Must be omitted otherwise.
   */
  usagePercentage?: string | null;

}

export declare class SubscriptionChangeBillingInfo {
  /**
   * A token generated by Recurly.js after completing a 3-D Secure device fingerprinting or authentication challenge.
   */
  threeDSecureActionResultTokenId?: string | null;

}

export declare class UniqueCouponCodeParams {
  /**
   * The number of UniqueCouponCodes that will be generated
   */
  limit?: number | null;
  /**
   * Sort order to list newly generated UniqueCouponCodes (should always be `asc`)
   */
  order?: string | null;
  /**
   * Sort field to list newly generated UniqueCouponCodes (should always be `created_at`)
   */
  sort?: string | null;
  /**
   * The date-time to be included when listing UniqueCouponCodes
   */
  beginTime?: Date | null;

}

export declare class UniqueCouponCode {
  /**
   * Unique Coupon Code ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The code the customer enters to redeem the coupon.
   */
  code?: string | null;
  /**
   * Indicates if the unique coupon code is redeemable or why not.
   */
  state?: string | null;
  /**
   * The Coupon ID of the parent Bulk Coupon
   */
  bulkCouponId?: string | null;
  /**
   * The Coupon code of the parent Bulk Coupon
   */
  bulkCouponCode?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Updated at
   */
  updatedAt?: Date | null;
  /**
   * The date and time the unique coupon code was redeemed.
   */
  redeemedAt?: Date | null;
  /**
   * The date and time the coupon was expired early or reached its `max_redemptions`.
   */
  expiredAt?: Date | null;

}

export declare class CustomFieldDefinition {
  /**
   * Custom field definition ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Related Recurly object type
   */
  relatedType?: string | null;
  /**
   * Used by the API to identify the field or reading and writing. The name can only be used once per Recurly object type.
   */
  name?: string | null;
  /**
   * The access control applied inside Recurly's admin UI: - `api_only` - No one will be able to view or edit this field's data via the admin UI. - `read_only` - Users with the Customers role will be able to view this field's data via the admin UI, but   editing will only be available via the API. - `write` - Users with the Customers role will be able to view and edit this field's data via the admin UI. 
   */
  userAccess?: string | null;
  /**
   * Used to label the field when viewing and editing the field in Recurly's admin UI.
   */
  displayName?: string | null;
  /**
   * Displayed as a tooltip when editing the field in the Recurly admin UI.
   */
  tooltip?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Definitions are initially soft deleted, and once all the values are removed from the accouts or subscriptions, will be hard deleted an no longer visible.
   */
  deletedAt?: Date | null;

}

export declare class Item {
  /**
   * Item ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Unique code to identify the item.
   */
  code?: string | null;
  /**
   * The current state of the item.
   */
  state?: string | null;
  /**
   * This name describes your item and will appear on the invoice when it's purchased on a one time basis.
   */
  name?: string | null;
  /**
   * Optional, description.
   */
  description?: string | null;
  /**
   * Optional, stock keeping unit to link the item to other inventory systems.
   */
  externalSku?: string | null;
  /**
   * Accounting code for invoice line items.
   */
  accountingCode?: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType?: string | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraTransactionType?: number | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraServiceType?: number | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode?: string | null;
  /**
   * `true` exempts tax on the item, `false` applies tax on the item.
   */
  taxExempt?: boolean | null;
  /**
   * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
   */
  customFields?: CustomField[] | null;
  /**
   * Item Pricing
   */
  currencies?: Pricing[] | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Deleted at
   */
  deletedAt?: Date | null;

}

export declare class Pricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Unit price
   */
  unitAmount?: number | null;
  /**
   * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
   */
  taxInclusive?: boolean | null;

}

export declare class MeasuredUnit {
  /**
   * Item ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Unique internal name of the measured unit on your site.
   */
  name?: string | null;
  /**
   * Display name for the measured unit. Can only contain spaces, underscores and must be alphanumeric.
   */
  displayName?: string | null;
  /**
   * The current state of the measured unit.
   */
  state?: string | null;
  /**
   * Optional internal description.
   */
  description?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Deleted at
   */
  deletedAt?: Date | null;

}

export declare class BinaryFile {
  data?: string | null;

}

export declare class Plan {
  /**
   * Plan ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
   */
  code?: string | null;
  /**
   * The current state of the plan.
   */
  state?: string | null;
  /**
   * This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
   */
  name?: string | null;
  /**
   * Optional description, not displayed.
   */
  description?: string | null;
  /**
   * Unit for the plan's billing interval.
   */
  intervalUnit?: string | null;
  /**
   * Length of the plan's billing interval in `interval_unit`.
   */
  intervalLength?: number | null;
  /**
   * Units for the plan's trial period.
   */
  trialUnit?: string | null;
  /**
   * Length of plan's trial period in `trial_units`. `0` means `no trial`.
   */
  trialLength?: number | null;
  /**
   * Allow free trial subscriptions to be created without billing info. Should not be used if billing info is needed for initial invoice due to existing uninvoiced charges or setup fee.
   */
  trialRequiresBillingInfo?: boolean | null;
  /**
   * Automatically terminate subscriptions after a defined number of billing cycles. Number of billing cycles before the plan automatically stops renewing, defaults to `null` for continuous, automatic renewal.
   */
  totalBillingCycles?: number | null;
  /**
   * Subscriptions will automatically inherit this value once they are active. If `auto_renew` is `true`, then a subscription will automatically renew its term at renewal. If `auto_renew` is `false`, then a subscription will expire at the end of its term. `auto_renew` can be overridden on the subscription record itself.
   */
  autoRenew?: boolean | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType?: string | null;
  /**
   * Setup fee revenue schedule type
   */
  setupFeeRevenueScheduleType?: string | null;
  /**
   * Accounting code for invoice line items for the plan. If no value is provided, it defaults to plan's code.
   */
  accountingCode?: string | null;
  /**
   * Accounting code for invoice line items for the plan's setup fee. If no value is provided, it defaults to plan's accounting code.
   */
  setupFeeAccountingCode?: string | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the plan is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraTransactionType?: number | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the plan is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraServiceType?: number | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode?: string | null;
  /**
   * `true` exempts tax on the plan, `false` applies tax on the plan.
   */
  taxExempt?: boolean | null;
  /**
   * Pricing
   */
  currencies?: PlanPricing[] | null;
  /**
   * Hosted pages settings
   */
  hostedPages?: PlanHostedPages | null;
  /**
   * Used to determine whether items can be assigned as add-ons to individual subscriptions. If `true`, items can be assigned as add-ons to individual subscription add-ons. If `false`, only plan add-ons can be used. 
   */
  allowAnyItemOnSubscriptions?: boolean | null;
  /**
   * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this plan. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
   */
  dunningCampaignId?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Deleted at
   */
  deletedAt?: Date | null;

}

export declare class PlanPricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Amount of one-time setup fee automatically charged at the beginning of a subscription billing cycle. For subscription plans with a trial, the setup fee will be charged at the time of signup. Setup fees do not increase with the quantity of a subscription plan.
   */
  setupFee?: number | null;
  /**
   * Unit price
   */
  unitAmount?: number | null;
  /**
   * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
   */
  taxInclusive?: boolean | null;

}

export declare class PlanHostedPages {
  /**
   * URL to redirect to after signup on the hosted payment pages.
   */
  successUrl?: string | null;
  /**
   * URL to redirect to on canceled signup on the hosted payment pages.
   */
  cancelUrl?: string | null;
  /**
   * If `true`, the customer will be sent directly to your `success_url` after a successful signup, bypassing Recurly's hosted confirmation page.
   */
  bypassConfirmation?: boolean | null;
  /**
   * Determines if the quantity field is displayed on the hosted pages for the plan.
   */
  displayQuantity?: boolean | null;

}

export declare class AddOn {
  /**
   * Add-on ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Plan ID
   */
  planId?: string | null;
  /**
   * The unique identifier for the add-on within its plan.
   */
  code?: string | null;
  /**
   * Add-ons can be either active or inactive.
   */
  state?: string | null;
  /**
   * Describes your add-on and will appear in subscribers' invoices.
   */
  name?: string | null;
  /**
   * Whether the add-on type is fixed, or usage-based.
   */
  addOnType?: string | null;
  /**
   * Type of usage, returns usage type if `add_on_type` is `usage`.
   */
  usageType?: string | null;
  /**
   * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0.
   */
  usagePercentage?: number | null;
  /**
   * System-generated unique identifier for an measured unit associated with the add-on.
   */
  measuredUnitId?: string | null;
  /**
   * Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
   */
  accountingCode?: string | null;
  /**
   * When this add-on is invoiced, the line item will use this revenue schedule. If `item_code`/`item_id` is part of the request then `revenue_schedule_type` must be absent in the request as the value will be set from the item.
   */
  revenueScheduleType?: string | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraTransactionType?: number | null;
  /**
   * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
   */
  avalaraServiceType?: number | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode?: string | null;
  /**
   * Determines if the quantity field is displayed on the hosted pages for the add-on.
   */
  displayQuantity?: boolean | null;
  /**
   * Default quantity for the hosted pages.
   */
  defaultQuantity?: number | null;
  /**
   * Whether the add-on is optional for the customer to include in their purchase on the hosted payment page. If false, the add-on will be included when a subscription is created through the Recurly UI. However, the add-on will not be included when a subscription is created through the API.
   */
  optional?: boolean | null;
  /**
   * Add-on pricing
   */
  currencies?: AddOnPricing[] | null;
  /**
   * Just the important parts.
   */
  item?: ItemMini | null;
  /**
   * The pricing model for the add-on.  For more information, [click here](https://docs.recurly.com/docs/billing-models#section-quantity-based). See our [Guide](https://developers.recurly.com/guides/item-addon-guide.html) for an overview of how to configure quantity-based pricing models. 
   */
  tierType?: string | null;
  /**
   * Tiers
   */
  tiers?: Tier[] | null;
  /**
   * Optional, stock keeping unit to link the item to other inventory systems.
   */
  externalSku?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Deleted at
   */
  deletedAt?: Date | null;

}

export declare class AddOnPricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Allows up to 2 decimal places. Required unless `unit_amount_decimal` is provided.
   */
  unitAmount?: number | null;
  /**
   * Allows up to 9 decimal places. Only supported when `add_on_type` = `usage`. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. 
   */
  unitAmountDecimal?: string | null;
  /**
   * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
   */
  taxInclusive?: boolean | null;

}

export declare class Tier {
  /**
   * Ending quantity for the tier.  This represents a unit amount for unit-priced add ons, but for percentage type usage add ons, represents the site default currency in its minimum divisible unit.
   */
  endingQuantity?: number | null;
  /**
   * Decimal usage percentage.
   */
  usagePercentage?: string | null;
  /**
   * Tier pricing
   */
  currencies?: TierPricing[] | null;

}

export declare class TierPricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency?: string | null;
  /**
   * Allows up to 2 decimal places. Required unless `unit_amount_decimal` is provided.
   */
  unitAmount?: number | null;
  /**
   * Allows up to 9 decimal places. Only supported when `add_on_type` = `usage`. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. 
   */
  unitAmountDecimal?: string | null;

}

export declare class ShippingMethod {
  /**
   * Shipping Method ID
   */
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * The internal name used identify the shipping method.
   */
  code?: string | null;
  /**
   * The name of the shipping method displayed to customers.
   */
  name?: string | null;
  /**
   * Accounting code for shipping method.
   */
  accountingCode?: string | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s built-in tax feature. The tax code values are specific to each tax system. If you are using Recurly’s built-in taxes the values are:  - `FR` – Common Carrier FOB Destination - `FR022000` – Common Carrier FOB Origin - `FR020400` – Non Common Carrier FOB Destination - `FR020500` – Non Common Carrier FOB Origin - `FR010100` – Delivery by Company Vehicle Before Passage of Title - `FR010200` – Delivery by Company Vehicle After Passage of Title - `NT` – Non-Taxable 
   */
  taxCode?: string | null;
  /**
   * Created at
   */
  createdAt?: Date | null;
  /**
   * Last updated at
   */
  updatedAt?: Date | null;
  /**
   * Deleted at
   */
  deletedAt?: Date | null;

}

export declare class Usage {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Custom field for recording the id in your own system associated with the usage, so you can provide auditable usage displays to your customers using a GET on this endpoint.
   */
  merchantTag?: string | null;
  /**
   * The amount of usage. Can be positive, negative, or 0. No decimals allowed, we will strip them. If the usage-based add-on is billed with a percentage, your usage will be a monetary amount you will want to format in cents. (e.g., $5.00 is "500").
   */
  amount?: number | null;
  /**
   * Type of usage, returns usage type if `add_on_type` is `usage`.
   */
  usageType?: string | null;
  /**
   * The pricing model for the add-on.  For more information, [click here](https://docs.recurly.com/docs/billing-models#section-quantity-based). See our [Guide](https://developers.recurly.com/guides/item-addon-guide.html) for an overview of how to configure quantity-based pricing models. 
   */
  tierType?: string | null;
  /**
   * The tiers and prices of the subscription based on the usage_timestamp. If tier_type = flat, tiers = null
   */
  tiers?: SubscriptionAddOnTier[] | null;
  /**
   * The ID of the measured unit associated with the add-on the usage record is for.
   */
  measuredUnitId?: string | null;
  /**
   * When the usage was recorded in your system.
   */
  recordingTimestamp?: Date | null;
  /**
   * When the usage actually happened. This will define the line item dates this usage is billed under and is important for revenue recognition.
   */
  usageTimestamp?: Date | null;
  /**
   * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0.
   */
  usagePercentage?: number | null;
  /**
   * Unit price
   */
  unitAmount?: number | null;
  /**
   * Unit price that can optionally support a sub-cent value.
   */
  unitAmountDecimal?: string | null;
  /**
   * When the usage record was billed on an invoice.
   */
  billedAt?: Date | null;
  /**
   * When the usage record was created in Recurly.
   */
  createdAt?: Date | null;
  /**
   * When the usage record was billed on an invoice.
   */
  updatedAt?: Date | null;

}

export declare class ExportDates {
  /**
   * Object type
   */
  object?: string | null;
  /**
   * An array of dates that have available exports.
   */
  dates?: string[] | null;

}

export declare class ExportFiles {
  /**
   * Object type
   */
  object?: string | null;
  files?: ExportFile[] | null;

}

export declare class ExportFile {
  /**
   * Name of the export file.
   */
  name?: string | null;
  /**
   * MD5 hash of the export file.
   */
  md5sum?: string | null;
  /**
   * A presigned link to download the export file.
   */
  href?: string | null;

}

export declare class DunningCampaign {
  id?: string | null;
  /**
   * Object type
   */
  object?: string | null;
  /**
   * Campaign code.
   */
  code?: string | null;
  /**
   * Campaign name.
   */
  name?: string | null;
  /**
   * Campaign description.
   */
  description?: string | null;
  /**
   * Whether or not this is the default campaign for accounts or plans without an assigned dunning campaign.
   */
  defaultCampaign?: boolean | null;
  /**
   * Dunning Cycle settings.
   */
  dunningCycles?: DunningCycle[] | null;
  /**
   * When the current campaign was created in Recurly.
   */
  createdAt?: Date | null;
  /**
   * When the current campaign was updated in Recurly.
   */
  updatedAt?: Date | null;
  /**
   * When the current campaign was deleted in Recurly.
   */
  deletedAt?: Date | null;

}

export declare class DunningCycle {
  /**
   * The type of invoice this cycle applies to.
   */
  type?: string | null;
  /**
   * Whether the dunning settings will be applied to manual trials. Only applies to trial cycles.
   */
  appliesToManualTrial?: boolean | null;
  /**
   * The number of days after a transaction failure before the first dunning email is sent.
   */
  firstCommunicationInterval?: number | null;
  /**
   * Whether or not to send an extra email immediately to customers whose initial payment attempt fails with either a hard decline or invalid billing info.
   */
  sendImmediatelyOnHardDecline?: boolean | null;
  /**
   * Dunning intervals.
   */
  intervals?: DunningInterval[] | null;
  /**
   * Whether the subscription(s) should be cancelled at the end of the dunning cycle.
   */
  expireSubscription?: boolean | null;
  /**
   * Whether the invoice should be failed at the end of the dunning cycle.
   */
  failInvoice?: boolean | null;
  /**
   * The number of days between the first dunning email being sent and the end of the dunning cycle.
   */
  totalDunningDays?: number | null;
  /**
   * The number of days between a transaction failure and the end of the dunning cycle.
   */
  totalRecyclingDays?: number | null;
  /**
   * Current campaign version.
   */
  version?: number | null;
  /**
   * When the current settings were created in Recurly.
   */
  createdAt?: Date | null;
  /**
   * When the current settings were updated in Recurly.
   */
  updatedAt?: Date | null;

}

export declare class DunningInterval {
  /**
   * Number of days before sending the next email.
   */
  days?: number | null;
  /**
   * Email template being used.
   */
  emailTemplate?: string | null;

}

export declare class DunningCampaignsBulkUpdateResponse {
  /**
   * Object type
   */
  object?: string | null;
  /**
   * An array containing all of the `Plan` resources that have been updated.
   */
  plans?: Plan[] | null;

}



export interface Empty {
}

export declare class Pager<T> {
  count(): Promise<number>;
  first(): Promise<T>;
  each(): AsyncIterable<T>;
  eachPage(): AsyncIterable<T[]>;
}


export interface AccountCreate {
  /**
    * The unique identifier of the account. This cannot be changed once the account is created.
    */
  code?: string | null;
  acquisition?: AccountAcquisitionUpdate | null;
  shippingAddresses?: ShippingAddressCreate[] | null;
  /**
    * A secondary value for the account.
    */
  username?: string | null;
  /**
    * The email address used for communicating with this customer. The customer will also use this email address to log into your hosted account management pages. This value does not need to be unique.
    */
  email?: string | null;
  /**
    * Used to determine the language and locale of emails sent on behalf of the merchant to the customer. The list of locales is restricted to those the merchant has enabled on the site.
    */
  preferredLocale?: string | null;
  /**
    * Additional email address that should receive account correspondence. These should be separated only by commas. These CC emails will receive all emails that the `email` field also receives.
    */
  ccEmails?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  /**
    * The VAT number of the account (to avoid having the VAT applied). This is only used for manually collected invoices.
    */
  vatNumber?: string | null;
  /**
    * The tax status of the account. `true` exempts tax on the account, `false` applies tax on the account.
    */
  taxExempt?: boolean | null;
  /**
    * The tax exemption certificate number for the account. If the merchant has an integration for the Vertex tax provider, this optional value will be sent in any tax calculation requests for the account.
    */
  exemptionCertificate?: string | null;
  /**
    * The account code of the parent account to be associated with this account. Passing an empty value removes any existing parent association from this account. If both `parent_account_code` and `parent_account_id` are passed, the non-blank value in `parent_account_id` will be used. Only one level of parent child relationship is allowed. You cannot assign a parent account that itself has a parent account.
    */
  parentAccountCode?: string | null;
  /**
    * The UUID of the parent account to be associated with this account. Passing an empty value removes any existing parent association from this account. If both `parent_account_code` and `parent_account_id` are passed, the non-blank value in `parent_account_id` will be used. Only one level of parent child relationship is allowed. You cannot assign a parent account that itself has a parent account.
    */
  parentAccountId?: string | null;
  /**
    * An enumerable describing the billing behavior of the account, specifically whether the account is self-paying or will rely on the parent account to pay.
    */
  billTo?: string | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;
  /**
    * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this account. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
    */
  dunningCampaignId?: string | null;
  /**
    * Unique ID to identify an invoice template.  Available when the Invoice Customization feature is enabled.  Used to specify which invoice template, if any, should be used to generate invoices for the account.
    */
  invoiceTemplateId?: string | null;
  address?: Address | null;
  billingInfo?: BillingInfoCreate | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;

}

export interface AccountAcquisitionUpdate {
  /**
    * Account balance
    */
  cost?: AccountAcquisitionCost | null;
  /**
    * The channel through which the account was acquired.
    */
  channel?: string | null;
  /**
    * An arbitrary subchannel string representing a distinction/subcategory within a broader channel.
    */
  subchannel?: string | null;
  /**
    * An arbitrary identifier for the marketing campaign that led to the acquisition of this account.
    */
  campaign?: string | null;

}

export interface AccountAcquisitionCost {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * The amount of the corresponding currency used to acquire the account.
    */
  amount?: number | null;

}

export interface ShippingAddressCreate {
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  email?: string | null;
  vatNumber?: string | null;
  phone?: string | null;
  street1?: string | null;
  street2?: string | null;
  city?: string | null;
  /**
    * State or province.
    */
  region?: string | null;
  /**
    * Zip or postal code.
    */
  postalCode?: string | null;
  /**
    * Country, 2-letter ISO 3166-1 alpha-2 code.
    */
  country?: string | null;

}

export interface Address {
  /**
    * Phone number
    */
  phone?: string | null;
  /**
    * Street 1
    */
  street1?: string | null;
  /**
    * Street 2
    */
  street2?: string | null;
  /**
    * City
    */
  city?: string | null;
  /**
    * State or province.
    */
  region?: string | null;
  /**
    * Zip or postal code.
    */
  postalCode?: string | null;
  /**
    * Country, 2-letter ISO 3166-1 alpha-2 code.
    */
  country?: string | null;

}

export interface BillingInfoCreate {
  /**
    * A token [generated by Recurly.js](https://developers.recurly.com/reference/recurly-js/#getting-a-token).
    */
  tokenId?: string | null;
  /**
    * First name
    */
  firstName?: string | null;
  /**
    * Last name
    */
  lastName?: string | null;
  /**
    * Company name
    */
  company?: string | null;
  address?: Address | null;
  /**
    * Credit card number, spaces and dashes are accepted.
    */
  number?: string | null;
  /**
    * Expiration month
    */
  month?: string | null;
  /**
    * Expiration year
    */
  year?: string | null;
  /**
    * *STRONGLY RECOMMENDED*
    */
  cvv?: string | null;
  /**
    * VAT number
    */
  vatNumber?: string | null;
  /**
    * *STRONGLY RECOMMENDED* Customer's IP address when updating their billing information.
    */
  ipAddress?: string | null;
  /**
    * A token used in place of a credit card in order to perform transactions. Must be used in conjunction with `gateway_code`.
    */
  gatewayToken?: string | null;
  /**
    * An identifier for a specific payment gateway. Must be used in conjunction with `gateway_token`.
    */
  gatewayCode?: string | null;
  /**
    * Amazon billing agreement ID
    */
  amazonBillingAgreementId?: string | null;
  /**
    * PayPal billing agreement ID
    */
  paypalBillingAgreementId?: string | null;
  /**
    * Fraud Session ID
    */
  fraudSessionId?: string | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;
  /**
    * A token generated by Recurly.js after completing a 3-D Secure device fingerprinting or authentication challenge.
    */
  threeDSecureActionResultTokenId?: string | null;
  /**
    * The International Bank Account Number, up to 34 alphanumeric characters comprising a country code; two check digits; and a number that includes the domestic bank account number, branch identifier, and potential routing information
    */
  iban?: string | null;
  /**
    * The name associated with the bank account (ACH, SEPA, Bacs only)
    */
  nameOnAccount?: string | null;
  /**
    * The bank account number. (ACH, Bacs only)
    */
  accountNumber?: string | null;
  /**
    * The bank's rounting number. (ACH only)
    */
  routingNumber?: string | null;
  /**
    * Bank identifier code for UK based banks. Required for Bacs based billing infos. (Bacs only)
    */
  sortCode?: string | null;
  /**
    * The payment method type for a non-credit card based billing info. `bacs` and `becs` are the only accepted values.
    */
  type?: string | null;
  /**
    * The bank account type. (ACH only)
    */
  accountType?: string | null;
  /**
    * Tax identifier is required if adding a billing info that is a consumer card in Brazil or in Argentina. This would be the customer's CPF (Brazil) and CUIT (Argentina). CPF and CUIT are tax identifiers for all residents who pay taxes in Brazil and Argentina respectively.
    */
  taxIdentifier?: string | null;
  /**
    * This field and a value of `cpf` or `cuit` are required if adding a billing info that is an elo or hipercard type in Brazil or in Argentina.
    */
  taxIdentifierType?: string | null;
  /**
    * The `primary_payment_method` field is used to designate the primary billing info on the account. The first billing info created on an account will always become primary. Adding additional billing infos provides the flexibility to mark another billing info as primary, or adding additional non-primary billing infos. This can be accomplished by passing the `primary_payment_method` with a value of `true`. When adding billing infos via the billing_info and /accounts endpoints, this value is not permitted, and will return an error if provided.
    */
  primaryPaymentMethod?: boolean | null;
  /**
    * The `backup_payment_method` field is used to designate a billing info as a backup on the account that will be tried if the initial billing info used for an invoice is declined. All payment methods, including the billing info marked `primary_payment_method` can be set as a backup. An account can have a maximum of 1 backup, if a user sets a different payment method as a backup, the existing backup will no longer be marked as such.
    */
  backupPaymentMethod?: boolean | null;

}

export interface CustomField {
  /**
    * Fields must be created in the UI before values can be assigned to them.
    */
  name?: string | null;
  /**
    * Any values that resemble a credit card number or security code (CVV/CVC) will be rejected.
    */
  value?: string | null;

}

export interface AccountUpdate {
  /**
    * A secondary value for the account.
    */
  username?: string | null;
  /**
    * The email address used for communicating with this customer. The customer will also use this email address to log into your hosted account management pages. This value does not need to be unique.
    */
  email?: string | null;
  /**
    * Used to determine the language and locale of emails sent on behalf of the merchant to the customer. The list of locales is restricted to those the merchant has enabled on the site.
    */
  preferredLocale?: string | null;
  /**
    * Additional email address that should receive account correspondence. These should be separated only by commas. These CC emails will receive all emails that the `email` field also receives.
    */
  ccEmails?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  /**
    * The VAT number of the account (to avoid having the VAT applied). This is only used for manually collected invoices.
    */
  vatNumber?: string | null;
  /**
    * The tax status of the account. `true` exempts tax on the account, `false` applies tax on the account.
    */
  taxExempt?: boolean | null;
  /**
    * The tax exemption certificate number for the account. If the merchant has an integration for the Vertex tax provider, this optional value will be sent in any tax calculation requests for the account.
    */
  exemptionCertificate?: string | null;
  /**
    * The account code of the parent account to be associated with this account. Passing an empty value removes any existing parent association from this account. If both `parent_account_code` and `parent_account_id` are passed, the non-blank value in `parent_account_id` will be used. Only one level of parent child relationship is allowed. You cannot assign a parent account that itself has a parent account.
    */
  parentAccountCode?: string | null;
  /**
    * The UUID of the parent account to be associated with this account. Passing an empty value removes any existing parent association from this account. If both `parent_account_code` and `parent_account_id` are passed, the non-blank value in `parent_account_id` will be used. Only one level of parent child relationship is allowed. You cannot assign a parent account that itself has a parent account.
    */
  parentAccountId?: string | null;
  /**
    * An enumerable describing the billing behavior of the account, specifically whether the account is self-paying or will rely on the parent account to pay.
    */
  billTo?: string | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;
  /**
    * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this account. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
    */
  dunningCampaignId?: string | null;
  /**
    * Unique ID to identify an invoice template.  Available when the Invoice Customization feature is enabled.  Used to specify which invoice template, if any, should be used to generate invoices for the account.
    */
  invoiceTemplateId?: string | null;
  address?: Address | null;
  billingInfo?: BillingInfoCreate | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;

}

export interface BillingInfoVerify {
  /**
    * An identifier for a specific payment gateway.
    */
  gatewayCode?: string | null;

}

export interface CouponRedemptionCreate {
  /**
    * Coupon ID
    */
  couponId?: string | null;
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * Subscription ID
    */
  subscriptionId?: string | null;

}

export interface InvoiceCreate {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * An automatic invoice means a corresponding transaction is run using the account's billing information at the same time the invoice is created. Manual invoices are created without a corresponding transaction. The merchant must enter a manual payment transaction or have the customer pay the invoice with an automatic method, like credit card, PayPal, Amazon, or ACH bank payment.
    */
  collectionMethod?: string | null;
  /**
    * This will default to the Customer Notes text specified on the Invoice Settings for charge invoices. Specify custom notes to add or override Customer Notes on charge invoices.
    */
  chargeCustomerNotes?: string | null;
  /**
    * This will default to the Customer Notes text specified on the Invoice Settings for credit invoices. Specify customer notes to add or override Customer Notes on credit invoices.
    */
  creditCustomerNotes?: string | null;
  /**
    * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
    */
  netTerms?: number | null;
  /**
    * For manual invoicing, this identifies the PO number associated with the subscription.
    */
  poNumber?: string | null;
  /**
    * This will default to the Terms and Conditions text specified on the Invoice Settings page in your Recurly admin. Specify custom notes to add or override Terms and Conditions.
    */
  termsAndConditions?: string | null;
  /**
    * VAT Reverse Charge Notes only appear if you have EU VAT enabled or are using your own Avalara AvaTax account and the customer is in the EU, has a VAT number, and is in a different country than your own. This will default to the VAT Reverse Charge Notes text specified on the Tax Settings page in your Recurly admin, unless custom notes were created with the original subscription.
    */
  vatReverseChargeNotes?: string | null;

}

export interface LineItemCreate {
  /**
    * 3-letter ISO 4217 currency code. If `item_code`/`item_id` is part of the request then `currency` is optional, if the site has a single default currency. `currency` is required if `item_code`/`item_id` is present, and there are multiple currencies defined on the site. If `item_code`/`item_id` is not present `currency` is required.
    */
  currency?: string | null;
  /**
    * A positive or negative amount with `type=charge` will result in a positive `unit_amount`. A positive or negative amount with `type=credit` will result in a negative `unit_amount`. If `item_code`/`item_id` is present, `unit_amount` can be passed in, to override the `Item`'s `unit_amount`. If `item_code`/`item_id` is not present then `unit_amount` is required. 
    */
  unitAmount?: number | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;
  /**
    * This number will be multiplied by the unit amount to compute the subtotal before any discounts or taxes.
    */
  quantity?: number | null;
  /**
    * Description that appears on the invoice. If `item_code`/`item_id` is part of the request then `description` must be absent.
    */
  description?: string | null;
  /**
    * Unique code to identify an item. Available when the Credit Invoices feature is enabled.
    */
  itemCode?: string | null;
  /**
    * System-generated unique identifier for an item. Available when the Credit Invoices feature is enabled.
    */
  itemId?: string | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * Line item type. If `item_code`/`item_id` is present then `type` should not be present. If `item_code`/`item_id` is not present then `type` is required.
    */
  type?: string | null;
  /**
    * The reason the credit was given when line item is `type=credit`. When the Credit Invoices feature is enabled, the value can be set and will default to `general`. When the Credit Invoices feature is not enabled, the value will always be `null`.
    */
  creditReasonCode?: string | null;
  /**
    * Accounting Code for the `LineItem`. If `item_code`/`item_id` is part of the request then `accounting_code` must be absent.
    */
  accountingCode?: string | null;
  /**
    * `true` exempts tax on charges, `false` applies tax on charges. If not defined, then defaults to the Plan and Site settings. This attribute does not work for credits (negative line items). Credits are always applied post-tax. Pre-tax discounts should use the Coupons feature.
    */
  taxExempt?: boolean | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the line item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types. If an `Item` is associated to the `LineItem`, then the `avalara_transaction_type` must be absent.
    */
  avalaraTransactionType?: number | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the line item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types. If an `Item` is associated to the `LineItem`, then the `avalara_service_type` must be absent.
    */
  avalaraServiceType?: number | null;
  /**
    * Optional field used by Avalara, Vertex, and Recurly's EU VAT tax feature to determine taxation rules. If you have your own AvaTax or Vertex account configured, use their tax codes to assign specific tax rules. If you are using Recurly's EU VAT feature, you can use values of `unknown`, `physical`, or `digital`.
    */
  taxCode?: string | null;
  /**
    * Optional field to track a product code or SKU for the line item. This can be used to later reporting on product purchases. For Vertex tax calculations, this field will be used as the Vertex `product` field. If `item_code`/`item_id` is part of the request then `product_code` must be absent.
    */
  productCode?: string | null;
  /**
    * Origin `external_gift_card` is allowed if the Gift Cards feature is enabled on your site and `type` is `credit`. Set this value in order to track gift card credits from external gift cards (like InComm). It also skips billing information requirements.  Origin `prepayment` is only allowed if `type` is `charge` and `tax_exempt` is left blank or set to true.  This origin creates a charge and opposite credit on the account to be used for future invoices.
    */
  origin?: string | null;
  /**
    * If an end date is present, this is value indicates the beginning of a billing time range. If no end date is present it indicates billing for a specific date. Defaults to the current date-time.
    */
  startDate?: Date | null;
  /**
    * If this date is provided, it indicates the end of a time range.
    */
  endDate?: Date | null;

}

export interface ShippingAddressUpdate {
  /**
    * Shipping Address ID
    */
  id?: string | null;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  email?: string | null;
  vatNumber?: string | null;
  phone?: string | null;
  street1?: string | null;
  street2?: string | null;
  city?: string | null;
  /**
    * State or province.
    */
  region?: string | null;
  /**
    * Zip or postal code.
    */
  postalCode?: string | null;
  /**
    * Country, 2-letter ISO 3166-1 alpha-2 code.
    */
  country?: string | null;

}

export interface CouponCreate {
  /**
    * The internal name for the coupon.
    */
  name?: string | null;
  /**
    * A maximum number of redemptions for the coupon. The coupon will expire when it hits its maximum redemptions.
    */
  maxRedemptions?: number | null;
  /**
    * Redemptions per account is the number of times a specific account can redeem the coupon. Set redemptions per account to `1` if you want to keep customers from gaming the system and getting more than one discount from the coupon campaign.
    */
  maxRedemptionsPerAccount?: number | null;
  /**
    * This description will show up when a customer redeems a coupon on your Hosted Payment Pages, or if you choose to show the description on your own checkout page.
    */
  hostedDescription?: string | null;
  /**
    * Description of the coupon on the invoice.
    */
  invoiceDescription?: string | null;
  /**
    * The date and time the coupon will expire and can no longer be redeemed. Time is always 11:59:59, the end-of-day Pacific time.
    */
  redeemByDate?: string | null;
  /**
    * The code the customer enters to redeem the coupon.
    */
  code?: string | null;
  /**
    * The type of discount provided by the coupon (how the amount discounted is calculated)
    */
  discountType?: string | null;
  /**
    * The percent of the price discounted by the coupon.  Required if `discount_type` is `percent`.
    */
  discountPercent?: number | null;
  /**
    * Description of the unit of time the coupon is for. Used with `free_trial_amount` to determine the duration of time the coupon is for.  Required if `discount_type` is `free_trial`.
    */
  freeTrialUnit?: string | null;
  /**
    * Sets the duration of time the `free_trial_unit` is for. Required if `discount_type` is `free_trial`.
    */
  freeTrialAmount?: number | null;
  /**
    * Fixed discount currencies by currency. Required if the coupon type is `fixed`. This parameter should contain the coupon discount values
    */
  currencies?: CouponPricing[] | null;
  /**
    * The coupon is valid for one-time, non-plan charges if true.
    */
  appliesToNonPlanCharges?: boolean | null;
  /**
    * The coupon is valid for all plans if true. If false then `plans` will list the applicable plans.
    */
  appliesToAllPlans?: boolean | null;
  /**
    * To apply coupon to Items in your Catalog, include a list of `item_codes` in the request that the coupon will apply to. Or set value to true to apply to all Items in your Catalog. The following values are not permitted when `applies_to_all_items` is included: `free_trial_amount` and `free_trial_unit`. 
    */
  appliesToAllItems?: boolean | null;
  /**
    * List of plan codes to which this coupon applies. Required if `applies_to_all_plans` is false. Overrides `applies_to_all_plans` when `applies_to_all_plans` is true. 
    */
  planCodes?: string[] | null;
  /**
    * List of item codes to which this coupon applies. Sending `item_codes` is only permitted when `applies_to_all_items` is set to false. The following values are not permitted when `item_codes` is included: `free_trial_amount` and `free_trial_unit`. 
    */
  itemCodes?: string[] | null;
  /**
    * This field does not apply when the discount_type is `free_trial`. - "single_use" coupons applies to the first invoice only. - "temporal" coupons will apply to invoices for the duration determined by the `temporal_unit` and `temporal_amount` attributes. - "forever" coupons will apply to invoices forever. 
    */
  duration?: string | null;
  /**
    * If `duration` is "temporal" than `temporal_amount` is an integer which is multiplied by `temporal_unit` to define the duration that the coupon will be applied to invoices for.
    */
  temporalAmount?: number | null;
  /**
    * If `duration` is "temporal" than `temporal_unit` is multiplied by `temporal_amount` to define the duration that the coupon will be applied to invoices for.
    */
  temporalUnit?: string | null;
  /**
    * Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
    */
  couponType?: string | null;
  /**
    * On a bulk coupon, the template from which unique coupon codes are generated. - You must start the template with your coupon_code wrapped in single quotes. - Outside of single quotes, use a 9 for a character that you want to be a random number. - Outside of single quotes, use an "x" for a character that you want to be a random letter. - Outside of single quotes, use an * for a character that you want to be a random number or letter. - Use single quotes ' ' for characters that you want to remain static. These strings can be alphanumeric and may contain a - _ or +. For example: "'abc-'****'-def'" 
    */
  uniqueCodeTemplate?: string | null;
  /**
    * Whether the discount is for all eligible charges on the account, or only a specific subscription.
    */
  redemptionResource?: string | null;

}

export interface CouponPricing {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * The fixed discount (in dollars) for the corresponding currency.
    */
  discount?: number | null;

}

export interface CouponUpdate {
  /**
    * The internal name for the coupon.
    */
  name?: string | null;
  /**
    * A maximum number of redemptions for the coupon. The coupon will expire when it hits its maximum redemptions.
    */
  maxRedemptions?: number | null;
  /**
    * Redemptions per account is the number of times a specific account can redeem the coupon. Set redemptions per account to `1` if you want to keep customers from gaming the system and getting more than one discount from the coupon campaign.
    */
  maxRedemptionsPerAccount?: number | null;
  /**
    * This description will show up when a customer redeems a coupon on your Hosted Payment Pages, or if you choose to show the description on your own checkout page.
    */
  hostedDescription?: string | null;
  /**
    * Description of the coupon on the invoice.
    */
  invoiceDescription?: string | null;
  /**
    * The date and time the coupon will expire and can no longer be redeemed. Time is always 11:59:59, the end-of-day Pacific time.
    */
  redeemByDate?: string | null;

}

export interface CouponBulkCreate {
  /**
    * The quantity of unique coupon codes to generate
    */
  numberOfUniqueCodes?: number | null;

}

export interface ItemCreate {
  /**
    * Unique code to identify the item.
    */
  code?: string | null;
  /**
    * This name describes your item and will appear on the invoice when it's purchased on a one time basis.
    */
  name?: string | null;
  /**
    * Optional, description.
    */
  description?: string | null;
  /**
    * Optional, stock keeping unit to link the item to other inventory systems.
    */
  externalSku?: string | null;
  /**
    * Accounting code for invoice line items.
    */
  accountingCode?: string | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraTransactionType?: number | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraServiceType?: number | null;
  /**
    * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
    */
  taxCode?: string | null;
  /**
    * `true` exempts tax on the item, `false` applies tax on the item.
    */
  taxExempt?: boolean | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;
  /**
    * Item Pricing
    */
  currencies?: Pricing[] | null;

}

export interface Pricing {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * Unit price
    */
  unitAmount?: number | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;

}

export interface ItemUpdate {
  /**
    * Unique code to identify the item.
    */
  code?: string | null;
  /**
    * This name describes your item and will appear on the invoice when it's purchased on a one time basis.
    */
  name?: string | null;
  /**
    * Optional, description.
    */
  description?: string | null;
  /**
    * Optional, stock keeping unit to link the item to other inventory systems.
    */
  externalSku?: string | null;
  /**
    * Accounting code for invoice line items.
    */
  accountingCode?: string | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraTransactionType?: number | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the item is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraServiceType?: number | null;
  /**
    * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
    */
  taxCode?: string | null;
  /**
    * `true` exempts tax on the item, `false` applies tax on the item.
    */
  taxExempt?: boolean | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;
  /**
    * Item Pricing
    */
  currencies?: Pricing[] | null;

}

export interface MeasuredUnitCreate {
  /**
    * Unique internal name of the measured unit on your site.
    */
  name?: string | null;
  /**
    * Display name for the measured unit.
    */
  displayName?: string | null;
  /**
    * Optional internal description.
    */
  description?: string | null;

}

export interface MeasuredUnitUpdate {
  /**
    * Unique internal name of the measured unit on your site.
    */
  name?: string | null;
  /**
    * Display name for the measured unit.
    */
  displayName?: string | null;
  /**
    * Optional internal description.
    */
  description?: string | null;

}

export interface InvoiceUpdate {
  /**
    * This identifies the PO number associated with the invoice. Not editable for credit invoices.
    */
  poNumber?: string | null;
  /**
    * VAT Reverse Charge Notes are editable only if there was a VAT reverse charge applied to the invoice.
    */
  vatReverseChargeNotes?: string | null;
  /**
    * Terms and conditions are an optional note field. Not editable for credit invoices.
    */
  termsAndConditions?: string | null;
  /**
    * Customer notes are an optional note field.
    */
  customerNotes?: string | null;
  /**
    * Integer representing the number of days after an invoice's creation that the invoice will become past due. Changing Net terms changes due_on, and the invoice could move between past due and pending.
    */
  netTerms?: number | null;
  address?: InvoiceAddress | null;

}

export interface InvoiceAddress {
  /**
    * Name on account
    */
  nameOnAccount?: string | null;
  /**
    * Company
    */
  company?: string | null;
  /**
    * Phone number
    */
  phone?: string | null;
  /**
    * Street 1
    */
  street1?: string | null;
  /**
    * Street 2
    */
  street2?: string | null;
  /**
    * City
    */
  city?: string | null;
  /**
    * State or province.
    */
  region?: string | null;
  /**
    * Zip or postal code.
    */
  postalCode?: string | null;
  /**
    * Country, 2-letter ISO 3166-1 alpha-2 code.
    */
  country?: string | null;
  /**
    * First name
    */
  firstName?: string | null;
  /**
    * Last name
    */
  lastName?: string | null;

}

export interface InvoiceCollect {
  /**
    * A token generated by Recurly.js after completing a 3-D Secure device fingerprinting or authentication challenge.
    */
  threeDSecureActionResultTokenId?: string | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;
  /**
    * The `billing_info_id` is the value that represents a specific billing info for an end customer. When `billing_info_id` is used to assign billing info to the subscription, all future billing events for the subscription will bill to the specified billing info. `billing_info_id` can ONLY be used for sites utilizing the Wallet feature.
    */
  billingInfoId?: string | null;

}

export interface ExternalTransaction {
  /**
    * Payment method used for external transaction.
    */
  paymentMethod?: string | null;
  /**
    * Used as the transaction's description.
    */
  description?: string | null;
  /**
    * The total amount of the transcaction. Cannot excceed the invoice total.
    */
  amount?: number | null;
  /**
    * Datetime that the external payment was collected. Defaults to current datetime.
    */
  collectedAt?: Date | null;

}

export interface InvoiceRefund {
  /**
    * The type of refund. Amount and line items cannot both be specified in the request.
    */
  type?: string | null;
  /**
    * The amount to be refunded. The amount will be split between the line items. If no amount is specified, it will default to refunding the total refundable amount on the invoice. 
    */
  amount?: number | null;
  /**
    * The line items to be refunded. This is required when `type=line_items`.
    */
  lineItems?: LineItemRefund[] | null;
  /**
    * Indicates how the invoice should be refunded when both a credit and transaction are present on the invoice: - `transaction_first` – Refunds the transaction first, then any amount is issued as credit back to the account. Default value when Credit Invoices feature is enabled. - `credit_first` – Issues credit back to the account first, then refunds any remaining amount back to the transaction. Default value when Credit Invoices feature is not enabled. - `all_credit` – Issues credit to the account for the entire amount of the refund. Only available when the Credit Invoices feature is enabled. - `all_transaction` – Refunds the entire amount back to transactions, using transactions from previous invoices if necessary. Only available when the Credit Invoices feature is enabled. 
    */
  refundMethod?: string | null;
  /**
    * Used as the Customer Notes on the credit invoice.  This field can only be include when the Credit Invoices feature is enabled. 
    */
  creditCustomerNotes?: string | null;
  /**
    * Indicates that the refund was settled outside of Recurly, and a manual transaction should be created to track it in Recurly.  Required when: - refunding a manually collected charge invoice, and `refund_method` is not `all_credit` - refunding a credit invoice that refunded manually collecting invoices - refunding a credit invoice for a partial amount  This field can only be included when the Credit Invoices feature is enabled. 
    */
  externalRefund?: ExternalRefund | null;

}

export interface LineItemRefund {
  /**
    * Line item ID
    */
  id?: string | null;
  /**
    * Line item quantity to be refunded.
    */
  quantity?: number | null;
  /**
    * Set to `true` if the line item should be prorated; set to `false` if not. This can only be used on line items that have a start and end date. 
    */
  prorate?: boolean | null;

}

export interface ExternalRefund {
  /**
    * Payment method used for external refund transaction.
    */
  paymentMethod?: string | null;
  /**
    * Used as the refund transactions' description.
    */
  description?: string | null;
  /**
    * Date the external refund payment was made. Defaults to the current date-time.
    */
  refundedAt?: Date | null;

}

export interface PlanCreate {
  /**
    * Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
    */
  code?: string | null;
  /**
    * This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
    */
  name?: string | null;
  /**
    * Optional description, not displayed.
    */
  description?: string | null;
  /**
    * Accounting code for invoice line items for the plan. If no value is provided, it defaults to plan's code.
    */
  accountingCode?: string | null;
  /**
    * Unit for the plan's billing interval.
    */
  intervalUnit?: string | null;
  /**
    * Length of the plan's billing interval in `interval_unit`.
    */
  intervalLength?: number | null;
  /**
    * Units for the plan's trial period.
    */
  trialUnit?: string | null;
  /**
    * Length of plan's trial period in `trial_units`. `0` means `no trial`.
    */
  trialLength?: number | null;
  /**
    * Allow free trial subscriptions to be created without billing info. Should not be used if billing info is needed for initial invoice due to existing uninvoiced charges or setup fee.
    */
  trialRequiresBillingInfo?: boolean | null;
  /**
    * Automatically terminate plans after a defined number of billing cycles.
    */
  totalBillingCycles?: number | null;
  /**
    * Subscriptions will automatically inherit this value once they are active. If `auto_renew` is `true`, then a subscription will automatically renew its term at renewal. If `auto_renew` is `false`, then a subscription will expire at the end of its term. `auto_renew` can be overridden on the subscription record itself.
    */
  autoRenew?: boolean | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * Setup fee revenue schedule type
    */
  setupFeeRevenueScheduleType?: string | null;
  /**
    * Accounting code for invoice line items for the plan's setup fee. If no value is provided, it defaults to plan's accounting code.
    */
  setupFeeAccountingCode?: string | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the plan is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraTransactionType?: number | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the plan is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraServiceType?: number | null;
  /**
    * Optional field used by Avalara, Vertex, and Recurly's EU VAT tax feature to determine taxation rules. If you have your own AvaTax or Vertex account configured, use their tax codes to assign specific tax rules. If you are using Recurly's EU VAT feature, you can use values of `unknown`, `physical`, or `digital`.
    */
  taxCode?: string | null;
  /**
    * `true` exempts tax on the plan, `false` applies tax on the plan.
    */
  taxExempt?: boolean | null;
  /**
    * Pricing
    */
  currencies?: PlanPricing[] | null;
  /**
    * Hosted pages settings
    */
  hostedPages?: PlanHostedPages | null;
  /**
    * Add Ons
    */
  addOns?: AddOnCreate[] | null;
  /**
    * Used to determine whether items can be assigned as add-ons to individual subscriptions. If `true`, items can be assigned as add-ons to individual subscription add-ons. If `false`, only plan add-ons can be used. 
    */
  allowAnyItemOnSubscriptions?: boolean | null;
  /**
    * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this plan. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
    */
  dunningCampaignId?: string | null;

}

export interface PlanPricing {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * Amount of one-time setup fee automatically charged at the beginning of a subscription billing cycle. For subscription plans with a trial, the setup fee will be charged at the time of signup. Setup fees do not increase with the quantity of a subscription plan.
    */
  setupFee?: number | null;
  /**
    * Unit price
    */
  unitAmount?: number | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;

}

export interface PlanHostedPages {
  /**
    * URL to redirect to after signup on the hosted payment pages.
    */
  successUrl?: string | null;
  /**
    * URL to redirect to on canceled signup on the hosted payment pages.
    */
  cancelUrl?: string | null;
  /**
    * If `true`, the customer will be sent directly to your `success_url` after a successful signup, bypassing Recurly's hosted confirmation page.
    */
  bypassConfirmation?: boolean | null;
  /**
    * Determines if the quantity field is displayed on the hosted pages for the plan.
    */
  displayQuantity?: boolean | null;

}

export interface AddOnCreate {
  /**
    * Unique code to identify an item. Available when the `Credit Invoices` feature are enabled. If `item_id` and `item_code` are both present, `item_id` will be used.
    */
  itemCode?: string | null;
  /**
    * System-generated unique identifier for an item. Available when the `Credit Invoices` feature is enabled. If `item_id` and `item_code` are both present, `item_id` will be used.
    */
  itemId?: string | null;
  /**
    * The unique identifier for the add-on within its plan. If `item_code`/`item_id` is part of the request then `code` must be absent. If `item_code`/`item_id` is not present `code` is required.
    */
  code?: string | null;
  /**
    * Describes your add-on and will appear in subscribers' invoices. If `item_code`/`item_id` is part of the request then `name` must be absent. If `item_code`/`item_id` is not present `name` is required.
    */
  name?: string | null;
  /**
    * Whether the add-on type is fixed, or usage-based.
    */
  addOnType?: string | null;
  /**
    * Type of usage, required if `add_on_type` is `usage`. See our [Guide](https://developers.recurly.com/guides/usage-based-billing-guide.html) for an overview of how to configure usage add-ons. 
    */
  usageType?: string | null;
  /**
    * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0. Required if `add_on_type` is usage, `tier_type` is `flat` and `usage_type` is percentage. Must be omitted otherwise.
    */
  usagePercentage?: number | null;
  /**
    * System-generated unique identifier for a measured unit to be associated with the add-on. Either `measured_unit_id` or `measured_unit_name` are required when `add_on_type` is `usage`. If `measured_unit_id` and `measured_unit_name` are both present, `measured_unit_id` will be used.
    */
  measuredUnitId?: string | null;
  /**
    * Name of a measured unit to be associated with the add-on. Either `measured_unit_id` or `measured_unit_name` are required when `add_on_type` is `usage`. If `measured_unit_id` and `measured_unit_name` are both present, `measured_unit_id` will be used.
    */
  measuredUnitName?: string | null;
  /**
    * Plan ID
    */
  planId?: string | null;
  /**
    * Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code. If `item_code`/`item_id` is part of the request then `accounting_code` must be absent.
    */
  accountingCode?: string | null;
  /**
    * When this add-on is invoiced, the line item will use this revenue schedule. If `item_code`/`item_id` is part of the request then `revenue_schedule_type` must be absent in the request as the value will be set from the item.
    */
  revenueScheduleType?: string | null;
  /**
    * Determines if the quantity field is displayed on the hosted pages for the add-on.
    */
  displayQuantity?: boolean | null;
  /**
    * Default quantity for the hosted pages.
    */
  defaultQuantity?: number | null;
  /**
    * Whether the add-on is optional for the customer to include in their purchase on the hosted payment page. If false, the add-on will be included when a subscription is created through the Recurly UI. However, the add-on will not be included when a subscription is created through the API.
    */
  optional?: boolean | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types. If an `Item` is associated to the `AddOn`, then the `avalara_transaction_type` must be absent.
    */
  avalaraTransactionType?: number | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types. If an `Item` is associated to the `AddOn`, then the `avalara_service_type` must be absent.
    */
  avalaraServiceType?: number | null;
  /**
    * Optional field used by Avalara, Vertex, and Recurly's EU VAT tax feature to determine taxation rules. If you have your own AvaTax or Vertex account configured, use their tax codes to assign specific tax rules. If you are using Recurly's EU VAT feature, you can use values of `unknown`, `physical`, or `digital`. If `item_code`/`item_id` is part of the request then `tax_code` must be absent.
    */
  taxCode?: string | null;
  /**
    * * If `item_code`/`item_id` is part of the request and the item has a default currency then `currencies` is optional. If the item does not have a default currency, then `currencies` is required. If `item_code`/`item_id` is not present `currencies` is required. * If the add-on's `tier_type` is `tiered`, `volume`, or `stairstep`, then `currencies` must be absent. * Must be absent if `add_on_type` is `usage` and `usage_type` is `percentage`. 
    */
  currencies?: AddOnPricing[] | null;
  /**
    * The pricing model for the add-on.  For more information, [click here](https://docs.recurly.com/docs/billing-models#section-quantity-based). See our [Guide](https://developers.recurly.com/guides/item-addon-guide.html) for an overview of how to configure quantity-based pricing models. 
    */
  tierType?: string | null;
  /**
    * If the tier_type is `flat`, then `tiers` must be absent. The `tiers` object must include one to many tiers with `ending_quantity` and `unit_amount` for the desired `currencies`, or alternatively, `usage_percentage` for usage percentage type usage add ons. There must be one tier with an `ending_quantity` of 999999999 which is the default if not provided. 
    */
  tiers?: Tier[] | null;

}

export interface AddOnPricing {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * Allows up to 2 decimal places. Required unless `unit_amount_decimal` is provided.
    */
  unitAmount?: number | null;
  /**
    * Allows up to 9 decimal places. Only supported when `add_on_type` = `usage`. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. 
    */
  unitAmountDecimal?: string | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;

}

export interface Tier {
  /**
    * Ending quantity for the tier.  This represents a unit amount for unit-priced add ons, but for percentage type usage add ons, represents the site default currency in its minimum divisible unit.
    */
  endingQuantity?: number | null;
  /**
    * Decimal usage percentage.
    */
  usagePercentage?: string | null;
  /**
    * Tier pricing
    */
  currencies?: TierPricing[] | null;

}

export interface TierPricing {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * Allows up to 2 decimal places. Required unless `unit_amount_decimal` is provided.
    */
  unitAmount?: number | null;
  /**
    * Allows up to 9 decimal places. Only supported when `add_on_type` = `usage`. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. 
    */
  unitAmountDecimal?: string | null;

}

export interface PlanUpdate {
  /**
    * Plan ID
    */
  id?: string | null;
  /**
    * Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
    */
  code?: string | null;
  /**
    * This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
    */
  name?: string | null;
  /**
    * Optional description, not displayed.
    */
  description?: string | null;
  /**
    * Accounting code for invoice line items for the plan. If no value is provided, it defaults to plan's code.
    */
  accountingCode?: string | null;
  /**
    * Units for the plan's trial period.
    */
  trialUnit?: string | null;
  /**
    * Length of plan's trial period in `trial_units`. `0` means `no trial`.
    */
  trialLength?: number | null;
  /**
    * Allow free trial subscriptions to be created without billing info. Should not be used if billing info is needed for initial invoice due to existing uninvoiced charges or setup fee.
    */
  trialRequiresBillingInfo?: boolean | null;
  /**
    * Automatically terminate plans after a defined number of billing cycles.
    */
  totalBillingCycles?: number | null;
  /**
    * Subscriptions will automatically inherit this value once they are active. If `auto_renew` is `true`, then a subscription will automatically renew its term at renewal. If `auto_renew` is `false`, then a subscription will expire at the end of its term. `auto_renew` can be overridden on the subscription record itself.
    */
  autoRenew?: boolean | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * Setup fee revenue schedule type
    */
  setupFeeRevenueScheduleType?: string | null;
  /**
    * Accounting code for invoice line items for the plan's setup fee. If no value is provided, it defaults to plan's accounting code.
    */
  setupFeeAccountingCode?: string | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the plan is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraTransactionType?: number | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the plan is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
    */
  avalaraServiceType?: number | null;
  /**
    * Optional field used by Avalara, Vertex, and Recurly's EU VAT tax feature to determine taxation rules. If you have your own AvaTax or Vertex account configured, use their tax codes to assign specific tax rules. If you are using Recurly's EU VAT feature, you can use values of `unknown`, `physical`, or `digital`.
    */
  taxCode?: string | null;
  /**
    * `true` exempts tax on the plan, `false` applies tax on the plan.
    */
  taxExempt?: boolean | null;
  /**
    * Pricing
    */
  currencies?: PlanPricing[] | null;
  /**
    * Hosted pages settings
    */
  hostedPages?: PlanHostedPages | null;
  /**
    * Used to determine whether items can be assigned as add-ons to individual subscriptions. If `true`, items can be assigned as add-ons to individual subscription add-ons. If `false`, only plan add-ons can be used. 
    */
  allowAnyItemOnSubscriptions?: boolean | null;
  /**
    * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this plan. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
    */
  dunningCampaignId?: string | null;

}

export interface AddOnUpdate {
  /**
    * Add-on ID
    */
  id?: string | null;
  /**
    * The unique identifier for the add-on within its plan. If an `Item` is associated to the `AddOn` then `code` must be absent.
    */
  code?: string | null;
  /**
    * Describes your add-on and will appear in subscribers' invoices. If an `Item` is associated to the `AddOn` then `name` must be absent.
    */
  name?: string | null;
  /**
    * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0. Required if `add_on_type` is usage, `tier_type` is `flat` and `usage_type` is percentage. Must be omitted otherwise.
    */
  usagePercentage?: number | null;
  /**
    * System-generated unique identifier for a measured unit to be associated with the add-on. Either `measured_unit_id` or `measured_unit_name` are required when `add_on_type` is `usage`. If `measured_unit_id` and `measured_unit_name` are both present, `measured_unit_id` will be used.
    */
  measuredUnitId?: string | null;
  /**
    * Name of a measured unit to be associated with the add-on. Either `measured_unit_id` or `measured_unit_name` are required when `add_on_type` is `usage`. If `measured_unit_id` and `measured_unit_name` are both present, `measured_unit_id` will be used.
    */
  measuredUnitName?: string | null;
  /**
    * Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code. If an `Item` is associated to the `AddOn` then `accounting code` must be absent.
    */
  accountingCode?: string | null;
  /**
    * When this add-on is invoiced, the line item will use this revenue schedule. If `item_code`/`item_id` is part of the request then `revenue_schedule_type` must be absent in the request as the value will be set from the item.
    */
  revenueScheduleType?: string | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types. If an `Item` is associated to the `AddOn`, then the `avalara_transaction_type` must be absent.
    */
  avalaraTransactionType?: number | null;
  /**
    * Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types. If an `Item` is associated to the `AddOn`, then the `avalara_service_type` must be absent.
    */
  avalaraServiceType?: number | null;
  /**
    * Optional field used by Avalara, Vertex, and Recurly's EU VAT tax feature to determine taxation rules. If you have your own AvaTax or Vertex account configured, use their tax codes to assign specific tax rules. If you are using Recurly's EU VAT feature, you can use values of `unknown`, `physical`, or `digital`. If an `Item` is associated to the `AddOn` then `tax code` must be absent.
    */
  taxCode?: string | null;
  /**
    * Determines if the quantity field is displayed on the hosted pages for the add-on.
    */
  displayQuantity?: boolean | null;
  /**
    * Default quantity for the hosted pages.
    */
  defaultQuantity?: number | null;
  /**
    * Whether the add-on is optional for the customer to include in their purchase on the hosted payment page. If false, the add-on will be included when a subscription is created through the Recurly UI. However, the add-on will not be included when a subscription is created through the API.
    */
  optional?: boolean | null;
  /**
    * If the add-on's `tier_type` is `tiered`, `volume`, or `stairstep`, then currencies must be absent. Must also be absent if `add_on_type` is `usage` and `usage_type` is `percentage`. 
    */
  currencies?: AddOnPricing[] | null;
  /**
    * If the tier_type is `flat`, then `tiers` must be absent. The `tiers` object must include one to many tiers with `ending_quantity` and `unit_amount` for the desired `currencies`, or alternatively, `usage_percentage` for usage percentage type usage add ons. There must be one tier with an `ending_quantity` of 999999999 which is the default if not provided. 
    */
  tiers?: Tier[] | null;

}

export interface ShippingMethodCreate {
  /**
    * The internal name used identify the shipping method.
    */
  code?: string | null;
  /**
    * The name of the shipping method displayed to customers.
    */
  name?: string | null;
  /**
    * Accounting code for shipping method.
    */
  accountingCode?: string | null;
  /**
    * Used by Avalara, Vertex, and Recurly’s built-in tax feature. The tax code values are specific to each tax system. If you are using Recurly’s built-in taxes the values are:  - `FR` – Common Carrier FOB Destination - `FR022000` – Common Carrier FOB Origin - `FR020400` – Non Common Carrier FOB Destination - `FR020500` – Non Common Carrier FOB Origin - `FR010100` – Delivery by Company Vehicle Before Passage of Title - `FR010200` – Delivery by Company Vehicle After Passage of Title - `NT` – Non-Taxable 
    */
  taxCode?: string | null;

}

export interface ShippingMethodUpdate {
  /**
    * The internal name used identify the shipping method.
    */
  code?: string | null;
  /**
    * The name of the shipping method displayed to customers.
    */
  name?: string | null;
  /**
    * Accounting code for shipping method.
    */
  accountingCode?: string | null;
  /**
    * Used by Avalara, Vertex, and Recurly’s built-in tax feature. The tax code values are specific to each tax system. If you are using Recurly’s built-in taxes the values are:  - `FR` – Common Carrier FOB Destination - `FR022000` – Common Carrier FOB Origin - `FR020400` – Non Common Carrier FOB Destination - `FR020500` – Non Common Carrier FOB Origin - `FR010100` – Delivery by Company Vehicle Before Passage of Title - `FR010200` – Delivery by Company Vehicle After Passage of Title - `NT` – Non-Taxable 
    */
  taxCode?: string | null;

}

export interface SubscriptionCreate {
  /**
    * You must provide either a `plan_code` or `plan_id`. If both are provided the `plan_id` will be used.
    */
  planCode?: string | null;
  /**
    * You must provide either a `plan_code` or `plan_id`. If both are provided the `plan_id` will be used.
    */
  planId?: string | null;
  account?: AccountCreate | null;
  /**
    * The `billing_info_id` is the value that represents a specific billing info for an end customer. When `billing_info_id` is used to assign billing info to the subscription, all future billing events for the subscription will bill to the specified billing info. `billing_info_id` can ONLY be used for sites utilizing the Wallet feature.
    */
  billingInfoId?: string | null;
  /**
    * Create a shipping address on the account and assign it to the subscription.
    */
  shipping?: SubscriptionShippingCreate | null;
  /**
    * Collection method
    */
  collectionMethod?: string | null;
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  /**
    * Override the unit amount of the subscription plan by setting this value. If not provided, the subscription will inherit the price from the subscription plan for the provided currency.
    */
  unitAmount?: number | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;
  /**
    * Optionally override the default quantity of 1.
    */
  quantity?: number | null;
  /**
    * Add-ons
    */
  addOns?: SubscriptionAddOnCreate[] | null;
  /**
    * A list of coupon_codes to be redeemed on the subscription or account during the purchase.
    */
  couponCodes?: string[] | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;
  /**
    * If set, overrides the default trial behavior for the subscription. When the current date time or a past date time is provided the subscription will begin with no trial phase (overriding any plan default trial). When a future date time is provided the subscription will begin with a trial phase ending at the specified date time.
    */
  trialEndsAt?: Date | null;
  /**
    * If set, the subscription will begin in the future on this date. The subscription will apply the setup fee and trial period, unless the plan has no trial.
    */
  startsAt?: Date | null;
  /**
    * If present, this sets the date the subscription's next billing period will start (`current_period_ends_at`). This can be used to align the subscription’s billing to a specific day of the month. The initial invoice will be prorated for the period between the subscription's activation date and the billing period end date. Subsequent periods will be based off the plan interval. For a subscription with a trial period, this will change when the trial expires.
    */
  nextBillDate?: Date | null;
  /**
    * The number of cycles/billing periods in a term. When `remaining_billing_cycles=0`, if `auto_renew=true` the subscription will renew and a new term will begin, otherwise the subscription will expire.
    */
  totalBillingCycles?: number | null;
  /**
    * If `auto_renew=true`, when a term completes, `total_billing_cycles` takes this value as the length of subsequent terms. Defaults to the plan's `total_billing_cycles`.
    */
  renewalBillingCycles?: number | null;
  /**
    * Whether the subscription renews at the end of its term.
    */
  autoRenew?: boolean | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * This will default to the Terms and Conditions text specified on the Invoice Settings page in your Recurly admin. Specify custom notes to add or override Terms and Conditions. Custom notes will stay with a subscription on all renewals.
    */
  termsAndConditions?: string | null;
  /**
    * This will default to the Customer Notes text specified on the Invoice Settings. Specify custom notes to add or override Customer Notes. Custom notes will stay with a subscription on all renewals.
    */
  customerNotes?: string | null;
  /**
    * If there are pending credits on the account that will be invoiced during the subscription creation, these will be used as the Customer Notes on the credit invoice.
    */
  creditCustomerNotes?: string | null;
  /**
    * For manual invoicing, this identifies the PO number associated with the subscription.
    */
  poNumber?: string | null;
  /**
    * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
    */
  netTerms?: number | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;

}

export interface SubscriptionShippingCreate {
  address?: ShippingAddressCreate | null;
  /**
    * Assign a shipping address from the account's existing shipping addresses. If `address_id` and `address` are both present, `address` will be used.
    */
  addressId?: string | null;
  /**
    * The id of the shipping method used to deliver the subscription. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodId?: string | null;
  /**
    * The code of the shipping method used to deliver the subscription. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodCode?: string | null;
  /**
    * Assigns the subscription's shipping cost. If this is greater than zero then a `method_id` or `method_code` is required.
    */
  amount?: number | null;

}

export interface SubscriptionAddOnCreate {
  /**
    * If `add_on_source` is set to `plan_add_on` or left blank, then plan's add-on `code` should be used. If `add_on_source` is set to `item`, then the `code` from the associated item should be used. 
    */
  code?: string | null;
  /**
    * Used to determine where the associated add-on data is pulled from. If this value is set to `plan_add_on` or left blank, then add-on data will be pulled from the plan's add-ons. If the associated `plan` has `allow_any_item_on_subscriptions` set to `true` and this field is set to `item`, then the associated add-on data will be pulled from the site's item catalog. 
    */
  addOnSource?: string | null;
  /**
    * Quantity
    */
  quantity?: number | null;
  /**
    * Allows up to 2 decimal places. Optionally, override the add-on's default unit amount. If the plan add-on's `tier_type` is `tiered`, `volume`, or `stairstep`, then `unit_amount` cannot be provided. 
    */
  unitAmount?: number | null;
  /**
    * Allows up to 9 decimal places.  Optionally, override the add-on's default unit amount. If the plan add-on's `tier_type` is `tiered`, `volume`, or `stairstep`, then `unit_amount_decimal` cannot be provided. Only supported when the plan add-on's `add_on_type` = `usage`. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. 
    */
  unitAmountDecimal?: string | null;
  /**
    * If the plan add-on's `tier_type` is `flat`, then `tiers` must be absent. The `tiers` object must include one to many tiers with `ending_quantity` and `unit_amount`. There must be one tier with an `ending_quantity` of 999999999 which is the default if not provided. See our [Guide](https://developers.recurly.com/guides/item-addon-guide.html) for an overview of how to configure quantity-based pricing models. 
    */
  tiers?: SubscriptionAddOnTier[] | null;
  /**
    * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0. Required if `add_on_type` is usage and `usage_type` is percentage. Must be omitted otherwise. `usage_percentage` does not support tiers. See our [Guide](https://developers.recurly.com/guides/usage-based-billing-guide.html) for an overview of how to configure usage add-ons.
    */
  usagePercentage?: number | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;

}

export interface SubscriptionAddOnTier {
  /**
    * Ending quantity
    */
  endingQuantity?: number | null;
  /**
    * Allows up to 2 decimal places. Optionally, override the tiers' default unit amount. If add-on's `add_on_type` is `usage` and `usage_type` is `percentage`, cannot be provided.
    */
  unitAmount?: number | null;
  /**
    * Allows up to 9 decimal places.  Optionally, override tiers' default unit amount. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. If add-on's `add_on_type` is `usage` and `usage_type` is `percentage`, cannot be provided. 
    */
  unitAmountDecimal?: string | null;
  /**
    * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places represented as a string. A value between 0.0 and 100.0. Optionally, override tiers' default usage percentage. Required if add-on's `add_on_type` is `usage` and `usage_type` is `percentage`. Must be omitted otherwise.
    */
  usagePercentage?: string | null;

}

export interface SubscriptionUpdate {
  /**
    * Change collection method
    */
  collectionMethod?: string | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;
  /**
    * The remaining billing cycles in the current term.
    */
  remainingBillingCycles?: number | null;
  /**
    * If `auto_renew=true`, when a term completes, `total_billing_cycles` takes this value as the length of subsequent terms. Defaults to the plan's `total_billing_cycles`.
    */
  renewalBillingCycles?: number | null;
  /**
    * Whether the subscription renews at the end of its term.
    */
  autoRenew?: boolean | null;
  /**
    * If present, this sets the date the subscription's next billing period will start (`current_period_ends_at`). This can be used to align the subscription’s billing to a specific day of the month. For a subscription in a trial period, this will change when the trial expires. This parameter is useful for postponement of a subscription to change its billing date without proration.
    */
  nextBillDate?: Date | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * Specify custom notes to add or override Terms and Conditions. Custom notes will stay with a subscription on all renewals.
    */
  termsAndConditions?: string | null;
  /**
    * Specify custom notes to add or override Customer Notes. Custom notes will stay with a subscription on all renewals.
    */
  customerNotes?: string | null;
  /**
    * For manual invoicing, this identifies the PO number associated with the subscription.
    */
  poNumber?: string | null;
  /**
    * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
    */
  netTerms?: number | null;
  /**
    * If present, this subscription's transactions will use the payment gateway with this code.
    */
  gatewayCode?: string | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;
  /**
    * Subscription shipping details
    */
  shipping?: SubscriptionShippingUpdate | null;
  /**
    * The `billing_info_id` is the value that represents a specific billing info for an end customer. When `billing_info_id` is used to assign billing info to the subscription, all future billing events for the subscription will bill to the specified billing info. `billing_info_id` can ONLY be used for sites utilizing the Wallet feature.
    */
  billingInfoId?: string | null;

}

export interface SubscriptionShippingUpdate {
  /**
    * Object type
    */
  object?: string | null;
  address?: ShippingAddressCreate | null;
  /**
    * Assign a shipping address from the account's existing shipping addresses.
    */
  addressId?: string | null;

}

export interface SubscriptionCancel {
  /**
    * The timeframe parameter controls when the expiration takes place. The `bill_date` timeframe causes the subscription to expire when the subscription is scheduled to bill next. The `term_end` timeframe causes the subscription to continue to bill until the end of the subscription term, then expire.
    */
  timeframe?: string | null;

}

export interface SubscriptionPause {
  /**
    * Number of billing cycles to pause the subscriptions. A value of 0 will cancel any pending pauses on the subscription.
    */
  remainingPauseCycles?: number | null;

}

export interface SubscriptionChangeCreate {
  /**
    * The timeframe parameter controls when the upgrade or downgrade takes place. The subscription change can occur now, when the subscription is next billed, or when the subscription term ends. Generally, if you're performing an upgrade, you will want the change to occur immediately (now). If you're performing a downgrade, you should set the timeframe to `term_end` or `bill_date` so the change takes effect at a scheduled billing date. The `renewal` timeframe option is accepted as an alias for `term_end`.
    */
  timeframe?: string | null;
  /**
    * If you want to change to a new plan, you can provide the plan's code or id. If both are provided the `plan_id` will be used.
    */
  planId?: string | null;
  /**
    * If you want to change to a new plan, you can provide the plan's code or id. If both are provided the `plan_id` will be used.
    */
  planCode?: string | null;
  /**
    * Optionally, sets custom pricing for the subscription, overriding the plan's default unit amount. The subscription's current currency will be used.
    */
  unitAmount?: number | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;
  /**
    * Optionally override the default quantity of 1.
    */
  quantity?: number | null;
  /**
    * Shipping addresses are tied to a customer's account. Each account can have up to 20 different shipping addresses, and if you have enabled multiple subscriptions per account, you can associate different shipping addresses to each subscription.
    */
  shipping?: SubscriptionChangeShippingCreate | null;
  /**
    * A list of coupon_codes to be redeemed on the subscription during the change. Only allowed if timeframe is now and you change something about the subscription that creates an invoice.
    */
  couponCodes?: string[] | null;
  /**
    * If you provide a value for this field it will replace any existing add-ons. So, when adding or modifying an add-on, you need to include the existing subscription add-ons. Unchanged add-ons can be included just using the subscription add-on''s ID: `{"id": "abc123"}`. If this value is omitted your existing add-ons will be unaffected. To remove all existing add-ons, this value should be an empty array.'  If a subscription add-on's `code` is supplied without the `id`, `{"code": "def456"}`, the subscription add-on attributes will be set to the current values of the plan add-on unless provided in the request.  - If an `id` is passed, any attributes not passed in will pull from the   existing subscription add-on - If a `code` is passed, any attributes not passed in will pull from the   current values of the plan add-on - Attributes passed in as part of the request will override either of the   above scenarios 
    */
  addOns?: SubscriptionAddOnUpdate[] | null;
  /**
    * Collection method
    */
  collectionMethod?: string | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;
  /**
    * For manual invoicing, this identifies the PO number associated with the subscription.
    */
  poNumber?: string | null;
  /**
    * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
    */
  netTerms?: number | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;
  billingInfo?: SubscriptionChangeBillingInfoCreate | null;

}

export interface SubscriptionChangeShippingCreate {
  /**
    * The id of the shipping method used to deliver the subscription. To remove shipping set this to `null` and the `amount=0`. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodId?: string | null;
  /**
    * The code of the shipping method used to deliver the subscription. To remove shipping set this to `null` and the `amount=0`. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodCode?: string | null;
  /**
    * Assigns the subscription's shipping cost. If this is greater than zero then a `method_id` or `method_code` is required.
    */
  amount?: number | null;
  /**
    * Assign a shipping address from the account's existing shipping addresses. If this and address are both present, address will take precedence.
    */
  addressId?: string | null;
  address?: ShippingAddressCreate | null;

}

export interface SubscriptionAddOnUpdate {
  /**
    * When an id is provided, the existing subscription add-on attributes will persist unless overridden in the request. 
    */
  id?: string | null;
  /**
    * If a code is provided without an id, the subscription add-on attributes will be set to the current value for those attributes on the plan add-on unless provided in the request. If `add_on_source` is set to `plan_add_on` or left blank, then plan's add-on `code` should be used. If `add_on_source` is set to `item`, then the `code` from the associated item should be used. 
    */
  code?: string | null;
  /**
    * Used to determine where the associated add-on data is pulled from. If this value is set to `plan_add_on` or left blank, then add-on data will be pulled from the plan's add-ons. If the associated `plan` has `allow_any_item_on_subscriptions` set to `true` and this field is set to `item`, then the associated add-on data will be pulled from the site's item catalog. 
    */
  addOnSource?: string | null;
  /**
    * Quantity
    */
  quantity?: number | null;
  /**
    * Allows up to 2 decimal places. Optionally, override the add-on's default unit amount. If the plan add-on's `tier_type` is `tiered`, `volume`, or `stairstep`, then `unit_amount` cannot be provided. 
    */
  unitAmount?: number | null;
  /**
    * Allows up to 9 decimal places. Optionally, override the add-on's default unit amount. If the plan add-on's `tier_type` is `tiered`, `volume`, or `stairstep`, then `unit_amount_decimal` cannot be provided. Only supported when the plan add-on's `add_on_type` = `usage`. If `unit_amount_decimal` is provided, `unit_amount` cannot be provided. 
    */
  unitAmountDecimal?: string | null;
  /**
    * If the plan add-on's `tier_type` is `flat`, then `tiers` must be absent. The `tiers` object must include one to many tiers with `ending_quantity` and `unit_amount`. There must be one tier with an `ending_quantity` of 999999999 which is the default if not provided. 
    */
  tiers?: SubscriptionAddOnTier[] | null;
  /**
    * The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0. Required if add_on_type is usage and usage_type is percentage.
    */
  usagePercentage?: number | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;

}

export interface SubscriptionChangeBillingInfoCreate {
  /**
    * A token generated by Recurly.js after completing a 3-D Secure device fingerprinting or authentication challenge.
    */
  threeDSecureActionResultTokenId?: string | null;

}

export interface UsageCreate {
  /**
    * Custom field for recording the id in your own system associated with the usage, so you can provide auditable usage displays to your customers using a GET on this endpoint.
    */
  merchantTag?: string | null;
  /**
    * The amount of usage. Can be positive, negative, or 0. No decimals allowed, we will strip them. If the usage-based add-on is billed with a percentage, your usage will be a monetary amount you will want to format in cents. (e.g., $5.00 is "500").
    */
  amount?: number | null;
  /**
    * When the usage was recorded in your system.
    */
  recordingTimestamp?: Date | null;
  /**
    * When the usage actually happened. This will define the line item dates this usage is billed under and is important for revenue recognition.
    */
  usageTimestamp?: Date | null;

}

export interface PurchaseCreate {
  /**
    * 3-letter ISO 4217 currency code.
    */
  currency?: string | null;
  account?: AccountPurchase | null;
  /**
    * The `billing_info_id` is the value that represents a specific billing info for an end customer. When `billing_info_id` is used to assign billing info to the subscription, all future billing events for the subscription will bill to the specified billing info. `billing_info_id` can ONLY be used for sites utilizing the Wallet feature.
    */
  billingInfoId?: string | null;
  /**
    * Must be set to manual in order to preview a purchase for an Account that does not have payment information associated with the Billing Info.
    */
  collectionMethod?: string | null;
  /**
    * For manual invoicing, this identifies the PO number associated with the subscription.
    */
  poNumber?: string | null;
  /**
    * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
    */
  netTerms?: number | null;
  /**
    * Terms and conditions to be put on the purchase invoice.
    */
  termsAndConditions?: string | null;
  /**
    * Customer notes
    */
  customerNotes?: string | null;
  /**
    * VAT reverse charge notes for cross border European tax settlement.
    */
  vatReverseChargeNotes?: string | null;
  /**
    * Notes to be put on the credit invoice resulting from credits in the purchase, if any.
    */
  creditCustomerNotes?: string | null;
  /**
    * The default payment gateway identifier to be used for the purchase transaction.  This will also be applied as the default for any subscriptions included in the purchase request.
    */
  gatewayCode?: string | null;
  shipping?: ShippingPurchase | null;
  /**
    * A list of one time charges or credits to be created with the purchase.
    */
  lineItems?: LineItemCreate[] | null;
  /**
    * A list of subscriptions to be created with the purchase.
    */
  subscriptions?: SubscriptionPurchase[] | null;
  /**
    * A list of coupon_codes to be redeemed on the subscription or account during the purchase.
    */
  couponCodes?: string[] | null;
  /**
    * A gift card redemption code to be redeemed on the purchase invoice.
    */
  giftCardRedemptionCode?: string | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;

}

export interface AccountPurchase {
  /**
    * Optional, but if present allows an existing account to be used and updated as part of the purchase.
    */
  id?: string | null;
  /**
    * The unique identifier of the account. This cannot be changed once the account is created.
    */
  code?: string | null;
  acquisition?: AccountAcquisitionUpdate | null;
  /**
    * A secondary value for the account.
    */
  username?: string | null;
  /**
    * The email address used for communicating with this customer. The customer will also use this email address to log into your hosted account management pages. This value does not need to be unique.
    */
  email?: string | null;
  /**
    * Used to determine the language and locale of emails sent on behalf of the merchant to the customer. The list of locales is restricted to those the merchant has enabled on the site.
    */
  preferredLocale?: string | null;
  /**
    * Additional email address that should receive account correspondence. These should be separated only by commas. These CC emails will receive all emails that the `email` field also receives.
    */
  ccEmails?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  /**
    * The VAT number of the account (to avoid having the VAT applied). This is only used for manually collected invoices.
    */
  vatNumber?: string | null;
  /**
    * The tax status of the account. `true` exempts tax on the account, `false` applies tax on the account.
    */
  taxExempt?: boolean | null;
  /**
    * The tax exemption certificate number for the account. If the merchant has an integration for the Vertex tax provider, this optional value will be sent in any tax calculation requests for the account.
    */
  exemptionCertificate?: string | null;
  /**
    * The account code of the parent account to be associated with this account. Passing an empty value removes any existing parent association from this account. If both `parent_account_code` and `parent_account_id` are passed, the non-blank value in `parent_account_id` will be used. Only one level of parent child relationship is allowed. You cannot assign a parent account that itself has a parent account.
    */
  parentAccountCode?: string | null;
  /**
    * The UUID of the parent account to be associated with this account. Passing an empty value removes any existing parent association from this account. If both `parent_account_code` and `parent_account_id` are passed, the non-blank value in `parent_account_id` will be used. Only one level of parent child relationship is allowed. You cannot assign a parent account that itself has a parent account.
    */
  parentAccountId?: string | null;
  /**
    * An enumerable describing the billing behavior of the account, specifically whether the account is self-paying or will rely on the parent account to pay.
    */
  billTo?: string | null;
  /**
    * An optional type designation for the payment gateway transaction created by this request. Supports 'moto' value, which is the acronym for mail order and telephone transactions.
    */
  transactionType?: string | null;
  /**
    * Unique ID to identify a dunning campaign. Available when the Dunning Campaigns feature is enabled. Used to specify if a non-default dunning campaign should be assigned to this account. For sites without multiple dunning campaigns enabled, the default dunning campaign will always be used.
    */
  dunningCampaignId?: string | null;
  /**
    * Unique ID to identify an invoice template.  Available when the Invoice Customization feature is enabled.  Used to specify which invoice template, if any, should be used to generate invoices for the account.
    */
  invoiceTemplateId?: string | null;
  address?: Address | null;
  billingInfo?: BillingInfoCreate | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;

}

export interface ShippingPurchase {
  /**
    * Assign a shipping address from the account's existing shipping addresses. If this and `address` are both present, `address` will take precedence.
    */
  addressId?: string | null;
  address?: ShippingAddressCreate | null;
  /**
    * A list of shipping fees to be created as charges with the purchase.
    */
  fees?: ShippingFeeCreate[] | null;

}

export interface ShippingFeeCreate {
  /**
    * The id of the shipping method used to deliver the purchase. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodId?: string | null;
  /**
    * The code of the shipping method used to deliver the purchase. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodCode?: string | null;
  /**
    * This is priced in the purchase's currency.
    */
  amount?: number | null;

}

export interface SubscriptionPurchase {
  /**
    * Plan code
    */
  planCode?: string | null;
  /**
    * Plan ID
    */
  planId?: string | null;
  /**
    * Override the unit amount of the subscription plan by setting this value. If not provided, the subscription will inherit the price from the subscription plan for the provided currency.
    */
  unitAmount?: number | null;
  /**
    * Determines whether or not tax is included in the unit amount. The Tax Inclusive Pricing feature (separate from the Mixed Tax Pricing feature) must be enabled to use this flag.
    */
  taxInclusive?: boolean | null;
  /**
    * Optionally override the default quantity of 1.
    */
  quantity?: number | null;
  /**
    * Add-ons
    */
  addOns?: SubscriptionAddOnCreate[] | null;
  /**
    * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
    */
  customFields?: CustomField[] | null;
  /**
    * Create a shipping address on the account and assign it to the subscription.
    */
  shipping?: SubscriptionShippingPurchase | null;
  /**
    * If set, overrides the default trial behavior for the subscription. When the current date time or a past date time is provided the subscription will begin with no trial phase (overriding any plan default trial). When a future date time is provided the subscription will begin with a trial phase ending at the specified date time.
    */
  trialEndsAt?: Date | null;
  /**
    * If set, the subscription will begin in the future on this date. The subscription will apply the setup fee and trial period, unless the plan has no trial.
    */
  startsAt?: Date | null;
  /**
    * If present, this sets the date the subscription's next billing period will start (`current_period_ends_at`). This can be used to align the subscription’s billing to a specific day of the month. The initial invoice will be prorated for the period between the subscription's activation date and the billing period end date. Subsequent periods will be based off the plan interval. For a subscription with a trial period, this will change when the trial expires.
    */
  nextBillDate?: Date | null;
  /**
    * The number of cycles/billing periods in a term. When `remaining_billing_cycles=0`, if `auto_renew=true` the subscription will renew and a new term will begin, otherwise the subscription will expire.
    */
  totalBillingCycles?: number | null;
  /**
    * If `auto_renew=true`, when a term completes, `total_billing_cycles` takes this value as the length of subsequent terms. Defaults to the plan's `total_billing_cycles`.
    */
  renewalBillingCycles?: number | null;
  /**
    * Whether the subscription renews at the end of its term.
    */
  autoRenew?: boolean | null;
  /**
    * Revenue schedule type
    */
  revenueScheduleType?: string | null;

}

export interface SubscriptionShippingPurchase {
  /**
    * The id of the shipping method used to deliver the subscription. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodId?: string | null;
  /**
    * The code of the shipping method used to deliver the subscription. If `method_id` and `method_code` are both present, `method_id` will be used.
    */
  methodCode?: string | null;
  /**
    * Assigns the subscription's shipping cost. If this is greater than zero then a `method_id` or `method_code` is required.
    */
  amount?: number | null;

}

export interface DunningCampaignsBulkUpdate {
  /**
    * List of `plan_codes` associated with the Plans for which the dunning campaign should be updated. Required unless `plan_ids` is present.
    */
  planCodes?: string[] | null;
  /**
    * List of `plan_ids` associated with the Plans for which the dunning campaign should be updated. Required unless `plan_codes` is present.
    */
  planIds?: string[] | null;

}


export declare class Client {
  constructor(apiKey: string);
  apiVersion(): string;
  /**
   * List sites
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_sites
   *
   * @example
   * const sites = client.listSites({ params: { limit: 200 } })
   * 
   * for await (const site of sites.each()) {
   *   console.log(site.subdomain)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<Site>} A list of sites.
   */
  listSites(options?: object): Pager<Site>;
  /**
   * Fetch a site
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_site
   *
   * @example
   * try {
   *   const site = await client.getSite(siteId)
   *   console.log('Fetched site: ', site)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} siteId - Site ID or subdomain. For ID no prefix is used e.g. `e28zov4fw0v2`. For subdomain use prefix `subdomain-`, e.g. `subdomain-recurly`.
   * @return {Promise<Site>} A site.
   */
  getSite(siteId: string): Promise<Site>;
  /**
   * List a site's accounts
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_accounts
   *
   * @example
   * const accounts = client.listAccounts({ params: { limit: 200 } })
   * 
   * for await (const account of accounts.each()) {
   *   console.log(account.code)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param {boolean} options.params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *   
   * @param {string} options.params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of the site's accounts.
   */
  listAccounts(options?: object): Pager<Account>;
  /**
   * Create an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_account
   *
   * @example
   * try {
   *   const accountCreate = {
   *     code: accountCode,
   *     firstName: 'Benjamin',
   *     lastName: 'Du Monde',
   *     address: {
   *       street1: '900 Camp St',
   *       city: 'New Orleans',
   *       region: 'LA',
   *       postalCode: '70115',
   *       country: 'US'
   *     }
   *   }
   *   const account = await client.createAccount(accountCreate)
   *   console.log('Created Account: ', account.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {AccountCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountCreate}
   * @return {Promise<Account>} An account.
   */
  createAccount(body: AccountCreate): Promise<Account>;
  /**
   * Fetch an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_account
   *
   * @example
   * try {
   *   const account = await client.getAccount(accountId)
   *   console.log('Fetched account: ', account.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  getAccount(accountId: string): Promise<Account>;
  /**
   * Update an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_account
   *
   * @example
   * try {
   *   const accountUpdate = {
   *     firstName: 'Aaron',
   *     lastName: 'Du Monde'
   *   }
   *   const account = await client.updateAccount(accountId, accountUpdate)
   *   console.log('Updated account: ', account)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {AccountUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountUpdate}
   * @return {Promise<Account>} An account.
   */
  updateAccount(accountId: string, body: AccountUpdate): Promise<Account>;
  /**
   * Deactivate an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/deactivate_account
   *
   * @example
   * try {
   *   const account = await client.deactivateAccount(accountId)
   *   console.log('Deleted account: ', account.code)
   * } catch (err) {
   *   if (err && err.type === 'not-found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  deactivateAccount(accountId: string): Promise<Account>;
  /**
   * Fetch an account's acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_account_acquisition
   *
   * @example
   * try {
   *   const acquisition = await client.getAccountAcquisition(accountId)
   *   console.log('Fetched account acquisition: ', acquisition.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<AccountAcquisition>} An account's acquisition data.
   */
  getAccountAcquisition(accountId: string): Promise<AccountAcquisition>;
  /**
   * Update an account's acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_account_acquisition
   *
   * @example
   * try {
   *   const acquisitionUpdate = {
   *     campaign: "big-event-campaign",
   *     channel: "social_media",
   *     subchannel: "twitter"
   *   }
   *   const accountAcquisition = await client.updateAccountAcquisition(accountId, acquisitionUpdate)
   *   console.log('Edited Account Acquisition: ', accountAcquisition)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {AccountAcquisitionUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountAcquisitionUpdate}
   * @return {Promise<AccountAcquisition>} An account's updated acquisition data.
   */
  updateAccountAcquisition(accountId: string, body: AccountAcquisitionUpdate): Promise<AccountAcquisition>;
  /**
   * Remove an account's acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_account_acquisition
   *
   * @example
   * try {
   *   await client.removeAccountAcquisition(accountId)
   *   console.log('Removed account acquisition from account: ', accountId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Empty>} Acquisition data was succesfully deleted.
   */
  removeAccountAcquisition(accountId: string): Promise<Empty>;
  /**
   * Reactivate an inactive account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/reactivate_account
   *
   * @example
   * try {
   *   const account = await client.reactivateAccount(accountId)
   *   console.log('Reactivated account: ', account.code)
   * } catch (err) {
   *   if (err && err.type === 'not_found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  reactivateAccount(accountId: string): Promise<Account>;
  /**
   * Fetch an account's balance and past due status
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_account_balance
   *
   * @example
   * try {
   *   const balance = await client.getAccountBalance(accountId)
   *   console.log('Fetched account balance: ', balance.balances)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<AccountBalance>} An account's balance.
   */
  getAccountBalance(accountId: string): Promise<AccountBalance>;
  /**
   * Fetch an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_billing_info
   *
   * @example
   * try {
   *   const billingInfo = await client.getBillingInfo(accountId)
   *   console.log('Fetched Billing Info: ', billingInfo.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<BillingInfo>} An account's billing information.
   */
  getBillingInfo(accountId: string): Promise<BillingInfo>;
  /**
   * Set an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_billing_info
   *
   * @example
   * try {
   *   const billingInfoUpdate = {
   *     firstName: 'Aaron',
   *     lastName: 'Du Monde',
   *   }
   *   const billingInfo = await client.updateBillingInfo(accountId, billingInfoUpdate)
   *   console.log('Updated billing info: ', billingInfo.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  updateBillingInfo(accountId: string, body: BillingInfoCreate): Promise<BillingInfo>;
  /**
   * Remove an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_billing_info
   *
   * @example
   * try {
   *   client.removeBillingInfo(accountId)
   *   console.log('Removed billing info from account: ', accountId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Empty>} Billing information deleted
   */
  removeBillingInfo(accountId: string): Promise<Empty>;
  /**
   * Verify an account's credit card billing information
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/verify_billing_info
   *
   * @example
   * try {
   *   const transaction = await client.verifyBillingInfo(accountId)
   *   console.log('Fetched Transaction: ', transaction.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {BillingInfoVerify} options.params.body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoVerify}
   * @return {Promise<Transaction>} Transaction information from verify.
   */
  verifyBillingInfo(accountId: string, options?: object): Promise<Transaction>;
  /**
   * Get the list of billing information associated with an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_billing_infos
   *
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<BillingInfo>} A list of the the billing information for an account's
   */
  listBillingInfos(accountId: string, options?: object): Pager<BillingInfo>;
  /**
   * Add new billing information on an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_billing_info
   *
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  createBillingInfo(accountId: string, body: BillingInfoCreate): Promise<BillingInfo>;
  /**
   * Fetch a billing info
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_a_billing_info
   *
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} billingInfoId - Billing Info ID. Can ONLY be used for sites utilizing the Wallet feature.
   * @return {Promise<BillingInfo>} A billing info.
   */
  getABillingInfo(accountId: string, billingInfoId: string): Promise<BillingInfo>;
  /**
   * Update an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_a_billing_info
   *
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} billingInfoId - Billing Info ID. Can ONLY be used for sites utilizing the Wallet feature.
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  updateABillingInfo(accountId: string, billingInfoId: string, body: BillingInfoCreate): Promise<BillingInfo>;
  /**
   * Remove an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_a_billing_info
   *
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} billingInfoId - Billing Info ID. Can ONLY be used for sites utilizing the Wallet feature.
   * @return {Promise<Empty>} Billing information deleted
   */
  removeABillingInfo(accountId: string, billingInfoId: string): Promise<Empty>;
  /**
   * Show the coupon redemptions for an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_coupon_redemptions
   *
   * @example
   * const redemptions = client.listAccountCouponRedemptions(accountId, { params: { limit: 200 } })
   * 
   * for await (const redemption of redemptions.each()) {
   *   console.log(redemption.id)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on an account.
   */
  listAccountCouponRedemptions(accountId: string, options?: object): Pager<CouponRedemption>;
  /**
   * Show the coupon redemptions that are active on an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_active_coupon_redemptions
   *
   * @example
   * const redemptions = await client.listActiveCouponRedemptions(accountId, { params: { limit: 200 } })
   * 
   * for await (const redemption of redemptions.each()) {
   *   console.log('Fetched coupon redemption: ', redemption.id)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Pager<CouponRedemption>} Active coupon redemptions on an account.
   */
  listActiveCouponRedemptions(accountId: string, options?: object): Pager<CouponRedemption>;
  /**
   * Generate an active coupon redemption on an account or subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_coupon_redemption
   *
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {CouponRedemptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponRedemptionCreate}
   * @return {Promise<CouponRedemption>} Returns the new coupon redemption.
   */
  createCouponRedemption(accountId: string, body: CouponRedemptionCreate): Promise<CouponRedemption>;
  /**
   * Delete the active coupon redemption from an account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_coupon_redemption
   *
   * @example
   * try {
   *   const redemption = await client.removeCouponRedemption(accountId)
   *   console.log('Removed coupon redemption: ', redemption.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<CouponRedemption>} Coupon redemption deleted.
   */
  removeCouponRedemption(accountId: string): Promise<CouponRedemption>;
  /**
   * List an account's credit payments
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_credit_payments
   *
   * @example
   * const payments = client.listAccountCreditPayments(accountId, { params: { limit: 200 } })
   * 
   * for await (const payment of payments.each()) {
   *   console.log(payment.uuid)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CreditPayment>} A list of the account's credit payments.
   */
  listAccountCreditPayments(accountId: string, options?: object): Pager<CreditPayment>;
  /**
   * List an account's invoices
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_invoices
   *
   * @example
   * const invoices = client.listAccountInvoices(accountId, { params: { limit: 200 } })
   * 
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *   
   * @return {Pager<Invoice>} A list of the account's invoices.
   */
  listAccountInvoices(accountId: string, options?: object): Pager<Invoice>;
  /**
   * Create an invoice for pending line items
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_invoice
   *
   * @example
   * try {
   *   let invoiceCreate = {
   *     currency: 'USD',
   *     collectionMethod: 'automatic'
   *   }
   *   let invoiceCollection = await client.createInvoice(accountId, invoiceCreate)
   *   console.log('Created Invoice')
   *   console.log('Charge Invoice: ', invoiceCollection.chargeInvoice)
   *   console.log('Credit Invoices: ', invoiceCollection.creditInvoices)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the new invoices.
   */
  createInvoice(accountId: string, body: InvoiceCreate): Promise<InvoiceCollection>;
  /**
   * Preview new invoice for pending line items
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/preview_invoice
   *
   * @example
   * try {
   *   const collection = await client.previewInvoice(accountId, {
   *     currency: "USD",
   *     collectionMethod: "automatic"
   *   })
   *   console.log(`Previewed invoice due at ${collection.chargeInvoice.dueAt}`)
   *   console.log(collection.chargeInvoice)
   *   console.log(collection.creditInvoices)
   * } catch(err) {
   * 
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the invoice previews.
   */
  previewInvoice(accountId: string, body: InvoiceCreate): Promise<InvoiceCollection>;
  /**
   * List an account's line items
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_line_items
   *
   * @example
   * const lineItems = client.listAccountLineItems(accountId, { params: { limit: 200 } })
   * 
   * for await (const lineItem of lineItems.each()) {
   *   console.log(lineItem.id)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the account's line items.
   */
  listAccountLineItems(accountId: string, options?: object): Pager<LineItem>;
  /**
   * Create a new line item for the account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_line_item
   *
   * @example
   * try {
   *   let lineItemReq = {
   *     currency: 'USD',
   *     unitAmount: 1000,
   *     type: 'charge' // choose "credit" for a credit
   *   }
   *   let lineItem = await client.createLineItem(accountId, lineItemReq)
   *   console.log('Created Line Item: ', lineItem.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {LineItemCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {LineItemCreate}
   * @return {Promise<LineItem>} Returns the new line item.
   */
  createLineItem(accountId: string, body: LineItemCreate): Promise<LineItem>;
  /**
   * Fetch a list of an account's notes
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_notes
   *
   * @example
   * const notes = client.listAccountNotes(accountId, { params: { limit: 200 } })
   * 
   * for await (const note of notes.each()) {
   *   console.log(note.message)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @return {Pager<AccountNote>} A list of an account's notes.
   */
  listAccountNotes(accountId: string, options?: object): Pager<AccountNote>;
  /**
   * Fetch an account note
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_account_note
   *
   * @example
   * try {
   *   console.log(accountId)
   *   const note = await client.getAccountNote(accountId, accountNoteId)
   *   console.log('Fetched account note: ', note.message)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} accountNoteId - Account Note ID.
   * @return {Promise<AccountNote>} An account note.
   */
  getAccountNote(accountId: string, accountNoteId: string): Promise<AccountNote>;
  /**
   * Fetch a list of an account's shipping addresses
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_shipping_addresses
   *
   * @example
   * const addresses = client.listShippingAddresses(accountId, { params: { limit: 200 } })
   * 
   * for await (const address of addresses.each()) {
   *   console.log(address.street1)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<ShippingAddress>} A list of an account's shipping addresses.
   */
  listShippingAddresses(accountId: string, options?: object): Pager<ShippingAddress>;
  /**
   * Create a new shipping address for the account
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_shipping_address
   *
   * @example
   * try {
   *   const shippingAddressCreate = {
   *     firstName: 'Aaron',
   *     lastName: 'Du Monde',
   *     street1: '900 Camp St.',
   *     city: 'New Orleans',
   *     region: 'LA',
   *     postalCode: '70115',
   *     country: 'US'
   *   }
   *   const address = await client.createShippingAddress(accountId, shippingAddressCreate)
   *   console.log('Created shipping address: ', address.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {ShippingAddressCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressCreate}
   * @return {Promise<ShippingAddress>} Returns the new shipping address.
   */
  createShippingAddress(accountId: string, body: ShippingAddressCreate): Promise<ShippingAddress>;
  /**
   * Fetch an account's shipping address
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_shipping_address
   *
   * @example
   * try {
   *   const address = await client.getShippingAddress(accountId, shippingAddressId)
   *   console.log('Fetched shipping address: ', address.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return {Promise<ShippingAddress>} A shipping address.
   */
  getShippingAddress(accountId: string, shippingAddressId: string): Promise<ShippingAddress>;
  /**
   * Update an account's shipping address
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_shipping_address
   *
   * @example
   * try {
   *   const shadUpdate = {
   *     firstName: "Benjamin",
   *     lastName: "Du Monde"
   *   }
   *   const address = await client.updateShippingAddress(accountId, shippingAddressId, shadUpdate)
   *   console.log('Updated shipping address: ', address.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} shippingAddressId - Shipping Address ID.
   * @param {ShippingAddressUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressUpdate}
   * @return {Promise<ShippingAddress>} The updated shipping address.
   */
  updateShippingAddress(accountId: string, shippingAddressId: string, body: ShippingAddressUpdate): Promise<ShippingAddress>;
  /**
   * Remove an account's shipping address
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_shipping_address
   *
   * @example
   * try {
   *   await client.removeShippingAddress(accountId, shippingAddress.id)
   *   console.log('Removed shipping address: ', shippingAddress.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return {Promise<Empty>} Shipping address deleted.
   */
  removeShippingAddress(accountId: string, shippingAddressId: string): Promise<Empty>;
  /**
   * List an account's subscriptions
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_subscriptions
   *
   * @example
   * const subscriptions = client.listAccountSubscriptions(accountId, { params: { limit: 200 } })
   * 
   * for await (const subscription of subscriptions.each()) {
   *   console.log(subscription.uuid)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   *   
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *   
   * @return {Pager<Subscription>} A list of the account's subscriptions.
   */
  listAccountSubscriptions(accountId: string, options?: object): Pager<Subscription>;
  /**
   * List an account's transactions
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_transactions
   *
   * @example
   * const transactions = client.listAccountTransactions(accountId, { params: { limit: 200 } })
   * 
   * for await (const transaction of transactions.each()) {
   *   console.log(transaction.uuid)
   * }
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param {string} options.params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the account's transactions.
   */
  listAccountTransactions(accountId: string, options?: object): Pager<Transaction>;
  /**
   * List an account's child accounts
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_child_accounts
   *
   * 
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param {boolean} options.params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *   
   * @param {string} options.params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of an account's child accounts.
   */
  listChildAccounts(accountId: string, options?: object): Pager<Account>;
  /**
   * List a site's account acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_account_acquisition
   *
   * @example
   * const acquisitions = client.listAccountAcquisition({ params: { limit: 200 } })
   * 
   * for await (const acquisition of acquisitions.each()) {
   *   console.log(acquisition.id)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<AccountAcquisition>} A list of the site's account acquisition data.
   */
  listAccountAcquisition(options?: object): Pager<AccountAcquisition>;
  /**
   * List a site's coupons
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_coupons
   *
   * @example
   * const coupons = client.listCoupons({ params: { limit: 200 } })
   * 
   * for await (const coupon of coupons.each()) {
   *   console.log(coupon.code)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<Coupon>} A list of the site's coupons.
   */
  listCoupons(options?: object): Pager<Coupon>;
  /**
   * Create a new coupon
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_coupon
   *
   * @example
   * try {
   *   const couponCreate = {
   *     name: "Promotional Coupon",
   *     code: couponCode,
   *     discount_type: "fixed",
   *     currencies: [{"currency": "USD", "discount": 10}],
   *   }
   *   const coupon = await client.createCoupon(couponCreate)
   *   console.log('Created coupon: ', coupon.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {CouponCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponCreate}
   * @return {Promise<Coupon>} A new coupon.
   */
  createCoupon(body: CouponCreate): Promise<Coupon>;
  /**
   * Fetch a coupon
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_coupon
   *
   * @example
   * try {
   *   const coupon = await client.getCoupon(couponId)
   *   console.log('Fetched coupon: ', coupon.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @return {Promise<Coupon>} A coupon.
   */
  getCoupon(couponId: string): Promise<Coupon>;
  /**
   * Update an active coupon
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_coupon
   *
   * @example
   * try {
   *   const couponUpdate = {
   *     name: "New Coupon Name"
   *   }
   *   const coupon = await client.updateCoupon(couponId, couponUpdate)
   *   console.log('Updated coupon: ', coupon)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {CouponUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return {Promise<Coupon>} The updated coupon.
   */
  updateCoupon(couponId: string, body: CouponUpdate): Promise<Coupon>;
  /**
   * Expire a coupon
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/deactivate_coupon
   *
   * @example
   * try {
   *   const coupon = await client.deactivateCoupon(couponId)
   *   console.log('Deactivated coupon: ', coupon.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @return {Promise<Coupon>} The expired Coupon
   */
  deactivateCoupon(couponId: string): Promise<Coupon>;
  /**
   * Generate unique coupon codes
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/generate_unique_coupon_codes
   *
   * 
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {CouponBulkCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponBulkCreate}
   * @return {Promise<UniqueCouponCodeParams>} A set of parameters that can be passed to the `list_unique_coupon_codes`
endpoint to obtain only the newly generated `UniqueCouponCodes`.

   */
  generateUniqueCouponCodes(couponId: string, body: CouponBulkCreate): Promise<UniqueCouponCodeParams>;
  /**
   * Restore an inactive coupon
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/restore_coupon
   *
   * 
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {CouponUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return {Promise<Coupon>} The restored coupon.
   */
  restoreCoupon(couponId: string, body: CouponUpdate): Promise<Coupon>;
  /**
   * List unique coupon codes associated with a bulk coupon
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_unique_coupon_codes
   *
   * 
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<UniqueCouponCode>} A list of unique coupon codes that were generated
   */
  listUniqueCouponCodes(couponId: string, options?: object): Pager<UniqueCouponCode>;
  /**
   * List a site's credit payments
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_credit_payments
   *
   * @example
   * const payments = client.listCreditPayments({ params: { limit: 200 } })
   * 
   * for await (const payment of payments.each()) {
   *   console.log(payment.uuid)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CreditPayment>} A list of the site's credit payments.
   */
  listCreditPayments(options?: object): Pager<CreditPayment>;
  /**
   * Fetch a credit payment
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_credit_payment
   *
   * 
   * @param {string} creditPaymentId - Credit Payment ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<CreditPayment>} A credit payment.
   */
  getCreditPayment(creditPaymentId: string): Promise<CreditPayment>;
  /**
   * List a site's custom field definitions
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_custom_field_definitions
   *
   * @example
   * const definitions = client.listCustomFieldDefinitions({ params: { limit: 200 } })
   * 
   * for await (const definition of definitions.each()) {
   *   console.log(definition.displayName)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.relatedType - Filter by related type.
   * @return {Pager<CustomFieldDefinition>} A list of the site's custom field definitions.
   */
  listCustomFieldDefinitions(options?: object): Pager<CustomFieldDefinition>;
  /**
   * Fetch an custom field definition
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_custom_field_definition
   *
   * @example
   * try {
   *   const definition = await client.getCustomFieldDefinition(definitionId)
   *   console.log('Fetched custom field definition: ', definition.displayName)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} customFieldDefinitionId - Custom Field Definition ID
   * @return {Promise<CustomFieldDefinition>} An custom field definition.
   */
  getCustomFieldDefinition(customFieldDefinitionId: string): Promise<CustomFieldDefinition>;
  /**
   * List an invoice template's associated accounts
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_invoice_template_accounts
   *
   * 
   * @param {string} invoiceTemplateId - Invoice template ID.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param {boolean} options.params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *   
   * @param {string} options.params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of an invoice template's associated accounts.
   */
  listInvoiceTemplateAccounts(invoiceTemplateId: string, options?: object): Pager<Account>;
  /**
   * List a site's items
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_items
   *
   * @example
   * const items = client.listItems({ params: { limit: 200 } })
   * 
   * for await (const item of items.each()) {
   *   console.log(item.code)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<Item>} A list of the site's items.
   */
  listItems(options?: object): Pager<Item>;
  /**
   * Create a new item
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_item
   *
   * @example
   * try {
   *   const itemCreate = {
   *     code: itemCode,
   *     name: "Item Name",
   *     description: "Item Description",
   *     external_sku: "a35JE-44",
   *     accounting_code: "item-code-127",
   *     revenue_schedule_type: "at_range_end",
   *     custom_fields: [{
   *       name: "custom-field-1",
   *       value: "Custom Field 1 value"
   *     }]
   *   }
   *   const item = await client.createItem(itemCreate)
   *   console.log('Created Item: ', item.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {ItemCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ItemCreate}
   * @return {Promise<Item>} A new item.
   */
  createItem(body: ItemCreate): Promise<Item>;
  /**
   * Fetch an item
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_item
   *
   * @example
   * try {
   *   const item = await client.getItem(itemId)
   *   console.log('Fetched item: ', item.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  getItem(itemId: string): Promise<Item>;
  /**
   * Update an active item
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_item
   *
   * @example
   * try {
   *   const itemUpdate = {
   *     name: 'New Item Name',
   *     description: 'New Item Description'
   *   }
   *   const item = await client.updateItem(itemId, itemUpdate)
   *   console.log('Updated item: ', item)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @param {ItemUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ItemUpdate}
   * @return {Promise<Item>} The updated item.
   */
  updateItem(itemId: string, body: ItemUpdate): Promise<Item>;
  /**
   * Deactivate an item
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/deactivate_item
   *
   * @example
   * try {
   *   const item = await client.deactivateItem(itemId)
   *   console.log('Deleted item: ', item.code)
   * } catch (err) {
   *   if (err && err.type === 'not-found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   * 
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  deactivateItem(itemId: string): Promise<Item>;
  /**
   * Reactivate an inactive item
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/reactivate_item
   *
   * @example
   * try {
   *   const item = await client.reactivateItem(itemId)
   *   console.log('Reactivated item: ', item.code)
   * } catch (err) {
   *   if (err && err.type === 'not_found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   * 
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  reactivateItem(itemId: string): Promise<Item>;
  /**
   * List a site's measured units
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_measured_unit
   *
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<MeasuredUnit>} A list of the site's measured units.
   */
  listMeasuredUnit(options?: object): Pager<MeasuredUnit>;
  /**
   * Create a new measured unit
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_measured_unit
   *
   * 
   * @param {MeasuredUnitCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {MeasuredUnitCreate}
   * @return {Promise<MeasuredUnit>} A new measured unit.
   */
  createMeasuredUnit(body: MeasuredUnitCreate): Promise<MeasuredUnit>;
  /**
   * Fetch a measured unit
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_measured_unit
   *
   * 
   * @param {string} measuredUnitId - Measured unit ID or name. For ID no prefix is used e.g. `e28zov4fw0v2`. For name use prefix `name-`, e.g. `name-Storage`.
   * @return {Promise<MeasuredUnit>} An item.
   */
  getMeasuredUnit(measuredUnitId: string): Promise<MeasuredUnit>;
  /**
   * Update a measured unit
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_measured_unit
   *
   * 
   * @param {string} measuredUnitId - Measured unit ID or name. For ID no prefix is used e.g. `e28zov4fw0v2`. For name use prefix `name-`, e.g. `name-Storage`.
   * @param {MeasuredUnitUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {MeasuredUnitUpdate}
   * @return {Promise<MeasuredUnit>} The updated measured_unit.
   */
  updateMeasuredUnit(measuredUnitId: string, body: MeasuredUnitUpdate): Promise<MeasuredUnit>;
  /**
   * Remove a measured unit
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_measured_unit
   *
   * 
   * @param {string} measuredUnitId - Measured unit ID or name. For ID no prefix is used e.g. `e28zov4fw0v2`. For name use prefix `name-`, e.g. `name-Storage`.
   * @return {Promise<MeasuredUnit>} A measured unit.
   */
  removeMeasuredUnit(measuredUnitId: string): Promise<MeasuredUnit>;
  /**
   * List a site's invoices
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_invoices
   *
   * @example
   * const invoices = client.listInvoices({ params: { limit: 200 } })
   * 
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *   
   * @return {Pager<Invoice>} A list of the site's invoices.
   */
  listInvoices(options?: object): Pager<Invoice>;
  /**
   * Fetch an invoice
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_invoice
   *
   * @example
   * try {
   *   const invoice = await client.getInvoice(invoiceId)
   *   console.log('Fetched Invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} An invoice.
   */
  getInvoice(invoiceId: string): Promise<Invoice>;
  /**
   * Update an invoice
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_invoice
   *
   * @example
   * try {
   *   const invoiceUpdate = {
   *     customerNotes: "New notes",
   *     termsAndConditions: "New terms and conditions"
   *   }
   * 
   *   const invoice = await client.updateInvoice(invoiceId, invoiceUpdate)
   *   console.log('Edited invoice: ', invoice.number)
   * } catch(err) {
   * 
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {InvoiceUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceUpdate}
   * @return {Promise<Invoice>} An invoice.
   */
  updateInvoice(invoiceId: string, body: InvoiceUpdate): Promise<Invoice>;
  /**
   * Fetch an invoice as a PDF
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_invoice_pdf
   *
   * @example
   * try {
   *   const invoice = await client.getInvoicePdf(invoiceId)
   *   console.log('Fetched Invoice: ', invoice)
   *   const filename = `${downloadDirectory}/nodeinvoice-${invoiceId}.pdf`
   *   await fs.writeFile(filename, invoice.data, 'binary', (err) => {
   *     // throws an error, you could also catch it here
   *     if (err) throw err;
   * 
   *     // success case, the file was saved
   *     console.log('Saved Invoice PDF to', filename)
   *   })
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<BinaryFile>} An invoice as a PDF.
   */
  getInvoicePdf(invoiceId: string): Promise<BinaryFile>;
  /**
   * Collect a pending or past due, automatic invoice
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/collect_invoice
   *
   * @example
   * try {
   *   const invoice = await client.collectInvoice(invoiceId)
   *   console.log('Collected invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {InvoiceCollect} options.params.body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCollect}
   * @return {Promise<Invoice>} The updated invoice.
   */
  collectInvoice(invoiceId: string, options?: object): Promise<Invoice>;
  /**
   * Mark an open invoice as failed
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/mark_invoice_failed
   *
   * @example
   * try {
   *   const invoice = await client.markInvoiceFailed(invoiceId)
   *   console.log('Failed invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  markInvoiceFailed(invoiceId: string): Promise<Invoice>;
  /**
   * Mark an open invoice as successful
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/mark_invoice_successful
   *
   * @example
   * try {
   *   const invoice = await client.markInvoiceSuccessful(invoiceId)
   *   console.log(`Marked invoice #${invoice.number} successful`)
   * } catch(err) {
   * 
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  markInvoiceSuccessful(invoiceId: string): Promise<Invoice>;
  /**
   * Reopen a closed, manual invoice
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/reopen_invoice
   *
   * @example
   * try {
   *   const invoice = await client.reopenInvoice(invoiceId)
   *   console.log('Reopened invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  reopenInvoice(invoiceId: string): Promise<Invoice>;
  /**
   * Void a credit invoice.
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/void_invoice
   *
   * @example
   * try {
   *   const invoice = await client.voidInvoice(invoiceId)
   *   console.log('Voided invoice: ', invoice)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  voidInvoice(invoiceId: string): Promise<Invoice>;
  /**
   * Record an external payment for a manual invoices.
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/record_external_transaction
   *
   * @example
   * try {
   *   const externalTrx = {
   *     description: "A check collected outside of Recurly",
   *     amount: 10.0,
   *     payment_method: 'check'
   *   }
   *   const transaction = await client.recordExternalTransaction(invoiceId, externalTrx)
   *   console.log('External Transaction: ', transaction)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {ExternalTransaction} body - The object representing the JSON request to send to the server. It should conform to the schema of {ExternalTransaction}
   * @return {Promise<Transaction>} The recorded transaction.
   */
  recordExternalTransaction(invoiceId: string, body: ExternalTransaction): Promise<Transaction>;
  /**
   * List an invoice's line items
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_invoice_line_items
   *
   * @example
   * const lineItems = client.listInvoiceLineItems(invoiceId, { params: { limit: 200 } })
   * 
   * for await (const lineItem of lineItems.each()) {
   *   console.log(lineItem.id)
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the invoice's line items.
   */
  listInvoiceLineItems(invoiceId: string, options?: object): Pager<LineItem>;
  /**
   * Show the coupon redemptions applied to an invoice
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_invoice_coupon_redemptions
   *
   * @example
   * const redemptions = client.listInvoiceCouponRedemptions(invoiceId, { params: { limit: 200 } })
   * 
   * for await (const redemption of redemptions.each()) {
   *   console.log(redemption.id)
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions associated with the invoice.
   */
  listInvoiceCouponRedemptions(invoiceId: string, options?: object): Pager<CouponRedemption>;
  /**
   * List an invoice's related credit or charge invoices
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_related_invoices
   *
   * @example
   * const invoices = client.listRelatedInvoices(invoiceId, { params: { limit: 200 } })
   * 
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Pager<Invoice>} A list of the credit or charge invoices associated with the invoice.
   */
  listRelatedInvoices(invoiceId: string, options?: object): Pager<Invoice>;
  /**
   * Refund an invoice
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/refund_invoice
   *
   * @example
   * try {
   *   const invoiceRefund = {
   *     creditCustomerNotes: "Notes on credits",
   *     type: "amount", // could also be "line_items"
   *     amount: 100
   *   }
   * 
   *   const invoice = await client.refundInvoice(invoiceId, invoiceRefund)
   *   console.log('Refunded invoice: ', invoice.number)
   * } catch(err) {
   * 
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {InvoiceRefund} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceRefund}
   * @return {Promise<Invoice>} Returns the new credit invoice.
   */
  refundInvoice(invoiceId: string, body: InvoiceRefund): Promise<Invoice>;
  /**
   * List a site's line items
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_line_items
   *
   * @example
   * const lineItems = client.listLineItems({ params: { limit: 200 } })
   * 
   * for await (const item of lineItems.each()) {
   *   console.log(`Item ${item.id} for ${item.amount}`)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the site's line items.
   */
  listLineItems(options?: object): Pager<LineItem>;
  /**
   * Fetch a line item
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_line_item
   *
   * @example
   * try {
   *   const lineItem = await client.getLineItem(lineItemId)
   *   console.log('Fetched line item: ', lineItem.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} lineItemId - Line Item ID.
   * @return {Promise<LineItem>} A line item.
   */
  getLineItem(lineItemId: string): Promise<LineItem>;
  /**
   * Delete an uninvoiced line item
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_line_item
   *
   * @example
   * try {
   *   await client.removeLineItem(lineItemId)
   *   console.log('Removed line item: ', lineItemId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} lineItemId - Line Item ID.
   * @return {Promise<Empty>} Line item deleted.
   */
  removeLineItem(lineItemId: string): Promise<Empty>;
  /**
   * List a site's plans
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_plans
   *
   * @example
   * const plans = client.listPlans({ params: { limit: 200 } })
   * 
   * for await (const plan of plans.each()) {
   *   console.log(plan.code)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<Plan>} A list of plans.
   */
  listPlans(options?: object): Pager<Plan>;
  /**
   * Create a plan
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_plan
   *
   * @example
   * try {
   *   const planCreate = {
   *     name: 'Monthly Coffee Subscription',
   *     code: planCode,
   *     currencies: [
   *       {
   *         currency: 'USD',
   *         unitAmount: 10000
   *       }
   *     ]
   *   }
   *   const plan = await client.createPlan(planCreate)
   *   console.log('Created Plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {PlanCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanCreate}
   * @return {Promise<Plan>} A plan.
   */
  createPlan(body: PlanCreate): Promise<Plan>;
  /**
   * Fetch a plan
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_plan
   *
   * @example
   * try {
   *   const plan = await client.getPlan(planId)
   *   console.log('Fetched plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<Plan>} A plan.
   */
  getPlan(planId: string): Promise<Plan>;
  /**
   * Update a plan
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_plan
   *
   * @example
   * try {
   *   const planUpdate = {
   *     name: 'New monthly coffee subscription'
   *   }
   *   const plan = await client.updatePlan(planId, planUpdate)
   *   console.log('Updated plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {PlanUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanUpdate}
   * @return {Promise<Plan>} A plan.
   */
  updatePlan(planId: string, body: PlanUpdate): Promise<Plan>;
  /**
   * Remove a plan
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_plan
   *
   * @example
   * try {
   *   const plan = await client.removePlan(planId)
   *   console.log('Removed plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<Plan>} Plan deleted
   */
  removePlan(planId: string): Promise<Plan>;
  /**
   * List a plan's add-ons
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_plan_add_ons
   *
   * @example
   * const addOns = client.listPlanAddOns(planId, { params: { limit: 200 } })
   * 
   * for await (const addOn of addOns.each()) {
   *   console.log(addOn.code)
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listPlanAddOns(planId: string, options?: object): Pager<AddOn>;
  /**
   * Create an add-on
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_plan_add_on
   *
   * @example
   * try {
   *   const addOnCreate = {
   *     code: 'coffee_grinder',
   *     name: 'A quality grinder for your beans',
   *     defaultQuantity: 1,
   *     currencies: [
   *       {
   *         currency: 'USD',
   *         unitAmount: 10000
   *       }
   *     ]
   *   }
   * 
   *   const addOn = await client.createPlanAddOn(planId, addOnCreate)
   *   console.log('Created add-on: ', addOn.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {AddOnCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnCreate}
   * @return {Promise<AddOn>} An add-on.
   */
  createPlanAddOn(planId: string, body: AddOnCreate): Promise<AddOn>;
  /**
   * Fetch a plan's add-on
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_plan_add_on
   *
   * @example
   * try {
   *   const addOn = await client.getPlanAddOn(planId, addOnId)
   *   console.log('Fetched add-on: ', addOn.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} An add-on.
   */
  getPlanAddOn(planId: string, addOnId: string): Promise<AddOn>;
  /**
   * Update an add-on
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_plan_add_on
   *
   * @example
   * try {
   *   const addOnUpdate = {
   *     name: 'New AddOn Name',
   *   }
   *   const addOn = await client.updatePlanAddOn(planId, addOnId, addOnUpdate)
   *   console.log('Updated add-on: ', addOn)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {AddOnUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnUpdate}
   * @return {Promise<AddOn>} An add-on.
   */
  updatePlanAddOn(planId: string, addOnId: string, body: AddOnUpdate): Promise<AddOn>;
  /**
   * Remove an add-on
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_plan_add_on
   *
   * @example
   * try {
   *   const addOn = await client.removePlanAddOn(planId, addOnId)
   *   console.log('Removed plan add-on: ', addOn)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} Add-on deleted
   */
  removePlanAddOn(planId: string, addOnId: string): Promise<AddOn>;
  /**
   * List a site's add-ons
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_add_ons
   *
   * @example
   * const addOns = client.listAddOns({ params: { limit: 200 } })
   * 
   * for await (const addOn of addOns.each()) {
   *   console.log(addOn.code)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listAddOns(options?: object): Pager<AddOn>;
  /**
   * Fetch an add-on
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_add_on
   *
   * @example
   * try {
   *   const addOn = await client.getAddOn(addOnId)
   *   console.log('Fetched add-on: ', addOn)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} An add-on.
   */
  getAddOn(addOnId: string): Promise<AddOn>;
  /**
   * List a site's shipping methods
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_shipping_methods
   *
   * @example
   * const methods = client.listShippingMethods({ params: { limit: 200 } })
   * 
   * for await (const method of methods.each()) {
   *   console.log(method.code)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<ShippingMethod>} A list of the site's shipping methods.
   */
  listShippingMethods(options?: object): Pager<ShippingMethod>;
  /**
   * Create a new shipping method
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_shipping_method
   *
   * 
   * @param {ShippingMethodCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingMethodCreate}
   * @return {Promise<ShippingMethod>} A new shipping method.
   */
  createShippingMethod(body: ShippingMethodCreate): Promise<ShippingMethod>;
  /**
   * Fetch a shipping method
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_shipping_method
   *
   * 
   * @param {string} shippingMethodId - Shipping Method ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-usps_2-day`.
   * @return {Promise<ShippingMethod>} A shipping method.
   */
  getShippingMethod(shippingMethodId: string): Promise<ShippingMethod>;
  /**
   * Update an active Shipping Method
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_shipping_method
   *
   * 
   * @param {string} shippingMethodId - Shipping Method ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-usps_2-day`.
   * @param {ShippingMethodUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingMethodUpdate}
   * @return {Promise<ShippingMethod>} The updated shipping method.
   */
  updateShippingMethod(shippingMethodId: string, body: ShippingMethodUpdate): Promise<ShippingMethod>;
  /**
   * Deactivate a shipping method
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/deactivate_shipping_method
   *
   * 
   * @param {string} shippingMethodId - Shipping Method ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-usps_2-day`.
   * @return {Promise<ShippingMethod>} A shipping method.
   */
  deactivateShippingMethod(shippingMethodId: string): Promise<ShippingMethod>;
  /**
   * List a site's subscriptions
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_subscriptions
   *
   * @example
   * const subscriptions = client.listSubscriptions({ params: { limit: 200 } })
   * 
   * for await (const subscription of subscriptions.each()) {
   *   console.log(subscription.uuid)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.state - Filter by state.
   *   
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *   
   * @return {Pager<Subscription>} A list of the site's subscriptions.
   */
  listSubscriptions(options?: object): Pager<Subscription>;
  /**
   * Create a new subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_subscription
   *
   * @example
   * try {
   *   let subscriptionReq = {
   *     planCode: planCode,
   *     currency: `USD`,
   *     account: {
   *       code: accountCode
   *     }
   *   }
   *   let sub = await client.createSubscription(subscriptionReq)
   *   console.log('Created subscription: ', sub.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {SubscriptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCreate}
   * @return {Promise<Subscription>} A subscription.
   */
  createSubscription(body: SubscriptionCreate): Promise<Subscription>;
  /**
   * Fetch a subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_subscription
   *
   * @example
   * try {
   *   const subscription = await client.getSubscription(subscriptionId)
   *   console.log('Fetched subscription: ', subscription.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  getSubscription(subscriptionId: string): Promise<Subscription>;
  /**
   * Update a subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_subscription
   *
   * @example
   * try {
   *   const update = {
   *     termsAndConditions: "Some new terms and conditions",
   *     customerNotes: "Some new customer notes"
   *   }
   *   const subscription = await client.updateSubscription(subscriptionId, update)
   *   console.log('Modified subscription: ', subscription.uuid)
   * } catch(err) {
   * 
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionUpdate}
   * @return {Promise<Subscription>} A subscription.
   */
  updateSubscription(subscriptionId: string, body: SubscriptionUpdate): Promise<Subscription>;
  /**
   * Terminate a subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/terminate_subscription
   *
   * @example
   * try {
   *   const subscription = await client.terminateSubscription(subscriptionId)
   *   console.log('Terminated subscription: ', subscription.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string} options.params.refund - The type of refund to perform:
   *   
   *   * `full` - Performs a full refund of the last invoice for the current subscription term.
   *   * `partial` - Prorates a refund based on the amount of time remaining in the current bill cycle.
   *   * `none` - Terminates the subscription without a refund.
   *   
   *   In the event that the most recent invoice is a $0 invoice paid entirely by credit, Recurly will apply the credit back to the customer’s account.
   *   
   *   You may also terminate a subscription with no refund and then manually refund specific invoices.
   *   
   * @param {boolean} options.params.charge - Applicable only if the subscription has usage based add-ons and unbilled usage logged for the current billing cycle. If true, current billing cycle unbilled usage is billed on the final invoice. If false, Recurly will create a negative usage record for current billing cycle usage that will zero out the final invoice line items.
   * @return {Promise<Subscription>} An expired subscription.
   */
  terminateSubscription(subscriptionId: string, options?: object): Promise<Subscription>;
  /**
   * Cancel a subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/cancel_subscription
   *
   * @example
   * try {
   *   let expiredSub = await client.cancelSubscription(subscriptionId)
   *   console.log('Canceled Subscription: ', expiredSub.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {SubscriptionCancel} options.params.body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCancel}
   * @return {Promise<Subscription>} A canceled or failed subscription.
   */
  cancelSubscription(subscriptionId: string, options?: object): Promise<Subscription>;
  /**
   * Reactivate a canceled subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/reactivate_subscription
   *
   * @example
   * try {
   *   const subscription = await client.reactivateSubscription(subscriptionId)
   *   console.log('Reactivated subscription: ', subscription.uuid)
   * } catch(err) {
   * 
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} An active subscription.
   */
  reactivateSubscription(subscriptionId: string): Promise<Subscription>;
  /**
   * Pause subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/pause_subscription
   *
   * @example
   * try {
   *   let pauseReq = {
   *     remaining_pause_cycles: 2,
   *   }
   *   const subscription = await client.pauseSubscription(subscriptionId, pauseReq)
   *   console.log('Paused subscription: ', subscription.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionPause} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionPause}
   * @return {Promise<Subscription>} A subscription.
   */
  pauseSubscription(subscriptionId: string, body: SubscriptionPause): Promise<Subscription>;
  /**
   * Resume subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/resume_subscription
   *
   * @example
   * try {
   *   const subscription = await client.resumeSubscription(subscriptionId)
   *   console.log('Resumed subscription: ', subscription.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  resumeSubscription(subscriptionId: string): Promise<Subscription>;
  /**
   * Convert trial subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/convert_trial
   *
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  convertTrial(subscriptionId: string): Promise<Subscription>;
  /**
   * Fetch a preview of a subscription's renewal invoice(s)
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_preview_renewal
   *
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<InvoiceCollection>} A preview of the subscription's renewal invoice(s).
   */
  getPreviewRenewal(subscriptionId: string): Promise<InvoiceCollection>;
  /**
   * Fetch a subscription's pending change
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_subscription_change
   *
   * @example
   * try {
   *   const change = await client.getSubscriptionChange(subscriptionId)
   *   console.log('Fetched subscription change: ', change.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<SubscriptionChange>} A subscription's pending change.
   */
  getSubscriptionChange(subscriptionId: string): Promise<SubscriptionChange>;
  /**
   * Create a new subscription change
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_subscription_change
   *
   * @example
   * try {
   *   const subscriptionChangeCreate = {
   *     planCode: newPlanCode,
   *     timeframe: 'now'
   *   }
   * 
   *   const change = await client.createSubscriptionChange(subscriptionId, subscriptionChangeCreate)
   *   console.log('Created subscription change: ', change.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionChangeCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return {Promise<SubscriptionChange>} A subscription change.
   */
  createSubscriptionChange(subscriptionId: string, body: SubscriptionChangeCreate): Promise<SubscriptionChange>;
  /**
   * Delete the pending subscription change
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_subscription_change
   *
   * @example
   * try {
   *   await client.removeSubscriptionChange(subscriptionId)
   *   console.log('Removed subscription change: ', subscriptionId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Empty>} Subscription change was deleted.
   */
  removeSubscriptionChange(subscriptionId: string): Promise<Empty>;
  /**
   * Preview a new subscription change
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/preview_subscription_change
   *
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionChangeCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return {Promise<SubscriptionChange>} A subscription change.
   */
  previewSubscriptionChange(subscriptionId: string, body: SubscriptionChangeCreate): Promise<SubscriptionChange>;
  /**
   * List a subscription's invoices
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_subscription_invoices
   *
   * @example
   * const invoices = client.listSubscriptionInvoices(subscriptionId, { params: { limit: 200 } })
   * 
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *   
   * @return {Pager<Invoice>} A list of the subscription's invoices.
   */
  listSubscriptionInvoices(subscriptionId: string, options?: object): Pager<Invoice>;
  /**
   * List a subscription's line items
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_subscription_line_items
   *
   * @example
   * const lineItems = client.listSubscriptionLineItems(subscriptionId, { params: { limit: 200 } })
   * 
   * for await (const lineItem of lineItems.each()) {
   *   console.log(lineItem.id)
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the subscription's line items.
   */
  listSubscriptionLineItems(subscriptionId: string, options?: object): Pager<LineItem>;
  /**
   * Show the coupon redemptions for a subscription
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_subscription_coupon_redemptions
   *
   * @example
   * const redemptions = client.listSubscriptionCouponRedemptions(subscriptionId, { params: { limit: 200 } })
   * 
   * for await (const redemption of redemptions.each()) {
   *   console.log(redemption.id)
   * }
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on a subscription.
   */
  listSubscriptionCouponRedemptions(subscriptionId: string, options?: object): Pager<CouponRedemption>;
  /**
   * List a subscription add-on's usage records
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_usage
   *
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `usage_timestamp` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=usage_timestamp` or `sort=recorded_timestamp`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=usage_timestamp` or `sort=recorded_timestamp`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.billingStatus - Filter by usage record's billing status
   * @return {Pager<Usage>} A list of the subscription add-on's usage records.
   */
  listUsage(subscriptionId: string, addOnId: string, options?: object): Pager<Usage>;
  /**
   * Log a usage record on this subscription add-on
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_usage
   *
   * 
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {UsageCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {UsageCreate}
   * @return {Promise<Usage>} The created usage record.
   */
  createUsage(subscriptionId: string, addOnId: string, body: UsageCreate): Promise<Usage>;
  /**
   * Get a usage record
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_usage
   *
   * 
   * @param {string} usageId - Usage Record ID.
   * @return {Promise<Usage>} The usage record.
   */
  getUsage(usageId: string): Promise<Usage>;
  /**
   * Update a usage record
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/update_usage
   *
   * 
   * @param {string} usageId - Usage Record ID.
   * @param {UsageCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {UsageCreate}
   * @return {Promise<Usage>} The updated usage record.
   */
  updateUsage(usageId: string, body: UsageCreate): Promise<Usage>;
  /**
   * Delete a usage record.
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/remove_usage
   *
   * 
   * @param {string} usageId - Usage Record ID.
   * @return {Promise<Empty>} Usage was successfully deleted.
   */
  removeUsage(usageId: string): Promise<Empty>;
  /**
   * List a site's transactions
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_transactions
   *
   * @example
   * const transactions = client.listTransactions({ params: { limit: 200 } })
   * 
   * for await (const transaction of transactions.each()) {
   *   console.log(transaction.uuid)
   * }
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string[]} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *   
   *   **Important notes:**
   *   
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *   
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param {string} options.params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param {string} options.params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the site's transactions.
   */
  listTransactions(options?: object): Pager<Transaction>;
  /**
   * Fetch a transaction
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_transaction
   *
   * @example
   * try {
   *   const transaction = await client.getTransaction(transactionId)
   *   console.log('Fetched transaction: ', transaction.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {string} transactionId - Transaction ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Transaction>} A transaction.
   */
  getTransaction(transactionId: string): Promise<Transaction>;
  /**
   * Fetch a unique coupon code
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_unique_coupon_code
   *
   * 
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  getUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  /**
   * Deactivate a unique coupon code
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/deactivate_unique_coupon_code
   *
   * 
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  deactivateUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  /**
   * Restore a unique coupon code
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/reactivate_unique_coupon_code
   *
   * 
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  reactivateUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  /**
   * Create a new purchase
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/create_purchase
   *
   * @example
   * try {
   *   let purchaseReq = {
   *     currency: 'USD',
   *     account: {
   *       code: accountCode,
   *       firstName: 'Benjamin',
   *       lastName: 'Du Monde',
   *       billingInfo: {
   *         tokenId: rjsTokenId
   *       }
   *     },
   *     subscriptions: [
   *       { planCode: planCode },
   *     ]
   *   }
   *   let invoiceCollection = await client.createPurchase(purchaseReq)
   *   console.log('Created Charge Invoice: ', invoiceCollection.chargeInvoice)
   *   console.log('Created Credit Invoices: ', invoiceCollection.creditInvoices)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {PurchaseCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PurchaseCreate}
   * @return {Promise<InvoiceCollection>} Returns the new invoices
   */
  createPurchase(body: PurchaseCreate): Promise<InvoiceCollection>;
  /**
   * Preview a new purchase
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/preview_purchase
   *
   * @example
   * try {
   *   let purchaseReq = {
   *     currency: 'USD',
   *     account: {
   *       firstName: 'Benjamin',
   *       lastName: 'Du Monde',
   *       code: accountCode,
   *       billingInfo: {
   *         tokenId: rjsTokenId
   *       }
   *     },
   *     subscriptions: [
   *       { planCode: planCode },
   *     ]
   *   }
   *   let invoiceCollection = await client.previewPurchase(purchaseReq)
   *   console.log('Preview Charge Invoice: ', invoiceCollection.chargeInvoice)
   *   console.log('Preview Credit Invoices: ', invoiceCollection.creditInvoices)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   * 
   * @param {PurchaseCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PurchaseCreate}
   * @return {Promise<InvoiceCollection>} Returns preview of the new invoices
   */
  previewPurchase(body: PurchaseCreate): Promise<InvoiceCollection>;
  /**
   * List the dates that have an available export to download.
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_export_dates
   *
   * @example
   * try {
   *   const export_dates = await client.getExportDates()
   *   export_dates.dates.forEach(date => {
   *     console.log(`Exports are available for: ${date}`)
   *   })
   * } catch (err) {
   *   if (err instanceof recurly.ApiError) {
   *     console.log('Unexpected error', err)
   *   }
   * }
   * 
   * @return {Promise<ExportDates>} Returns a list of dates.
   */
  getExportDates(): Promise<ExportDates>;
  /**
   * List of the export files that are available to download.
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_export_files
   *
   * @example
   * try {
   *   const export_files = await client.getExportFiles(export_date)
   *   export_files.files.forEach(file => {
   *     console.log(`Export file download URL: ${file.href}`)
   *   })
   * } catch (err) {
   *   if (err instanceof recurly.ApiError) {
   *     console.log('Unexpected error', err)
   *   }
   * }
   * 
   * @param {string} exportDate - Date for which to get a list of available automated export files. Date must be in YYYY-MM-DD format.
   * @return {Promise<ExportFiles>} Returns a list of export files to download.
   */
  getExportFiles(exportDate: string): Promise<ExportFiles>;
  /**
   * Show the dunning campaigns for a site
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/list_dunning_campaigns
   *
   * 
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @return {Pager<DunningCampaign>} A list of the the dunning_campaigns on an account.
   */
  listDunningCampaigns(options?: object): Pager<DunningCampaign>;
  /**
   * Show the settings for a dunning campaign
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/get_dunning_campaign
   *
   * 
   * @param {string} dunningCampaignId - Dunning Campaign ID, e.g. `e28zov4fw0v2`.
   * @return {Promise<DunningCampaign>} Settings for a dunning campaign.
   */
  getDunningCampaign(dunningCampaignId: string): Promise<DunningCampaign>;
  /**
   * Assign a dunning campaign to multiple plans
   *
   * API docs: https://developers.recurly.com/api/v2021-02-25#operation/put_dunning_campaign_bulk_update
   *
   * 
   * @param {DunningCampaignsBulkUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {DunningCampaignsBulkUpdate}
   * @return {Promise<DunningCampaignsBulkUpdateResponse>} A list of updated plans.
   */
  putDunningCampaignBulkUpdate(body: DunningCampaignsBulkUpdate): Promise<DunningCampaignsBulkUpdateResponse>;

}

export class ApiError extends Error {
  constructor (message: string, type: string, attributes: any);
  getResponse: () => Response;
}

declare namespace errors {
  export class ResponseError extends ApiError { }
  export class ServerError extends ResponseError { }
  export class InternalServerError extends ServerError { }
  export class ServiceNotAvailableError extends InternalServerError { }
  export class BadGatewayError extends ServerError { }
  export class ServiceUnavailableError extends ServerError { }
  export class TimeoutError extends ServerError { }
  export class RedirectionError extends ResponseError { }
  export class NotModifiedError extends ResponseError { }
  export class ClientError extends ApiError { }
  export class BadRequestError extends ClientError { }
  export class InvalidContentTypeError extends BadRequestError { }
  export class UnauthorizedError extends ClientError { }
  export class PaymentRequiredError extends ClientError { }
  export class ForbiddenError extends ClientError { }
  export class InvalidApiKeyError extends ForbiddenError { }
  export class InvalidPermissionsError extends ForbiddenError { }
  export class NotFoundError extends ClientError { }
  export class NotAcceptableError extends ClientError { }
  export class UnknownApiVersionError extends NotAcceptableError { }
  export class UnavailableInApiVersionError extends NotAcceptableError { }
  export class InvalidApiVersionError extends NotAcceptableError { }
  export class PreconditionFailedError extends ClientError { }
  export class UnprocessableEntityError extends ClientError { }
  export class ValidationError extends UnprocessableEntityError { }
  export class MissingFeatureError extends UnprocessableEntityError { }
  export class TransactionError extends UnprocessableEntityError { }
  export class SimultaneousRequestError extends UnprocessableEntityError { }
  export class ImmutableSubscriptionError extends UnprocessableEntityError { }
  export class InvalidTokenError extends UnprocessableEntityError { }
  export class TooManyRequestsError extends ClientError { }
  export class RateLimitedError extends TooManyRequestsError { }

  export const ERROR_MAP: {
    500: InternalServerError;
    502: BadGatewayError;
    503: ServiceUnavailableError;
    504: TimeoutError;
    304: NotModifiedError;
    400: BadRequestError;
    401: UnauthorizedError;
    402: PaymentRequiredError;
    403: ForbiddenError;
    404: NotFoundError;
    406: NotAcceptableError;
    412: PreconditionFailedError;
    422: UnprocessableEntityError;
    429: TooManyRequestsError;
  };
}
