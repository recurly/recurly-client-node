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
 * PlanHostedPages
 * @typedef {Object} PlanHostedPages
 * @prop {boolean} bypassConfirmation - If `true`, the customer will be sent directly to your `success_url` after a successful signup, bypassing Recurly's hosted confirmation page.
 * @prop {string} cancelUrl - URL to redirect to on canceled signup on the hosted payment pages.
 * @prop {boolean} displayQuantity - Determines if the quantity field is displayed on the hosted pages for the plan.
 * @prop {string} successUrl - URL to redirect to after signup on the hosted payment pages.
 */
class PlanHostedPages extends Resource {
  static getSchema () {
    return {
      bypassConfirmation: Boolean,
      cancelUrl: String,
      displayQuantity: Boolean,
      successUrl: String
    }
  }
}

module.exports = PlanHostedPages
