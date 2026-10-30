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
 * PaymentGatewayReferences
 * @typedef {Object} PaymentGatewayReferences
 * @prop {string} referenceType - The type of reference token. The value can be omitted for gateways that only support one type of token.
 * @prop {string} token - Reference value used when the external token was created. If a Stripe gateway or Ebanx gateway is used, this value will need to be accompanied by its reference_type.
 */
class PaymentGatewayReferences extends Resource {
  static getSchema () {
    return {
      referenceType: String,
      token: String
    }
  }
}

module.exports = PaymentGatewayReferences
