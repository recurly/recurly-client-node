'use strict'

/**
 * Subscription
 * @typedef {Object} Subscription
 * @prop {AccountMini} account
 * @prop {datetime} activated_at - Activated at
 * @prop {Array.<SubscriptionAddOn>} add_ons - Add-ons
 * @prop {number} add_ons_total - Total price of add-ons
 * @prop {boolean} auto_renew - Whether the subscription renews at the end of its term.
 * @prop {datetime} bank_account_authorized_at - Recurring subscriptions paid with ACH will have this attribute set. This timestamp is used for alerting customers to reauthorize in 3 years in accordance with NACHA rules. If a subscription becomes inactive or the billing info is no longer a bank account, this timestamp is cleared.
 * @prop {datetime} canceled_at - Canceled at
 * @prop {string} collection_method - Collection method
 * @prop {Array.<CouponRedemptionMini>} coupon_redemptions - Coupon redemptions
 * @prop {datetime} created_at - Created at
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {datetime} current_period_ends_at - Current billing period ends at
 * @prop {datetime} current_period_started_at - Current billing period started at
 * @prop {datetime} current_term_ends_at - When the term ends. This is calculated by a plan's interval and `total_billing_cycles` in a term. Subscription changes with a `timeframe=renewal` will be applied on this date.
 * @prop {datetime} current_term_started_at - The start date of the term when the first billing period starts. The subscription term is the length of time that a customer will be committed to a subscription. A term can span multiple billing periods.
 * @prop {Array.<CustomField>} custom_fields
 * @prop {string} customer_notes - Customer notes
 * @prop {string} expiration_reason - Expiration reason
 * @prop {datetime} expires_at - Expires at
 * @prop {string} id - Subscription ID
 * @prop {number} net_terms - Integer representing the number of days after an invoice's creation that the invoice will become past due. If an invoice's net terms are set to '0', it is due 'On Receipt' and will become past due 24 hours after it’s created. If an invoice is due net 30, it will become past due at 31 days exactly.
 * @prop {datetime} paused_at - Null unless subscription is paused or will pause at the end of the current billing period.
 * @prop {SubscriptionChange} pending_change
 * @prop {PlanMini} plan
 * @prop {string} po_number - For manual invoicing, this identifies the PO number associated with the subscription.
 * @prop {number} quantity - Subscription quantity
 * @prop {number} remaining_billing_cycles - The remaining billing cycles in the current term.
 * @prop {number} remaining_pause_cycles - Null unless subscription is paused or will pause at the end of the current billing period.
 * @prop {number} renewal_billing_cycles - If `auto_renew=true`, when a term completes, `total_billing_cycles` takes this value as the length of subsequent terms. Defaults to the plan's `total_billing_cycles`.
 * @prop {ShippingAddress} shipping_address
 * @prop {string} state - State
 * @prop {number} subtotal - Estimated total, before tax.
 * @prop {string} terms_and_conditions - Terms and conditions
 * @prop {number} total_billing_cycles - The number of cycles/billing periods in a term. When `remaining_billing_cycles=0`, if `auto_renew=true` the subscription will renew and a new term will begin, otherwise the subscription will expire.
 * @prop {datetime} trial_ends_at - Trial period ends at
 * @prop {datetime} trial_started_at - Trial period started at
 * @prop {number} unit_amount - Subscription unit price
 * @prop {datetime} updated_at - Last updated at
 * @prop {string} uuid - The UUID is useful for matching data with the CSV exports and building URLs into Recurly's UI.
 */
class Subscription {}

module.exports = Subscription
