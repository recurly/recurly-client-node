'use strict';

/**
 * SubscriptionChange
 * @typedef {Object} SubscriptionChange
 * @prop {datetime} activate_at - Activated at
 * @prop {boolean} activated - Returns `true` if the subscription change is activated.
 * @prop {Array.<SubscriptionAddOn>} add_ons - These add-ons will be used when the subscription renews.
 * @prop {datetime} created_at - Created at
 * @prop {datetime} deleted_at - Deleted at
 * @prop {string} id - The ID of the Subscription Change.
 * @prop {PlanMini} plan
 * @prop {number} quantity - Subscription quantity
 * @prop {string} subscription_id - The ID of the subscription that is going to be changed.
 * @prop {number} unit_amount - Unit amount
 * @prop {datetime} updated_at - Updated at
 */
class SubscriptionChange {}

module.exports = SubscriptionChange
