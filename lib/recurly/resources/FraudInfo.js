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
 * FraudInfo
 * @typedef {Object} FraudInfo
 * @prop {string} decision - Kount decision
 * @prop {Object} riskRulesTriggered - Kount rules
 * @prop {number} score - Kount score
 */
class FraudInfo extends Resource {
  static getSchema () {
    return {
      decision: String,
      riskRulesTriggered: Object,
      score: Number
    }
  }
}

module.exports = FraudInfo
