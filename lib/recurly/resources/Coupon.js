'use strict'

/**
 * Coupon
 * @typedef {Object} Coupon
 * @prop {boolean} applies_to_all_plans - The coupon is valid for all plans if true. If false then `plans` and `plans_names` will list the applicable plans.
 * @prop {boolean} applies_to_non_plan_charges - The coupon is valid for one-time, non-plan charges if true.
 * @prop {string} code - The code the customer enters to redeem the coupon.
 * @prop {string} coupon_type - Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
 * @prop {datetime} created_at - Created at
 * @prop {CouponDiscount} discount
 * @prop {string} duration - - "single_use" coupons applies to the first invoice only. - "temporal" coupons will apply to invoices for the duration determined by the `temporal_unit` and `temporal_amount` attributes.
 * @prop {datetime} expired_at - The date and time the coupon was expired early or reached its `max_redemptions`.
 * @prop {number} free_trial_amount - Sets the duration of time the `free_trial_unit` is for.
 * @prop {string} free_trial_unit - Description of the unit of time the coupon is for. Used with `free_trial_amount` to determine the duration of time the coupon is for.
 * @prop {string} hosted_page_description - This description will show up when a customer redeems a coupon on your Hosted Payment Pages, or if you choose to show the description on your own checkout page.
 * @prop {string} id - Coupon ID
 * @prop {string} invoice_description - Description of the coupon on the invoice.
 * @prop {number} max_redemptions - A maximum number of redemptions for the coupon. The coupon will expire when it hits its maximum redemptions.
 * @prop {number} max_redemptions_per_account - Redemptions per account is the number of times a specific account can redeem the coupon. Set redemptions per account to `1` if you want to keep customers from gaming the system and getting more than one discount from the coupon campaign.
 * @prop {string} name - The internal name for the coupon.
 * @prop {Array.<PlanMini>} plans - Plans
 * @prop {Array.<string>} plans_names - TODO
 * @prop {datetime} redeem_by - The date and time the coupon will expire and can no longer be redeemed. Time is always 11:59:59, the end-of-day Pacific time.
 * @prop {string} redemption_resource - Whether the discount is for all eligible charges on the account, or only a specific subscription.
 * @prop {string} state - Indicates if the coupon is redeemable, and if it is not, why.
 * @prop {number} temporal_amount - If `duration` is "temporal" than `temporal_amount` is an integer which is multiplied by `temporal_unit` to define the duration that the coupon will be applied to invoices for.
 * @prop {string} temporal_unit - If `duration` is "temporal" than `temporal_unit` is multiplied by `temporal_amount` to define the duration that the coupon will be applied to invoices for.
 * @prop {number} unique_coupon_codes_count - When this number reaches `max_redemptions` the coupon will no longer be redeemable.
 * @prop {datetime} updated_at - Last updated at
 */
class Coupon {}

module.exports = Coupon
