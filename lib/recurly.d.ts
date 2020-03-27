// Type definitions for recurly
// Project: recurly
// Definitions by: Benjamin Eckel <dx@recurly.com>

export as namespace recurly;

export interface Site {
  /**
   * Site ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  subdomain: string | null;
  /**
   * This value is used to configure RecurlyJS to submit tokenized billing information.
   */
  publicApiKey: string | null;
  /**
   * Mode
   */
  mode: string | null;
  address: Address | null;
  settings: Settings | null;
  /**
   * A list of features enabled for the site.
   */
  features: string[] | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Updated at
   */
  updatedAt: Date | null;
  /**
   * Deleted at
   */
  deletedAt: Date | null;

}

export interface Address {
  /**
   * First name
   */
  firstName: string | null;
  /**
   * Last name
   */
  lastName: string | null;
  /**
   * Phone number
   */
  phone: string | null;
  /**
   * Street 1
   */
  street1: string | null;
  /**
   * Street 2
   */
  street2: string | null;
  /**
   * City
   */
  city: string | null;
  /**
   * State or province.
   */
  region: string | null;
  /**
   * Zip or postal code.
   */
  postalCode: string | null;
  /**
   * Country, 2-letter ISO code.
   */
  country: string | null;

}

export interface Settings {
  /**
   * - full:      Full Address (Street, City, State, Postal Code and Country) - streetzip: Street and Postal Code only - zip:       Postal Code only - none:      No Address 
   */
  billingAddressRequirement: string | null;
  acceptedCurrencies: string[] | null;
  /**
   * The default 3-letter ISO 4217 currency code.
   */
  defaultCurrency: string | null;

}

export interface Error {
  /**
   * Type
   */
  type: string | null;
  /**
   * Message
   */
  message: string | null;
  /**
   * Parameter specific errors
   */
  params: object[] | null;

}

export interface Account {
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Accounts can be either active or inactive.
   */
  state: string | null;
  /**
   * The unique token for automatically logging the account in to the hosted management pages. You may automatically log the user into their hosted management pages by directing the user to: `https://{subdomain}.recurly.com/account/{hosted_login_token}`.
   */
  hostedLoginToken: string | null;
  /**
   * The shipping addresses on the account.
   */
  shippingAddresses: ShippingAddress[] | null;
  /**
   * Indicates if the account has a subscription that is either active, canceled, future, or paused.
   */
  hasLiveSubscription: boolean | null;
  /**
   * Indicates if the account has an active subscription.
   */
  hasActiveSubscription: boolean | null;
  /**
   * Indicates if the account has a future subscription.
   */
  hasFutureSubscription: boolean | null;
  /**
   * Indicates if the account has a canceled subscription.
   */
  hasCanceledSubscription: boolean | null;
  /**
   * Indicates if the account has a paused subscription.
   */
  hasPausedSubscription: boolean | null;
  /**
   * Indicates if the account has a past due invoice.
   */
  hasPastDueInvoice: boolean | null;
  /**
   * When the account was created.
   */
  createdAt: Date | null;
  /**
   * When the account was last changed.
   */
  updatedAt: Date | null;
  /**
   * If present, when the account was last marked inactive.
   */
  deletedAt: Date | null;
  /**
   * The unique identifier of the account. This cannot be changed once the account is created.
   */
  code: string | null;
  /**
   * A secondary value for the account.
   */
  username: string | null;
  /**
   * The email address used for communicating with this customer. The customer will also use this email address to log into your hosted account management pages. This value does not need to be unique.
   */
  email: string | null;
  /**
   * Used to determine the language and locale of emails sent on behalf of the merchant to the customer.
   */
  preferredLocale: string | null;
  /**
   * Additional email address that should receive account correspondence. These should be separated only by commas. These CC emails will receive all emails that the `email` field also receives.
   */
  ccEmails: string | null;
  firstName: string | null;
  lastName: string | null;
  company: string | null;
  /**
   * The VAT number of the account (to avoid having the VAT applied). This is only used for manually collected invoices.
   */
  vatNumber: string | null;
  /**
   * The tax status of the account. `true` exempts tax on the account, `false` applies tax on the account.
   */
  taxExempt: boolean | null;
  /**
   * The tax exemption certificate number for the account. If the merchant has an integration for the Vertex tax provider, this optional value will be sent in any tax calculation requests for the account.
   */
  exemptionCertificate: string | null;
  /**
   * The UUID of the parent account associated with this account.
   */
  parentAccountId: string | null;
  /**
   * An enumerable describing the billing behavior of the account, specifically whether the account is self-paying or will rely on the parent account to pay.
   */
  billTo: string | null;
  address: Address | null;
  billingInfo: BillingInfo | null;
  /**
   * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
   */
  customFields: CustomField[] | null;

}

export interface ShippingAddress {
  /**
   * Shipping Address ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Account ID
   */
  accountId: string | null;
  nickname: string | null;
  firstName: string | null;
  lastName: string | null;
  company: string | null;
  email: string | null;
  vatNumber: string | null;
  phone: string | null;
  street1: string | null;
  street2: string | null;
  city: string | null;
  /**
   * State or province.
   */
  region: string | null;
  /**
   * Zip or postal code.
   */
  postalCode: string | null;
  /**
   * Country, 2-letter ISO code.
   */
  country: string | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Updated at
   */
  updatedAt: Date | null;

}

export interface BillingInfo {
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  accountId: string | null;
  firstName: string | null;
  lastName: string | null;
  company: string | null;
  address: Address | null;
  /**
   * Customer's VAT number (to avoid having the VAT applied). This is only used for automatically collected invoices.
   */
  vatNumber: string | null;
  valid: boolean | null;
  paymentMethod: PaymentMethod | null;
  /**
   * Most recent fraud result.
   */
  fraud: FraudInfo | null;
  /**
   * When the billing information was created.
   */
  createdAt: Date | null;
  /**
   * When the billing information was last changed.
   */
  updatedAt: Date | null;
  updatedBy: BillingInfoUpdatedBy | null;

}

export interface PaymentMethod {
  object: string | null;
  /**
   * Visa, MasterCard, American Express, Discover, JCB, etc.
   */
  cardType: string | null;
  /**
   * Credit card number's first six digits.
   */
  firstSix: string | null;
  /**
   * Credit card number's last four digits. Will refer to bank account if payment method is ACH.
   */
  lastFour: string | null;
  /**
   * The IBAN bank account's last two digits.
   */
  lastTwo: string | null;
  /**
   * Expiration month.
   */
  expMonth: number | null;
  /**
   * Expiration year.
   */
  expYear: number | null;
  /**
   * A token used in place of a credit card in order to perform transactions.
   */
  gatewayToken: string | null;
  /**
   * An identifier for a specific payment gateway.
   */
  gatewayCode: string | null;
  /**
   * Billing Agreement identifier. Only present for Amazon or Paypal payment methods.
   */
  billingAgreementId: string | null;
  /**
   * The bank account type. Only present for ACH payment methods.
   */
  accountType: string | null;
  /**
   * The bank account's routing number. Only present for ACH payment methods.
   */
  routingNumber: string | null;
  /**
   * The bank name of this routing number.
   */
  routingNumberBank: string | null;

}

export interface FraudInfo {
  /**
   * Kount score
   */
  score: number | null;
  /**
   * Kount decision
   */
  decision: string | null;
  /**
   * Kount rules
   */
  riskRulesTriggered: object | null;

}

export interface BillingInfoUpdatedBy {
  /**
   * Customer's IP address when updating their billing information.
   */
  ip: string | null;
  /**
   * Country of IP address, if known by Recurly.
   */
  country: string | null;

}

export interface CustomField {
  /**
   * Fields must be created in the UI before values can be assigned to them.
   */
  name: string | null;
  /**
   * Any values that resemble a credit card number or security code (CVV/CVC) will be rejected.
   */
  value: string | null;

}

export interface ErrorMayHaveTransaction {
  /**
   * Type
   */
  type: string | null;
  /**
   * Message
   */
  message: string | null;
  /**
   * Parameter specific errors
   */
  params: object[] | null;
  /**
   * This is only included on errors with `type=transaction`.
   */
  transactionError: TransactionError | null;

}

export interface TransactionError {
  /**
   * Object type
   */
  object: string | null;
  /**
   * Transaction ID
   */
  transactionId: string | null;
  /**
   * Category
   */
  category: string | null;
  /**
   * Code
   */
  code: string | null;
  /**
   * Customer message
   */
  message: string | null;
  /**
   * Merchant message
   */
  merchantAdvice: string | null;
  /**
   * Returned when 3-D Secure authentication is required for a transaction. Pass this value to Recurly.js so it can continue the challenge flow.
   */
  threeDSecureActionTokenId: string | null;

}

