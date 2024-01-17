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
 * TransactionFraudInfo
 * @typedef {Object} TransactionFraudInfo
 * @prop {string} decision - Kount decision
 * @prop {string} object - Object type
 * @prop {string} reference - Kount transaction reference ID
 * @prop {Array.<FraudRiskRule>} riskRulesTriggered - A list of fraud risk rules that were triggered for the transaction.
 * @prop {number} score - Kount score
 */
class TransactionFraudInfo extends Resource {
  static getSchema () {
    return {
      decision: String,
      object: String,
      reference: String,
      riskRulesTriggered: ['FraudRiskRule'],
      score: Number
    }
  }
}

module.exports = TransactionFraudInfo
