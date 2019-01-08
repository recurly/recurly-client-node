/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * PlanPricing
 * @typedef {Object} PlanPricing
 * @prop {string} currency - 3-letter ISO 4217 currency code.
 * @prop {number} setupFee - Amount of one-time setup fee automatically charged at the beginning of a subscription billing cycle. For subscription plans with a trial, the setup fee will be charged at the time of signup. Setup fees do not increase with the quantity of a subscription plan.
 * @prop {number} unitAmount - Unit price
 */
class PlanPricing {}

module.exports = PlanPricing