export interface AccountAcquisition {
  /**
   * Account balance
   */
  cost: AccountAcquisitionCost | null;
  /**
   * The channel through which the account was acquired.
   */
  channel: string | null;
  /**
   * An arbitrary subchannel string representing a distinction/subcategory within a broader channel.
   */
  subchannel: string | null;
  /**
   * An arbitrary identifier for the marketing campaign that led to the acquisition of this account.
   */
  campaign: string | null;
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Account mini details
   */
  account: AccountMini | null;
  /**
   * When the account acquisition data was created.
   */
  createdAt: Date | null;
  /**
   * When the account acquisition data was last changed.
   */
  updatedAt: Date | null;

}

export interface AccountAcquisitionCost {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * The amount of the corresponding currency used to acquire the account.
   */
  amount: number | null;

}

export interface AccountMini {
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The unique identifier of the account.
   */
  code: string | null;
  /**
   * The email address used for communicating with this customer.
   */
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  company: string | null;
  parentAccountId: string | null;
  billTo: string | null;

}

export interface AccountBalance {
  /**
   * Object type
   */
  object: string | null;
  /**
   * Account mini details
   */
  account: AccountMini | null;
  pastDue: boolean | null;
  balances: AccountBalanceAmount[] | null;

}

export interface AccountBalanceAmount {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Total amount the account is past due.
   */
  amount: number | null;

}

export interface CouponRedemption {
  /**
   * Coupon Redemption ID
   */
  id: string | null;
  /**
   * Will always be `coupon`.
   */
  object: string | null;
  /**
   * The Account on which the coupon was applied.
   */
  account: AccountMini | null;
  coupon: Coupon | null;
  /**
   * Coupon Redemption state
   */
  state: string | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * The amount that was discounted upon the application of the coupon, formatted with the currency.
   */
  discounted: number | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * The date and time the redemption was removed from the account (un-redeemed).
   */
  removedAt: Date | null;

}

export interface Coupon {
  /**
   * Coupon ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The code the customer enters to redeem the coupon.
   */
  code: string | null;
  /**
   * The internal name for the coupon.
   */
  name: string | null;
  /**
   * Indicates if the coupon is redeemable, and if it is not, why.
   */
  state: string | null;
  /**
   * A maximum number of redemptions for the coupon. The coupon will expire when it hits its maximum redemptions.
   */
  maxRedemptions: number | null;
  /**
   * Redemptions per account is the number of times a specific account can redeem the coupon. Set redemptions per account to `1` if you want to keep customers from gaming the system and getting more than one discount from the coupon campaign.
   */
  maxRedemptionsPerAccount: number | null;
  /**
   * When this number reaches `max_redemptions` the coupon will no longer be redeemable.
   */
  uniqueCouponCodesCount: number | null;
  /**
   * On a bulk coupon, the template from which unique coupon codes are generated.
   */
  uniqueCodeTemplate: string | null;
  /**
   * - "single_use" coupons applies to the first invoice only. - "temporal" coupons will apply to invoices for the duration determined by the `temporal_unit` and `temporal_amount` attributes. 
   */
  duration: string | null;
  /**
   * If `duration` is "temporal" than `temporal_amount` is an integer which is multiplied by `temporal_unit` to define the duration that the coupon will be applied to invoices for.
   */
  temporalAmount: number | null;
  /**
   * If `duration` is "temporal" than `temporal_unit` is multiplied by `temporal_amount` to define the duration that the coupon will be applied to invoices for.
   */
  temporalUnit: string | null;
  /**
   * Description of the unit of time the coupon is for. Used with `free_trial_amount` to determine the duration of time the coupon is for.
   */
  freeTrialUnit: string | null;
  /**
   * Sets the duration of time the `free_trial_unit` is for.
   */
  freeTrialAmount: number | null;
  /**
   * The coupon is valid for all plans if true. If false then `plans` and `plans_names` will list the applicable plans.
   */
  appliesToAllPlans: boolean | null;
  /**
   * The coupon is valid for one-time, non-plan charges if true.
   */
  appliesToNonPlanCharges: boolean | null;
  /**
   * TODO
   */
  plansNames: string[] | null;
  /**
   * A list of plans for which this coupon applies. This will be `null` if `applies_to_all_plans=true`.
   */
  plans: PlanMini[] | null;
  /**
   * Whether the discount is for all eligible charges on the account, or only a specific subscription.
   */
  redemptionResource: string | null;
  /**
   * Details of the discount a coupon applies. Will contain a `type` property and one of the following properties: `percent`, `fixed`, `trial`. 
   */
  discount: CouponDiscount | null;
  /**
   * Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
   */
  couponType: string | null;
  /**
   * This description will show up when a customer redeems a coupon on your Hosted Payment Pages, or if you choose to show the description on your own checkout page.
   */
  hostedPageDescription: string | null;
  /**
   * Description of the coupon on the invoice.
   */
  invoiceDescription: string | null;
  /**
   * The date and time the coupon will expire and can no longer be redeemed. Time is always 11:59:59, the end-of-day Pacific time.
   */
  redeemBy: Date | null;
  /**
   * The date and time the unique coupon code was redeemed. This is only present for bulk coupons.
   */
  redeemedAt: Date | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * The date and time the coupon was expired early or reached its `max_redemptions`.
   */
  expiredAt: Date | null;

}

export interface PlanMini {
  /**
   * Plan ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
   */
  code: string | null;
  /**
   * This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
   */
  name: string | null;

}

export interface CouponDiscount {
  type: string | null;
  /**
   * This is only present when `type=percent`.
   */
  percent: number | null;
  /**
   * This is only present when `type=fixed`.
   */
  currencies: CouponDiscountPricing[] | null;
  /**
   * This is only present when `type=free_trial`.
   */
  trial: CouponDiscountTrial | null;

}

export interface CouponDiscountPricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Value of the fixed discount that this coupon applies.
   */
  amount: number | null;

}

export interface CouponDiscountTrial {
  /**
   * Temporal unit of the free trial
   */
  unit: string | null;
  /**
   * Trial length measured in the units specified by the sibling `unit` property
   */
  length: number | null;

}

export interface CreditPayment {
  /**
   * Credit Payment ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid: string | null;
  /**
   * The action for which the credit was created.
   */
  action: string | null;
  /**
   * Account mini details
   */
  account: AccountMini | null;
  /**
   * Invoice mini details
   */
  appliedToInvoice: InvoiceMini | null;
  /**
   * Invoice mini details
   */
  originalInvoice: InvoiceMini | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Total credit payment amount applied to the charge invoice.
   */
  amount: number | null;
  /**
   * For credit payments with action `refund`, this is the credit payment that was refunded.
   */
  originalCreditPaymentId: string | null;
  refundTransaction: Transaction | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Voided at
   */
  voidedAt: Date | null;

}

export interface InvoiceMini {
  /**
   * Invoice ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Invoice number
   */
  number: string | null;
  /**
   * Invoice type
   */
  type: string | null;
  /**
   * Invoice state
   */
  state: string | null;

}

export interface Transaction {
  /**
   * Transaction ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid: string | null;
  /**
   * If this transaction is a refund (`type=refund`), this will be the ID of the original transaction on the invoice being refunded.
   */
  originalTransactionId: string | null;
  /**
   * Account mini details
   */
  account: AccountMini | null;
  /**
   * Invoice mini details
   */
  invoice: InvoiceMini | null;
  /**
   * Invoice mini details
   */
  voidedByInvoice: InvoiceMini | null;
  /**
   * If the transaction is charging or refunding for one or more subscriptions, these are their IDs.
   */
  subscriptionIds: string[] | null;
  /**
   * - `authorization` – verifies billing information and places a hold on money in the customer's account. - `capture` – captures funds held by an authorization and completes a purchase. - `purchase` – combines the authorization and capture in one transaction. - `refund` – returns all or a portion of the money collected in a previous transaction to the customer. - `verify` – a $0 or $1 transaction used to verify billing information which is immediately voided. 
   */
  type: string | null;
  /**
   * Describes how the transaction was triggered.
   */
  origin: string | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Total transaction amount sent to the payment gateway.
   */
  amount: number | null;
  /**
   * The current transaction status. Note that the status may change, e.g. a `pending` transaction may become `declined` or `success` may later become `void`.
   */
  status: string | null;
  /**
   * Did this transaction complete successfully?
   */
  success: boolean | null;
  /**
   * Indicates if part or all of this transaction was refunded.
   */
  refunded: boolean | null;
  billingAddress: Address | null;
  /**
   * The method by which the payment was collected.
   */
  collectionMethod: string | null;
  paymentMethod: PaymentMethod | null;
  /**
   * IP address provided when the billing information was collected:  - When the customer enters billing information into the Recurly.js or Hosted Payment Pages, Recurly records the IP address. - When the merchant enters billing information using the API, the merchant may provide an IP address. - When the merchant enters billing information using the UI, no IP address is recorded. 
   */
  ipAddressV4: string | null;
  /**
   * IP address's country
   */
  ipAddressCountry: string | null;
  /**
   * Status code
   */
  statusCode: string | null;
  /**
   * For declined (`success=false`) transactions, the message displayed to the merchant.
   */
  statusMessage: string | null;
  /**
   * For declined (`success=false`) transactions, the message displayed to the customer.
   */
  customerMessage: string | null;
  /**
   * Language code for the message
   */
  customerMessageLocale: string | null;
  paymentGateway: TransactionPaymentGateway | null;
  /**
   * Transaction message from the payment gateway.
   */
  gatewayMessage: string | null;
  /**
   * Transaction reference number from the payment gateway.
   */
  gatewayReference: string | null;
  /**
   * Transaction approval code from the payment gateway.
   */
  gatewayApprovalCode: string | null;
  /**
   * For declined transactions (`success=false`), this field lists the gateway error code.
   */
  gatewayResponseCode: string | null;
  /**
   * Time, in seconds, for gateway to process the transaction.
   */
  gatewayResponseTime: number | null;
  /**
   * The values in this field will vary from gateway to gateway.
   */
  gatewayResponseValues: object | null;
  /**
   * When processed, result from checking the CVV/CVC value on the transaction.
   */
  cvvCheck: string | null;
  /**
   * When processed, result from checking the overall AVS on the transaction.
   */
  avsCheck: string | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Voided at
   */
  voidedAt: Date | null;
  /**
   * Collected at, or if not collected yet, the time the transaction was created.
   */
  collectedAt: Date | null;

}

