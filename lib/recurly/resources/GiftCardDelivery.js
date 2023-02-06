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
 * GiftCardDelivery
 * @typedef {Object} GiftCardDelivery
 * @prop {Date} deliverAt - When the gift card should be delivered to the recipient. If null, the gift card will be delivered immediately. If a datetime is provided, the delivery will be in an hourly window, rounding down. For example, 6:23 pm will be in the 6:00 pm hourly batch.
 * @prop {string} emailAddress - The email address of the recipient.
 * @prop {string} firstName - The first name of the recipient.
 * @prop {string} gifterName - The name of the gifter for the purpose of a message displayed to the recipient.
 * @prop {string} lastName - The last name of the recipient.
 * @prop {string} method - Whether the delivery method is email or postal service.
 * @prop {string} personalMessage - The personal message from the gifter to the recipient.
 * @prop {Address} recipientAddress - Address information for the recipient.
 */
class GiftCardDelivery extends Resource {
  static getSchema () {
    return {
      deliverAt: Date,
      emailAddress: String,
      firstName: String,
      gifterName: String,
      lastName: String,
      method: String,
      personalMessage: String,
      recipientAddress: 'Address'
    }
  }
}

module.exports = GiftCardDelivery
