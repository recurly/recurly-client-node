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
 * InvoiceLineItems
 * @typedef {Object} InvoiceLineItems
 * @prop {Array.<LineItem>} appliedCredits - Previous credits applied to this invoice. See their `original_line_item_id` to determine where the credit first originated.
 * @prop {Array.<LineItem>} carryforwards - These charges can be ignored. They exist to consume any remaining credit balance. A new credit with the same amount will be created and placed back on the account.
 * @prop {Array.<LineItem>} charges - New charges being billed for on this invoice.
 * @prop {Array.<LineItem>} credits - Refund or proration credits. This portion of the invoice can be considered a credit memo.
 */
class InvoiceLineItems extends Resource {
  static getSchema () {
    return {
      appliedCredits: ['LineItem'],
      carryforwards: ['LineItem'],
      charges: ['LineItem'],
      credits: ['LineItem']
    }
  }
}

module.exports = InvoiceLineItems