export interface TransactionPaymentGateway {
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  type: string | null;
  name: string | null;

}

export interface Invoice {
  /**
   * Invoice ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Invoices are either charge, credit, or legacy invoices.
   */
  type: string | null;
  /**
   * The event that created the invoice.
   */
  origin: string | null;
  /**
   * Invoice state
   */
  state: string | null;
  /**
   * Account mini details
   */
  account: AccountMini | null;
  /**
   * If the invoice is charging or refunding for one or more subscriptions, these are their IDs.
   */
  subscriptionIds: string[] | null;
  /**
   * On refund invoices, this value will exist and show the invoice ID of the purchase invoice the refund was created from.
   */
  previousInvoiceId: string | null;
  /**
   * If VAT taxation and the Country Invoice Sequencing feature are enabled, invoices will have country-specific invoice numbers for invoices billed to EU countries (ex: FR1001). Non-EU invoices will continue to use the site-level invoice number sequence.
   */
  number: string | null;
  /**
   * An automatic invoice means a corresponding transaction is run using the account's billing information at the same time the invoice is created. Manual invoices are created without a corresponding transaction. The merchant must enter a manual payment transaction or have the customer pay the invoice with an automatic method, like credit card, PayPal, Amazon, or ACH bank payment.
   */
  collectionMethod: string | null;
  /**
   * For manual invoicing, this identifies the PO number associated with the subscription.
   */
  poNumber: string | null;
  /**
   * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
   */
  netTerms: number | null;
  address: InvoiceAddress | null;
  shippingAddress: ShippingAddress | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Total discounts applied to this invoice.
   */
  discount: number | null;
  /**
   * The summation of charges, discounts, and credits, before tax.
   */
  subtotal: number | null;
  /**
   * The total tax on this invoice.
   */
  tax: number | null;
  /**
   * The final total on this invoice. The summation of invoice charges, discounts, credits, and tax.
   */
  total: number | null;
  /**
   * The refundable amount on a charge invoice. It will be null for all other invoices.
   */
  refundableAmount: number | null;
  /**
   * The total amount of successful payments transaction on this invoice.
   */
  paid: number | null;
  /**
   * The outstanding balance remaining on this invoice.
   */
  balance: number | null;
  /**
   * Tax info
   */
  taxInfo: TaxInfo | null;
  /**
   * VAT registration number for the customer on this invoice. This will come from the VAT Number field in the Billing Info or the Account Info depending on your tax settings and the invoice collection method.
   */
  vatNumber: string | null;
  /**
   * VAT Reverse Charge Notes only appear if you have EU VAT enabled or are using your own Avalara AvaTax account and the customer is in the EU, has a VAT number, and is in a different country than your own. This will default to the VAT Reverse Charge Notes text specified on the Tax Settings page in your Recurly admin, unless custom notes were created with the original subscription.
   */
  vatReverseChargeNotes: string | null;
  /**
   * This will default to the Terms and Conditions text specified on the Invoice Settings page in your Recurly admin. Specify custom notes to add or override Terms and Conditions.
   */
  termsAndConditions: string | null;
  /**
   * This will default to the Customer Notes text specified on the Invoice Settings. Specify custom notes to add or override Customer Notes.
   */
  customerNotes: string | null;
  lineItems: LineItemList | null;
  /**
   * Transactions
   */
  transactions: Transaction[] | null;
  /**
   * Credit payments
   */
  creditPayments: CreditPayment[] | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Date invoice is due. This is the date the net terms are reached.
   */
  dueAt: Date | null;
  /**
   * Date invoice was marked paid or failed.
   */
  closedAt: Date | null;

}

export interface InvoiceAddress {
  /**
   * Name on account
   */
  nameOnAccount: string | null;
  /**
   * Company
   */
  company: string | null;
  /**
   * First name
   */
  firstName: string | null;
  /**
   * Last name
   */
  lastName: string | null;
  /**
   * Phone number
   */
  phone: string | null;
  /**
   * Street 1
   */
  street1: string | null;
  /**
   * Street 2
   */
  street2: string | null;
  /**
   * City
   */
  city: string | null;
  /**
   * State or province.
   */
  region: string | null;
  /**
   * Zip or postal code.
   */
  postalCode: string | null;
  /**
   * Country, 2-letter ISO code.
   */
  country: string | null;

}

export interface TaxInfo {
  /**
   * Provides the tax type as "vat" for EU VAT, "usst" for U.S. Sales Tax, or the 2 letter country code for country level tax types like Canada, Australia, New Zealand, Israel, and all non-EU European countries.
   */
  type: string | null;
  /**
   * Provides the tax region applied on an invoice. For U.S. Sales Tax, this will be the 2 letter state code. For EU VAT this will be the 2 letter country code. For all country level tax types, this will display the regional tax, like VAT, GST, or PST.
   */
  region: string | null;
  /**
   * Rate
   */
  rate: number | null;

}

export interface LineItemList {
  /**
   * Will always be List.
   */
  object: string | null;
  /**
   * Indicates there are more results on subsequent pages.
   */
  hasMore: boolean | null;
  /**
   * Path to subsequent page of results.
   */
  next: string | null;
  data: LineItem[] | null;

}

