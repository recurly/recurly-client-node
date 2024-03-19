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
 * GatewayAttributes
 * @typedef {Object} GatewayAttributes
 * @prop {string} accountReference - Used by Adyen and Braintree gateways. For Adyen the Shopper Reference value used when the external token was created. For Braintree the PayPal PayerID is populated in the response.
 */
class GatewayAttributes extends Resource {
  static getSchema () {
    return {
      accountReference: String
    }
  }
}

module.exports = GatewayAttributes
