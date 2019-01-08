/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * Coupon
 * @typedef {Object} Coupon
 * @prop {boolean} appliesToAllPlans - The coupon is valid for all plans if true. If false then `plans` and `plans_names` will list the applicable plans.
 * @prop {boolean} appliesToNonPlanCharges - The coupon is valid for one-time, non-plan charges if true.
 * @prop {string} code - The code the customer enters to redeem the coupon.
 * @prop {string} couponType - Whether the coupon is "single_code" or "bulk". Bulk coupons will require a `unique_code_template` and will generate unique codes through the `/generate` endpoint.
 * @prop {datetime} createdAt - Created at
 * @prop {CouponDiscount} discount
 * @prop {string} duration - - "single_use" coupons applies to the first invoice only. - "temporal" coupons will apply to invoices for the duration determined by the `temporal_unit` and `temporal_amount` attributes.
 * @prop {datetime} expiredAt - The date and time the coupon was expired early or reached its `max_redemptions`.
 * @prop {number} freeTrialAmount - Sets the duration of time the `free_trial_unit` is for.
 * @prop {string} freeTrialUnit - Description of the unit of time the coupon is for. Used with `free_trial_amount` to determine the duration of time the coupon is for.
 * @prop {string} hostedPageDescription - This description will show up when a customer redeems a coupon on your Hosted Payment Pages, or if you choose to show the description on your own checkout page.
 * @prop {string} id - Coupon ID
 * @prop {string} invoiceDescription - Description of the coupon on the invoice.
 * @prop {number} maxRedemptions - A maximum number of redemptions for the coupon. The coupon will expire when it hits its maximum redemptions.
 * @prop {number} maxRedemptionsPerAccount - Redemptions per account is the number of times a specific account can redeem the coupon. Set redemptions per account to `1` if you want to keep customers from gaming the system and getting more than one discount from the coupon campaign.
 * @prop {string} name - The internal name for the coupon.
 * @prop {Array.<PlanMini>} plans - Plans
 * @prop {Array.<string>} plansNames - TODO
 * @prop {datetime} redeemBy - The date and time the coupon will expire and can no longer be redeemed. Time is always 11:59:59, the end-of-day Pacific time.
 * @prop {string} redemptionResource - Whether the discount is for all eligible charges on the account, or only a specific subscription.
 * @prop {string} state - Indicates if the coupon is redeemable, and if it is not, why.
 * @prop {number} temporalAmount - If `duration` is "temporal" than `temporal_amount` is an integer which is multiplied by `temporal_unit` to define the duration that the coupon will be applied to invoices for.
 * @prop {string} temporalUnit - If `duration` is "temporal" than `temporal_unit` is multiplied by `temporal_amount` to define the duration that the coupon will be applied to invoices for.
 * @prop {number} uniqueCouponCodesCount - When this number reaches `max_redemptions` the coupon will no longer be redeemable.
 * @prop {datetime} updatedAt - Last updated at
 */
class Coupon {}

module.exports = Coupon