export interface LineItem {
  /**
   * Line item ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid: string | null;
  /**
   * Charges are positive line items that debit the account. Credits are negative line items that credit the account.
   */
  type: string | null;
  /**
   * Unique code to identify an item. Available when the Credit Invoices and Subscription Billing Terms features are enabled.
   */
  itemCode: string | null;
  /**
   * System-generated unique identifier for an item. Available when the Credit Invoices and Subscription Billing Terms features are enabled.
   */
  itemId: string | null;
  /**
   * Optional Stock Keeping Unit assigned to an item. Available when the Credit Invoices and Subscription Billing Terms features are enabled.
   */
  externalSku: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType: string | null;
  /**
   * Pending line items are charges or credits on an account that have not been applied to an invoice yet. Invoiced line items will always have an `invoice_id` value.
   */
  state: string | null;
  /**
   * Category to describe the role of a line item on a legacy invoice: - "charges" refers to charges being billed for on this invoice. - "credits" refers to refund or proration credits. This portion of the invoice can be considered a credit memo. - "applied_credits" refers to previous credits applied to this invoice. See their original_line_item_id to determine where the credit first originated. - "carryforwards" can be ignored. They exist to consume any remaining credit balance. A new credit with the same amount will be created and placed back on the account. 
   */
  legacyCategory: string | null;
  /**
   * Account mini details
   */
  account: AccountMini | null;
  /**
   * If the line item is a charge or credit for a subscription, this is its ID.
   */
  subscriptionId: string | null;
  /**
   * If the line item is a charge or credit for a plan or add-on, this is the plan's ID.
   */
  planId: string | null;
  /**
   * If the line item is a charge or credit for a plan or add-on, this is the plan's code.
   */
  planCode: string | null;
  /**
   * If the line item is a charge or credit for an add-on this is its ID.
   */
  addOnId: string | null;
  /**
   * If the line item is a charge or credit for an add-on, this is its code.
   */
  addOnCode: string | null;
  /**
   * Once the line item has been invoiced this will be the invoice's ID.
   */
  invoiceId: string | null;
  /**
   * Once the line item has been invoiced this will be the invoice's number. If VAT taxation and the Country Invoice Sequencing feature are enabled, invoices will have country-specific invoice numbers for invoices billed to EU countries (ex: FR1001). Non-EU invoices will continue to use the site-level invoice number sequence.
   */
  invoiceNumber: string | null;
  /**
   * Will only have a value if the line item is a credit created from a previous credit, or if the credit was created from a charge refund.
   */
  previousLineItemId: string | null;
  /**
   * The invoice where the credit originated. Will only have a value if the line item is a credit created from a previous credit, or if the credit was created from a charge refund.
   */
  originalLineItemInvoiceId: string | null;
  /**
   * A credit created from an original charge will have the value of the charge's origin.
   */
  origin: string | null;
  /**
   * Internal accounting code to help you reconcile your revenue to the correct ledger. Line items created as part of a subscription invoice will use the plan or add-on's accounting code, otherwise the value will only be present if you define an accounting code when creating the line item.
   */
  accountingCode: string | null;
  /**
   * For plan-related line items this will be the plan's code, for add-on related line items it will be the add-on's code. For item-related line itmes it will be the item's `external_sku`.
   */
  productCode: string | null;
  /**
   * The reason the credit was given when line item is `type=credit`.
   */
  creditReasonCode: string | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * `(quantity * unit_amount) - (discount + tax)`
   */
  amount: number | null;
  /**
   * Description that appears on the invoice. For subscription related items this will be filled in automatically.
   */
  description: string | null;
  /**
   * This number will be multiplied by the unit amount to compute the subtotal before any discounts or taxes.
   */
  quantity: number | null;
  /**
   * Positive amount for a charge, negative amount for a credit.
   */
  unitAmount: number | null;
  /**
   * `quantity * unit_amount`
   */
  subtotal: number | null;
  /**
   * The discount applied to the line item.
   */
  discount: number | null;
  /**
   * The tax amount for the line item.
   */
  tax: number | null;
  /**
   * `true` if the line item is taxable, `false` if it is not.
   */
  taxable: boolean | null;
  /**
   * `true` exempts tax on charges, `false` applies tax on charges. If not defined, then defaults to the Plan and Site settings. This attribute does not work for credits (negative line items). Credits are always applied post-tax. Pre-tax discounts should use the Coupons feature.
   */
  taxExempt: boolean | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode: string | null;
  /**
   * Tax info
   */
  taxInfo: TaxInfo | null;
  /**
   * When a line item has been prorated, this is the rate of the proration. Proration rates were made available for line items created after March 30, 2017. For line items created prior to that date, the proration rate will be `null`, even if the line item was prorated.
   */
  prorationRate: number | null;
  /**
   * Refund?
   */
  refund: boolean | null;
  /**
   * For refund charges, the quantity being refunded. For non-refund charges, the total quantity refunded (possibly over multiple refunds).
   */
  refundedQuantity: number | null;
  /**
   * The amount of credit from this line item that was applied to the invoice.
   */
  creditApplied: number | null;
  shippingAddress: ShippingAddress | null;
  /**
   * If an end date is present, this is value indicates the beginning of a billing time range. If no end date is present it indicates billing for a specific date.
   */
  startDate: Date | null;
  /**
   * If this date is provided, it indicates the end of a time range.
   */
  endDate: Date | null;
  /**
   * When the line item was created.
   */
  createdAt: Date | null;
  /**
   * When the line item was last changed.
   */
  updatedAt: Date | null;

}

export interface InvoiceCollection {
  /**
   * Object type
   */
  object: string | null;
  chargeInvoice: Invoice | null;
  /**
   * Credit invoices
   */
  creditInvoices: Invoice[] | null;

}

export interface AccountNote {
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  accountId: string | null;
  user: User | null;
  message: string | null;
  createdAt: Date | null;

}

export interface User {
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  timeZone: string | null;
  createdAt: Date | null;
  deletedAt: Date | null;

}

export interface Subscription {
  /**
   * Subscription ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
   */
  uuid: string | null;
  /**
   * Account mini details
   */
  account: AccountMini | null;
  /**
   * Just the important parts.
   */
  plan: PlanMini | null;
  /**
   * State
   */
  state: string | null;
  /**
   * Subscription shipping details
   */
  shipping: SubscriptionShipping | null;
  /**
   * Coupon redemptions
   */
  couponRedemptions: CouponRedemptionMini[] | null;
  /**
   * Subscription Change
   */
  pendingChange: SubscriptionChange | null;
  /**
   * Current billing period started at
   */
  currentPeriodStartedAt: Date | null;
  /**
   * Current billing period ends at
   */
  currentPeriodEndsAt: Date | null;
  /**
   * The start date of the term when the first billing period starts. The subscription term is the length of time that a customer will be committed to a subscription. A term can span multiple billing periods.
   */
  currentTermStartedAt: Date | null;
  /**
   * When the term ends. This is calculated by a plan's interval and `total_billing_cycles` in a term. Subscription changes with a `timeframe=renewal` will be applied on this date.
   */
  currentTermEndsAt: Date | null;
  /**
   * Trial period started at
   */
  trialStartedAt: Date | null;
  /**
   * Trial period ends at
   */
  trialEndsAt: Date | null;
  /**
   * The remaining billing cycles in the current term.
   */
  remainingBillingCycles: number | null;
  /**
   * The number of cycles/billing periods in a term. When `remaining_billing_cycles=0`, if `auto_renew=true` the subscription will renew and a new term will begin, otherwise the subscription will expire.
   */
  totalBillingCycles: number | null;
  /**
   * If `auto_renew=true`, when a term completes, `total_billing_cycles` takes this value as the length of subsequent terms. Defaults to the plan's `total_billing_cycles`.
   */
  renewalBillingCycles: number | null;
  /**
   * Whether the subscription renews at the end of its term.
   */
  autoRenew: boolean | null;
  /**
   * Null unless subscription is paused or will pause at the end of the current billing period.
   */
  pausedAt: Date | null;
  /**
   * Null unless subscription is paused or will pause at the end of the current billing period.
   */
  remainingPauseCycles: number | null;
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType: string | null;
  /**
   * Subscription unit price
   */
  unitAmount: number | null;
  /**
   * Subscription quantity
   */
  quantity: number | null;
  /**
   * Add-ons
   */
  addOns: SubscriptionAddOn[] | null;
  /**
   * Total price of add-ons
   */
  addOnsTotal: number | null;
  /**
   * Estimated total, before tax.
   */
  subtotal: number | null;
  /**
   * Collection method
   */
  collectionMethod: string | null;
  /**
   * For manual invoicing, this identifies the PO number associated with the subscription.
   */
  poNumber: string | null;
  /**
   * Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
   */
  netTerms: number | null;
  /**
   * Terms and conditions
   */
  termsAndConditions: string | null;
  /**
   * Customer notes
   */
  customerNotes: string | null;
  /**
   * Expiration reason
   */
  expirationReason: string | null;
  /**
   * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
   */
  customFields: CustomField[] | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Activated at
   */
  activatedAt: Date | null;
  /**
   * Canceled at
   */
  canceledAt: Date | null;
  /**
   * Expires at
   */
  expiresAt: Date | null;
  /**
   * Recurring subscriptions paid with ACH will have this attribute set. This timestamp is used for alerting customers to reauthorize in 3 years in accordance with NACHA rules. If a subscription becomes inactive or the billing info is no longer a bank account, this timestamp is cleared.
   */
  bankAccountAuthorizedAt: Date | null;

}

export interface SubscriptionShipping {
  /**
   * Object type
   */
  object: string | null;
  address: ShippingAddress | null;
  method: ShippingMethodMini | null;
  /**
   * Subscription's shipping cost
   */
  amount: number | null;

}

export interface ShippingMethodMini {
  /**
   * Shipping Method ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The internal name used identify the shipping method.
   */
  code: string | null;
  /**
   * The name of the shipping method displayed to customers.
   */
  name: string | null;

}

export interface CouponRedemptionMini {
  /**
   * Coupon Redemption ID
   */
  id: string | null;
  /**
   * Will always be `coupon`.
   */
  object: string | null;
  coupon: CouponMini | null;
  /**
   * Invoice state
   */
  state: string | null;
  /**
   * The amount that was discounted upon the application of the coupon, formatted with the currency.
   */
  discounted: number | null;
  /**
   * Created at
   */
  createdAt: Date | null;

}

export interface CouponMini {
  /**
   * Coupon ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The code the customer enters to redeem the coupon.
   */
  code: string | null;
  /**
   * The internal name for the coupon.
   */
  name: string | null;
  /**
   * Indicates if the coupon is redeemable, and if it is not, why.
   */
  state: string | null;
  /**
   * Details of the discount a coupon applies. Will contain a `type` property and one of the following properties: `percent`, `fixed`, `trial`. 
   */
  discount: CouponDiscount | null;
  /**
   * Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
   */
  couponType: string | null;
  /**
   * The date and time the coupon was expired early or reached its `max_redemptions`.
   */
  expiredAt: Date | null;

}

export interface SubscriptionChange {
  /**
   * The ID of the Subscription Change.
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The ID of the subscription that is going to be changed.
   */
  subscriptionId: string | null;
  /**
   * Just the important parts.
   */
  plan: PlanMini | null;
  /**
   * These add-ons will be used when the subscription renews.
   */
  addOns: SubscriptionAddOn[] | null;
  /**
   * Unit amount
   */
  unitAmount: number | null;
  /**
   * Subscription quantity
   */
  quantity: number | null;
  /**
   * Subscription shipping details
   */
  shipping: SubscriptionShipping | null;
  /**
   * Activated at
   */
  activateAt: Date | null;
  /**
   * Returns `true` if the subscription change is activated.
   */
  activated: boolean | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType: string | null;
  /**
   * Setup fee revenue schedule type
   */
  setupFeeRevenueScheduleType: string | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Updated at
   */
  updatedAt: Date | null;
  /**
   * Deleted at
   */
  deletedAt: Date | null;

}

export interface SubscriptionAddOn {
  /**
   * Subscription Add-on ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Subscription ID
   */
  subscriptionId: string | null;
  /**
   * Just the important parts.
   */
  addOn: AddOnMini | null;
  /**
   * Add-on quantity
   */
  quantity: number | null;
  /**
   * This is priced in the subscription's currency.
   */
  unitAmount: number | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Updated at
   */
  updatedAt: Date | null;
  /**
   * Expired at
   */
  expiredAt: Date | null;

}

export interface AddOnMini {
  /**
   * Add-on ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The unique identifier for the add-on within its plan.
   */
  code: string | null;
  /**
   * Describes your add-on and will appear in subscribers' invoices.
   */
  name: string | null;
  /**
   * Item ID
   */
  itemId: string | null;
  /**
   * Optional, stock keeping unit to link the item to other inventory systems.
   */
  externalSku: string | null;
  /**
   * Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
   */
  accountingCode: string | null;

}

export interface UniqueCouponCode {
  /**
   * Unique Coupon Code ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The code the customer enters to redeem the coupon.
   */
  code: string | null;
  /**
   * Indicates if the unique coupon code is redeemable or why not.
   */
  state: string | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Updated at
   */
  updatedAt: Date | null;
  /**
   * The date and time the unique coupon code was redeemed.
   */
  redeemedAt: Date | null;
  /**
   * The date and time the coupon was expired early or reached its `max_redemptions`.
   */
  expiredAt: Date | null;

}

export interface CustomFieldDefinition {
  /**
   * Custom field definition ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Related Recurly object type
   */
  relatedType: string | null;
  /**
   * Used by the API to identify the field or reading and writing. The name can only be used once per Recurly object type.
   */
  name: string | null;
  /**
   * The access control applied inside Recurly's admin UI: - `api_only` - No one will be able to view or edit this field's data via the admin UI. - `read_only` - Users with the Customers role will be able to view this field's data via the admin UI, but   editing will only be available via the API. - `write` - Users with the Customers role will be able to view and edit this field's data via the admin UI. 
   */
  userAccess: string | null;
  /**
   * Used to label the field when viewing and editing the field in Recurly's admin UI.
   */
  displayName: string | null;
  /**
   * Displayed as a tooltip when editing the field in the Recurly admin UI.
   */
  tooltip: string | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Definitions are initially soft deleted, and once all the values are removed from the accouts or subscriptions, will be hard deleted an no longer visible.
   */
  deletedAt: Date | null;

}

export interface Item {
  /**
   * Item ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Unique code to identify the item.
   */
  code: string | null;
  /**
   * The current state of the item.
   */
  state: string | null;
  /**
   * This name describes your item and will appear on the invoice when it's purchased on a one time basis.
   */
  name: string | null;
  /**
   * Optional, description.
   */
  description: string | null;
  /**
   * Optional, stock keeping unit to link the item to other inventory systems.
   */
  externalSku: string | null;
  /**
   * Accounting code for invoice line items.
   */
  accountingCode: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType: string | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode: string | null;
  /**
   * `true` exempts tax on the item, `false` applies tax on the item.
   */
  taxExempt: boolean | null;
  /**
   * The custom fields will only be altered when they are included in a request. Sending an empty array will not remove any existing values. To remove a field send the name with a null or empty value.
   */
  customFields: CustomField[] | null;
  /**
   * Item Pricing
   */
  currencies: Pricing[] | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Deleted at
   */
  deletedAt: Date | null;

}

export interface Pricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Unit price
   */
  unitAmount: number | null;

}

export interface BinaryFile {
  data: string | null;

}

export interface Plan {
  /**
   * Plan ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Unique code to identify the plan. This is used in Hosted Payment Page URLs and in the invoice exports.
   */
  code: string | null;
  /**
   * The current state of the plan.
   */
  state: string | null;
  /**
   * This name describes your plan and will appear on the Hosted Payment Page and the subscriber's invoice.
   */
  name: string | null;
  /**
   * Optional description, not displayed.
   */
  description: string | null;
  /**
   * Unit for the plan's billing interval.
   */
  intervalUnit: string | null;
  /**
   * Length of the plan's billing interval in `interval_unit`.
   */
  intervalLength: number | null;
  /**
   * Units for the plan's trial period.
   */
  trialUnit: string | null;
  /**
   * Length of plan's trial period in `trial_units`. `0` means `no trial`.
   */
  trialLength: number | null;
  /**
   * Automatically terminate subscriptions after a defined number of billing cycles. Number of billing cycles before the plan automatically stops renewing, defaults to `null` for continuous, automatic renewal.
   */
  totalBillingCycles: number | null;
  /**
   * Subscriptions will automatically inherit this value once they are active. If `auto_renew` is `true`, then a subscription will automatically renew its term at renewal. If `auto_renew` is `false`, then a subscription will expire at the end of its term. `auto_renew` can be overridden on the subscription record itself.
   */
  autoRenew: boolean | null;
  /**
   * Accounting code for invoice line items for the plan. If no value is provided, it defaults to plan's code.
   */
  accountingCode: string | null;
  /**
   * Revenue schedule type
   */
  revenueScheduleType: string | null;
  /**
   * Setup fee revenue schedule type
   */
  setupFeeRevenueScheduleType: string | null;
  /**
   * Accounting code for invoice line items for the plan's setup fee. If no value is provided, it defaults to plan's accounting code.
   */
  setupFeeAccountingCode: string | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode: string | null;
  /**
   * `true` exempts tax on the plan, `false` applies tax on the plan.
   */
  taxExempt: boolean | null;
  /**
   * Pricing
   */
  currencies: PlanPricing[] | null;
  /**
   * Hosted pages settings
   */
  hostedPages: PlanHostedPages | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Deleted at
   */
  deletedAt: Date | null;

}

export interface PlanPricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Amount of one-time setup fee automatically charged at the beginning of a subscription billing cycle. For subscription plans with a trial, the setup fee will be charged at the time of signup. Setup fees do not increase with the quantity of a subscription plan.
   */
  setupFee: number | null;
  /**
   * Unit price
   */
  unitAmount: number | null;

}

export interface PlanHostedPages {
  /**
   * URL to redirect to after signup on the hosted payment pages.
   */
  successUrl: string | null;
  /**
   * URL to redirect to on canceled signup on the hosted payment pages.
   */
  cancelUrl: string | null;
  /**
   * If `true`, the customer will be sent directly to your `success_url` after a successful signup, bypassing Recurly's hosted confirmation page.
   */
  bypassConfirmation: boolean | null;
  /**
   * Determines if the quantity field is displayed on the hosted pages for the plan.
   */
  displayQuantity: boolean | null;

}

export interface AddOn {
  /**
   * Add-on ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Plan ID
   */
  planId: string | null;
  /**
   * The unique identifier for the add-on within its plan.
   */
  code: string | null;
  /**
   * Add-ons can be either active or inactive.
   */
  state: string | null;
  /**
   * Describes your add-on and will appear in subscribers' invoices.
   */
  name: string | null;
  /**
   * Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
   */
  accountingCode: string | null;
  /**
   * When this add-on is invoiced, the line item will use this revenue schedule. If `item_code`/`item_id` is part of the request then `revenue_schedule_type` must be absent in the request as the value will be set from the item.
   */
  revenueScheduleType: string | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
   */
  taxCode: string | null;
  /**
   * Determines if the quantity field is displayed on the hosted pages for the add-on.
   */
  displayQuantity: boolean | null;
  /**
   * Default quantity for the hosted pages.
   */
  defaultQuantity: number | null;
  /**
   * Whether the add-on is optional for the customer to include in their purchase on the hosted payment page. If false, the add-on will be included when a subscription is created through the Recurly UI. However, the add-on will not be included when a subscription is created through the API.
   */
  optional: boolean | null;
  /**
   * Add-on pricing
   */
  currencies: AddOnPricing[] | null;
  /**
   * Just the important parts.
   */
  item: ItemMini | null;
  /**
   * Optional, stock keeping unit to link the item to other inventory systems.
   */
  externalSku: string | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Deleted at
   */
  deletedAt: Date | null;

}

export interface AddOnPricing {
  /**
   * 3-letter ISO 4217 currency code.
   */
  currency: string | null;
  /**
   * Unit price
   */
  unitAmount: number | null;

}

export interface ItemMini {
  /**
   * Item ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * Unique code to identify the item.
   */
  code: string | null;
  /**
   * The current state of the item.
   */
  state: string | null;
  /**
   * This name describes your item and will appear on the invoice when it's purchased on a one time basis.
   */
  name: string | null;
  /**
   * Optional, description.
   */
  description: string | null;

}

export interface ShippingMethod {
  /**
   * Shipping Method ID
   */
  id: string | null;
  /**
   * Object type
   */
  object: string | null;
  /**
   * The internal name used identify the shipping method.
   */
  code: string | null;
  /**
   * The name of the shipping method displayed to customers.
   */
  name: string | null;
  /**
   * Used by Avalara, Vertex, and Recurly’s built-in tax feature. The tax code values are specific to each tax system. If you are using Recurly’s built-in taxes the values are:  - `FR` – Common Carrier FOB Destination - `FR022000` – Common Carrier FOB Origin - `FR020400` – Non Common Carrier FOB Destination - `FR020500` – Non Common Carrier FOB Origin - `FR010100` – Delivery by Company Vehicle Before Passage of Title - `FR010200` – Delivery by Company Vehicle After Passage of Title - `NT` – Non-Taxable 
   */
  taxCode: string | null;
  /**
   * Created at
   */
  createdAt: Date | null;
  /**
   * Last updated at
   */
  updatedAt: Date | null;
  /**
   * Deleted at
   */
  deletedAt: Date | null;

}



export interface Empty {
}

export declare class Pager<T> {
  count(): number;
  first(): T;
  each(): AsyncIterable<T>;
  eachPage(): AsyncIterable<T>;
}

export declare class Client {
  constructor(apiKey: string);
  apiVersion(): string;
  /**
   * List sites
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_sites
   *
   * @example
   * const sites = client.listSites({ limit: 200 })
   * 
   * for await (const site of sites.each()) {
   *   console.log(site.subdomain)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @return {Pager<Site>} A list of sites.
   */
  listSites(params?: object): Pager<Site>;
  /**
   * Fetch a site
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_site
   *
   * 
   * @param siteId - Site ID or subdomain. For ID no prefix is used e.g. `e28zov4fw0v2`. For subdomain use prefix `subdomain-`, e.g. `subdomain-recurly`.
   * @return {Promise<Site>} A site.
   */
  getSite(siteId: string): Promise<Site>;
  /**
   * List a site's accounts
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_accounts
   *
   * @example
   * const accounts = client.listAccounts({ limit: 200 })
   * 
   * for await (const account of accounts.each()) {
   *   console.log(account.code)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *   
   * @param params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of the site's accounts.
   */
  listAccounts(params?: object): Pager<Account>;
  /**
   * Create an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_account
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
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountCreate}
   * @return {Promise<Account>} An account.
   */
  createAccount(body: object): Promise<Account>;
  /**
   * Fetch an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_account
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  getAccount(accountId: string): Promise<Account>;
  /**
   * Modify an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_account
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountUpdate}
   * @return {Promise<Account>} An account.
   */
  updateAccount(accountId: string, body: object): Promise<Account>;
  /**
   * Deactivate an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/deactivate_account
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  deactivateAccount(accountId: string): Promise<Account>;
  /**
   * Fetch an account's acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_account_acquisition
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<AccountAcquisition>} An account's acquisition data.
   */
  getAccountAcquisition(accountId: string): Promise<AccountAcquisition>;
  /**
   * Update an account's acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_account_acquisition
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountAcquisitionUpdatable}
   * @return {Promise<AccountAcquisition>} An account's updated acquisition data.
   */
  updateAccountAcquisition(accountId: string, body: object): Promise<AccountAcquisition>;
  /**
   * Remove an account's acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_account_acquisition
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Empty>} Acquisition data was succesfully deleted.
   */
  removeAccountAcquisition(accountId: string): Promise<Empty>;
  /**
   * Reactivate an inactive account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/reactivate_account
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  reactivateAccount(accountId: string): Promise<Account>;
  /**
   * Fetch an account's balance and past due status
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_account_balance
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<AccountBalance>} An account's balance.
   */
  getAccountBalance(accountId: string): Promise<AccountBalance>;
  /**
   * Fetch an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_billing_info
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<BillingInfo>} An account's billing information.
   */
  getBillingInfo(accountId: string): Promise<BillingInfo>;
  /**
   * Set an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_billing_info
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  updateBillingInfo(accountId: string, body: object): Promise<BillingInfo>;
  /**
   * Remove an account's billing information
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_billing_info
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Empty>} Billing information deleted
   */
  removeBillingInfo(accountId: string): Promise<Empty>;
  /**
   * Show the coupon redemptions for an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_coupon_redemptions
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on an account.
   */
  listAccountCouponRedemptions(accountId: string, params?: object): Pager<CouponRedemption>;
  /**
   * Show the coupon redemption that is active on an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_active_coupon_redemption
   *
   * @example
   * try {
   *   const redemption = await client.getActiveCouponRedemption(accountId)
   *   console.log('Fetched coupon redemption: ', redemption.id)
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<CouponRedemption>} An active coupon redemption on an account.
   */
  getActiveCouponRedemption(accountId: string): Promise<CouponRedemption>;
  /**
   * Generate an active coupon redemption on an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_coupon_redemption
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponRedemptionCreate}
   * @return {Promise<CouponRedemption>} Returns the new coupon redemption.
   */
  createCouponRedemption(accountId: string, body: object): Promise<CouponRedemption>;
  /**
   * Delete the active coupon redemption from an account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_coupon_redemption
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<CouponRedemption>} Coupon redemption deleted.
   */
  removeCouponRedemption(accountId: string): Promise<CouponRedemption>;
  /**
   * List an account's credit payments
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_credit_payments
   *
   * @example
   * const payments = client.listAccountCreditPayments(accountId, { limit: 200 })
   * 
   * for await (const payment of payments.each()) {
   *   console.log(payment.uuid)
   * }
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CreditPayment>} A list of the account's credit payments.
   */
  listAccountCreditPayments(accountId: string, params?: object): Pager<CreditPayment>;
  /**
   * List an account's invoices
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_invoices
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *   
   * @return {Pager<Invoice>} A list of the account's invoices.
   */
  listAccountInvoices(accountId: string, params?: object): Pager<Invoice>;
  /**
   * Create an invoice for pending line items
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_invoice
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the new invoices.
   */
  createInvoice(accountId: string, body: object): Promise<InvoiceCollection>;
  /**
   * Preview new invoice for pending line items
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/preview_invoice
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the invoice previews.
   */
  previewInvoice(accountId: string, body: object): Promise<InvoiceCollection>;
  /**
   * List an account's line items
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_line_items
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.original - Filter by original field.
   * @param params.state - Filter by state field.
   * @param params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the account's line items.
   */
  listAccountLineItems(accountId: string, params?: object): Pager<LineItem>;
  /**
   * Create a new line item for the account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_line_item
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {LineItemCreate}
   * @return {Promise<LineItem>} Returns the new line item.
   */
  createLineItem(accountId: string, body: object): Promise<LineItem>;
  /**
   * Fetch a list of an account's notes
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_notes
   *
   * @example
   * const notes = client.listAccountNotes(accountId, { limit: 200 })
   * 
   * for await (const note of notes.each()) {
   *   console.log(note.message)
   * }
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
  listAccountNotes(accountId: string, params?: object): Pager<AccountNote>;
  /**
   * Fetch an account note
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_account_note
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param accountNoteId - Account Note ID.
   * @return {Promise<AccountNote>} An account note.
   */
  getAccountNote(accountId: string, accountNoteId: string): Promise<AccountNote>;
  /**
   * Fetch a list of an account's shipping addresses
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_shipping_addresses
   *
   * @example
   * const addresses = client.listShippingAddresses(accountId, { limit: 200 })
   * 
   * for await (const address of addresses.each()) {
   *   console.log(address.street1)
   * }
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<ShippingAddress>} A list of an account's shipping addresses.
   */
  listShippingAddresses(accountId: string, params?: object): Pager<ShippingAddress>;
  /**
   * Create a new shipping address for the account
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_shipping_address
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressCreate}
   * @return {Promise<ShippingAddress>} Returns the new shipping address.
   */
  createShippingAddress(accountId: string, body: object): Promise<ShippingAddress>;
  /**
   * Fetch an account's shipping address
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_shipping_address
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param shippingAddressId - Shipping Address ID.
   * @return {Promise<ShippingAddress>} A shipping address.
   */
  getShippingAddress(accountId: string, shippingAddressId: string): Promise<ShippingAddress>;
  /**
   * Update an account's shipping address
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_shipping_address
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param shippingAddressId - Shipping Address ID.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressUpdate}
   * @return {Promise<ShippingAddress>} The updated shipping address.
   */
  updateShippingAddress(accountId: string, shippingAddressId: string, body: object): Promise<ShippingAddress>;
  /**
   * Remove an account's shipping address
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_shipping_address
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
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param shippingAddressId - Shipping Address ID.
   * @return {Promise<Empty>} Shipping address deleted.
   */
  removeShippingAddress(accountId: string, shippingAddressId: string): Promise<Empty>;
  /**
   * List an account's subscriptions
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_subscriptions
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.state - Filter by state.
   *   
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *   
   * @return {Pager<Subscription>} A list of the account's subscriptions.
   */
  listAccountSubscriptions(accountId: string, params?: object): Pager<Subscription>;
  /**
   * List an account's transactions
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_transactions
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the account's transactions.
   */
  listAccountTransactions(accountId: string, params?: object): Pager<Transaction>;
  /**
   * List an account's child accounts
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_child_accounts
   *
   * 
   * @param accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *   
   * @param params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of an account's child accounts.
   */
  listChildAccounts(accountId: string, params?: object): Pager<Account>;
  /**
   * List a site's account acquisition data
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_account_acquisition
   *
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<AccountAcquisition>} A list of the site's account acquisition data.
   */
  listAccountAcquisition(params?: object): Pager<AccountAcquisition>;
  /**
   * List a site's coupons
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_coupons
   *
   * @example
   * const coupons = client.listCoupons({ limit: 200 })
   * 
   * for await (const coupon of coupons.each()) {
   *   console.log(coupon.code)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<Coupon>} A list of the site's coupons.
   */
  listCoupons(params?: object): Pager<Coupon>;
  /**
   * Create a new coupon
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_coupon
   *
   * 
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponCreate}
   * @return {Promise<Coupon>} A new coupon.
   */
  createCoupon(body: object): Promise<Coupon>;
  /**
   * Fetch a coupon
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_coupon
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
   * @param couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @return {Promise<Coupon>} A coupon.
   */
  getCoupon(couponId: string): Promise<Coupon>;
  /**
   * Update an active coupon
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_coupon
   *
   * 
   * @param couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return {Promise<Coupon>} The updated coupon.
   */
  updateCoupon(couponId: string, body: object): Promise<Coupon>;
  /**
   * Expire a coupon
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/deactivate_coupon
   *
   * 
   * @param couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @return {Promise<Coupon>} The expired Coupon
   */
  deactivateCoupon(couponId: string): Promise<Coupon>;
  /**
   * List unique coupon codes associated with a bulk coupon
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_unique_coupon_codes
   *
   * 
   * @param couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<UniqueCouponCode>} A list of unique coupon codes that were generated
   */
  listUniqueCouponCodes(couponId: string, params?: object): Pager<UniqueCouponCode>;
  /**
   * List a site's credit payments
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_credit_payments
   *
   * @example
   * const payments = client.listCreditPayments({ limit: 200 })
   * 
   * for await (const payment of payments.each()) {
   *   console.log(payment.uuid)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CreditPayment>} A list of the site's credit payments.
   */
  listCreditPayments(params?: object): Pager<CreditPayment>;
  /**
   * Fetch a credit payment
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_credit_payment
   *
   * 
   * @param creditPaymentId - Credit Payment ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<CreditPayment>} A credit payment.
   */
  getCreditPayment(creditPaymentId: string): Promise<CreditPayment>;
  /**
   * List a site's custom field definitions
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_custom_field_definitions
   *
   * @example
   * const definitions = client.listCustomFieldDefinitions({ limit: 200 })
   * 
   * for await (const definition of definitions.each()) {
   *   console.log(definition.displayName)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.relatedType - Filter by related type.
   * @return {Pager<CustomFieldDefinition>} A list of the site's custom field definitions.
   */
  listCustomFieldDefinitions(params?: object): Pager<CustomFieldDefinition>;
  /**
   * Fetch an custom field definition
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_custom_field_definition
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
   * @param customFieldDefinitionId - Custom Field Definition ID
   * @return {Promise<CustomFieldDefinition>} An custom field definition.
   */
  getCustomFieldDefinition(customFieldDefinitionId: string): Promise<CustomFieldDefinition>;
  /**
   * List a site's items
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_items
   *
   * @example
   * const items = client.listItems({ limit: 200 })
   * 
   * for await (const item of items.each()) {
   *   console.log(item.code)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.state - Filter by state.
   * @return {Pager<Item>} A list of the site's items.
   */
  listItems(params?: object): Pager<Item>;
  /**
   * Create a new item
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_item
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
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {ItemCreate}
   * @return {Promise<Item>} A new item.
   */
  createItem(body: object): Promise<Item>;
  /**
   * Fetch an item
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_item
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
   * @param itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  getItem(itemId: string): Promise<Item>;
  /**
   * Update an active item
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_item
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
   * @param itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {ItemUpdate}
   * @return {Promise<Item>} The updated item.
   */
  updateItem(itemId: string, body: object): Promise<Item>;
  /**
   * Deactivate an item
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/deactivate_item
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
   * @param itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  deactivateItem(itemId: string): Promise<Item>;
  /**
   * Reactivate an inactive item
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/reactivate_item
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
   * @param itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  reactivateItem(itemId: string): Promise<Item>;
  /**
   * List a site's invoices
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_invoices
   *
   * @example
   * const invoices = client.listInvoices({ limit: 200 })
   * 
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *   
   * @return {Pager<Invoice>} A list of the site's invoices.
   */
  listInvoices(params?: object): Pager<Invoice>;
  /**
   * Fetch an invoice
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_invoice
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} An invoice.
   */
  getInvoice(invoiceId: string): Promise<Invoice>;
  /**
   * Update an invoice
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/put_invoice
   *
   * @example
   * try {
   *   const invoiceUpdate = {
   *     customerNotes: "New notes",
   *     termsAndConditions: "New terms and conditions"
   *   }
   * 
   *   const invoice = await client.putInvoice(invoiceId, invoiceUpdate)
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceUpdatable}
   * @return {Promise<Invoice>} An invoice.
   */
  putInvoice(invoiceId: string, body: object): Promise<Invoice>;
  /**
   * Fetch an invoice as a PDF
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_invoice_pdf
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<BinaryFile>} An invoice as a PDF.
   */
  getInvoicePdf(invoiceId: string): Promise<BinaryFile>;
  /**
   * Collect a pending or past due, automatic invoice
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/collect_invoice
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCollect}
   * @return {Promise<Invoice>} The updated invoice.
   */
  collectInvoice(invoiceId: string, params?: object): Promise<Invoice>;
  /**
   * Mark an open invoice as failed
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/fail_invoice
   *
   * @example
   * try {
   *   const invoice = await client.failInvoice(invoiceId)
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  failInvoice(invoiceId: string): Promise<Invoice>;
  /**
   * Mark an open invoice as successful
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/mark_invoice_successful
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  markInvoiceSuccessful(invoiceId: string): Promise<Invoice>;
  /**
   * Reopen a closed, manual invoice
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/reopen_invoice
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  reopenInvoice(invoiceId: string): Promise<Invoice>;
  /**
   * Void a credit invoice.
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/void_invoice
   *
   * 
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  voidInvoice(invoiceId: string): Promise<Invoice>;
  /**
   * List an invoice's line items
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_invoice_line_items
   *
   * 
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.original - Filter by original field.
   * @param params.state - Filter by state field.
   * @param params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the invoice's line items.
   */
  listInvoiceLineItems(invoiceId: string, params?: object): Pager<LineItem>;
  /**
   * Show the coupon redemptions applied to an invoice
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_invoice_coupon_redemptions
   *
   * 
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions associated with the invoice.
   */
  listInvoiceCouponRedemptions(invoiceId: string, params?: object): Pager<CouponRedemption>;
  /**
   * List an invoice's related credit or charge invoices
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_related_invoices
   *
   * @example
   * const invoices = client.listRelatedInvoices(invoiceId, { limit: 200 })
   * 
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   * 
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Pager<Invoice>} A list of the credit or charge invoices associated with the invoice.
   */
  listRelatedInvoices(invoiceId: string, params?: object): Pager<Invoice>;
  /**
   * Refund an invoice
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/refund_invoice
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
   * @param invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceRefund}
   * @return {Promise<Invoice>} Returns the new credit invoice.
   */
  refundInvoice(invoiceId: string, body: object): Promise<Invoice>;
  /**
   * List a site's line items
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_line_items
   *
   * @example
   * const lineItems = client.listLineItems({ limit: 200 })
   * 
   * for await (const item of lineItems.each()) {
   *   console.log(`Item ${item.id} for ${item.amount}`)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.original - Filter by original field.
   * @param params.state - Filter by state field.
   * @param params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the site's line items.
   */
  listLineItems(params?: object): Pager<LineItem>;
  /**
   * Fetch a line item
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_line_item
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
   * @param lineItemId - Line Item ID.
   * @return {Promise<LineItem>} A line item.
   */
  getLineItem(lineItemId: string): Promise<LineItem>;
  /**
   * Delete an uninvoiced line item
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_line_item
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
   * @param lineItemId - Line Item ID.
   * @return {Promise<Empty>} Line item deleted.
   */
  removeLineItem(lineItemId: string): Promise<Empty>;
  /**
   * List a site's plans
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_plans
   *
   * @example
   * const plans = client.listPlans({ limit: 200 })
   * 
   * for await (const plan of plans.each()) {
   *   console.log(plan.code)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.state - Filter by state.
   * @return {Pager<Plan>} A list of plans.
   */
  listPlans(params?: object): Pager<Plan>;
  /**
   * Create a plan
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_plan
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
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanCreate}
   * @return {Promise<Plan>} A plan.
   */
  createPlan(body: object): Promise<Plan>;
  /**
   * Fetch a plan
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_plan
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
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<Plan>} A plan.
   */
  getPlan(planId: string): Promise<Plan>;
  /**
   * Update a plan
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_plan
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
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanUpdate}
   * @return {Promise<Plan>} A plan.
   */
  updatePlan(planId: string, body: object): Promise<Plan>;
  /**
   * Remove a plan
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_plan
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
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<Plan>} Plan deleted
   */
  removePlan(planId: string): Promise<Plan>;
  /**
   * List a plan's add-ons
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_plan_add_ons
   *
   * 
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listPlanAddOns(planId: string, params?: object): Pager<AddOn>;
  /**
   * Create an add-on
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_plan_add_on
   *
   * 
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnCreate}
   * @return {Promise<AddOn>} An add-on.
   */
  createPlanAddOn(planId: string, body: object): Promise<AddOn>;
  /**
   * Fetch a plan's add-on
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_plan_add_on
   *
   * 
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} An add-on.
   */
  getPlanAddOn(planId: string, addOnId: string): Promise<AddOn>;
  /**
   * Update an add-on
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/update_plan_add_on
   *
   * 
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnUpdate}
   * @return {Promise<AddOn>} An add-on.
   */
  updatePlanAddOn(planId: string, addOnId: string, body: object): Promise<AddOn>;
  /**
   * Remove an add-on
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_plan_add_on
   *
   * 
   * @param planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} Add-on deleted
   */
  removePlanAddOn(planId: string, addOnId: string): Promise<AddOn>;
  /**
   * List a site's add-ons
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_add_ons
   *
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listAddOns(params?: object): Pager<AddOn>;
  /**
   * Fetch an add-on
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_add_on
   *
   * 
   * @param addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} An add-on.
   */
  getAddOn(addOnId: string): Promise<AddOn>;
  /**
   * List a site's shipping methods
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_shipping_methods
   *
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<ShippingMethod>} A list of the site's shipping methods.
   */
  listShippingMethods(params?: object): Pager<ShippingMethod>;
  /**
   * Fetch a shipping method
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_shipping_method
   *
   * 
   * @param id - Shipping Method ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-usps_2-day`.
   * @return {Promise<ShippingMethod>} A shipping_method.
   */
  getShippingMethod(id: string): Promise<ShippingMethod>;
  /**
   * List a site's subscriptions
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_subscriptions
   *
   * @example
   * const subscriptions = client.listSubscriptions({ limit: 200 })
   * 
   * for await (const subscription of subscriptions.each()) {
   *   console.log(subscription.uuid)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.state - Filter by state.
   *   
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *   
   * @return {Pager<Subscription>} A list of the site's subscriptions.
   */
  listSubscriptions(params?: object): Pager<Subscription>;
  /**
   * Create a new subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_subscription
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
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCreate}
   * @return {Promise<Subscription>} A subscription.
   */
  createSubscription(body: object): Promise<Subscription>;
  /**
   * Fetch a subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_subscription
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  getSubscription(subscriptionId: string): Promise<Subscription>;
  /**
   * Modify a subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/modify_subscription
   *
   * @example
   * try {
   *   const update = {
   *     termsAndConditions: "Some new terms and conditions",
   *     customerNotes: "Some new customer notes"
   *   }
   *   const subscription = await client.modifySubscription(subscriptionId, update)
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionUpdate}
   * @return {Promise<Subscription>} A subscription.
   */
  modifySubscription(subscriptionId: string, body: object): Promise<Subscription>;
  /**
   * Terminate a subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/terminate_subscription
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.refund - The type of refund to perform:
   *   
   *   * `full` - Performs a full refund of the last invoice for the current subscription term.
   *   * `partial` - Prorates a refund based on the amount of time remaining in the current bill cycle.
   *   * `none` - Terminates the subscription without a refund.
   *   
   *   In the event that the most recent invoice is a $0 invoice paid entirely by credit, Recurly will apply the credit back to the customer’s account.
   *   
   *   You may also terminate a subscription with no refund and then manually refund specific invoices.
   *   
   * @return {Promise<Subscription>} An expired subscription.
   */
  terminateSubscription(subscriptionId: string, params?: object): Promise<Subscription>;
  /**
   * Cancel a subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/cancel_subscription
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCancel}
   * @return {Promise<Subscription>} A canceled or failed subscription.
   */
  cancelSubscription(subscriptionId: string, params?: object): Promise<Subscription>;
  /**
   * Reactivate a canceled subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/reactivate_subscription
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} An active subscription.
   */
  reactivateSubscription(subscriptionId: string): Promise<Subscription>;
  /**
   * Pause subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/pause_subscription
   *
   * 
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionPause}
   * @return {Promise<Subscription>} A subscription.
   */
  pauseSubscription(subscriptionId: string, body: object): Promise<Subscription>;
  /**
   * Resume subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/resume_subscription
   *
   * 
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  resumeSubscription(subscriptionId: string): Promise<Subscription>;
  /**
   * Convert trial subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/convert_trial
   *
   * 
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  convertTrial(subscriptionId: string): Promise<Subscription>;
  /**
   * Fetch a subscription's pending change
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_subscription_change
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<SubscriptionChange>} A subscription's pending change.
   */
  getSubscriptionChange(subscriptionId: string): Promise<SubscriptionChange>;
  /**
   * Create a new subscription change
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_subscription_change
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return {Promise<SubscriptionChange>} A subscription change.
   */
  createSubscriptionChange(subscriptionId: string, body: object): Promise<SubscriptionChange>;
  /**
   * Delete the pending subscription change
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/remove_subscription_change
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
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Empty>} Subscription change was deleted.
   */
  removeSubscriptionChange(subscriptionId: string): Promise<Empty>;
  /**
   * List a subscription's invoices
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_subscription_invoices
   *
   * 
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *   
   * @return {Pager<Invoice>} A list of the subscription's invoices.
   */
  listSubscriptionInvoices(subscriptionId: string, params?: object): Pager<Invoice>;
  /**
   * List a subscription's line items
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_subscription_line_items
   *
   * 
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.original - Filter by original field.
   * @param params.state - Filter by state field.
   * @param params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the subscription's line items.
   */
  listSubscriptionLineItems(subscriptionId: string, params?: object): Pager<LineItem>;
  /**
   * Show the coupon redemptions for a subscription
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_subscription_coupon_redemptions
   *
   * 
   * @param subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on a subscription.
   */
  listSubscriptionCouponRedemptions(subscriptionId: string, params?: object): Pager<CouponRedemption>;
  /**
   * List a site's transactions
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/list_transactions
   *
   * @example
   * const transactions = client.listTransactions({ limit: 200 })
   * 
   * for await (const transaction of transactions.each()) {
   *   console.log(transaction.uuid)
   * }
   * 
   * @param {Object} params - The optional url parameters for this request.
   * @param params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
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
   * @param params.limit - Limit number of records 1-200.
   * @param params.order - Sort order.
   * @param params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *   
   * @param params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *   
   * @param params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the site's transactions.
   */
  listTransactions(params?: object): Pager<Transaction>;
  /**
   * Fetch a transaction
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_transaction
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
   * @param transactionId - Transaction ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Transaction>} A transaction.
   */
  getTransaction(transactionId: string): Promise<Transaction>;
  /**
   * Fetch a unique coupon code
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/get_unique_coupon_code
   *
   * 
   * @param uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  getUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  /**
   * Deactivate a unique coupon code
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/deactivate_unique_coupon_code
   *
   * 
   * @param uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  deactivateUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  /**
   * Restore a unique coupon code
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/reactivate_unique_coupon_code
   *
   * 
   * @param uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  reactivateUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  /**
   * Create a new purchase
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/create_purchase
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
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {PurchaseCreate}
   * @return {Promise<InvoiceCollection>} Returns the new invoices
   */
  createPurchase(body: object): Promise<InvoiceCollection>;
  /**
   * Preview a new purchase
   *
   * API docs: https://developers.recurly.com/api/v2019-10-10#operation/preview_purchase
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
   * @param body - The object representing the JSON request to send to the server. It should conform to the schema of {PurchaseCreate}
   * @return {Promise<InvoiceCollection>} Returns preview of the new invoices
   */
  previewPurchase(body: object): Promise<InvoiceCollection>;

}
