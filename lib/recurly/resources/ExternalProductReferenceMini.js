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
 * ExternalProductReferenceMini
 * @typedef {Object} ExternalProductReferenceMini
 * @prop {Date} createdAt - When the external product was created in Recurly.
 * @prop {string} externalConnectionType - Source connection platform.
 * @prop {string} id - System-generated unique identifier for an external product ID, e.g. `e28zov4fw0v2`.
 * @prop {string} object - object
 * @prop {string} referenceCode - A code which associates the external product to a corresponding object or resource in an external platform like the Apple App Store or Google Play Store.
 * @prop {Date} updatedAt - When the external product was updated in Recurly.
 */
class ExternalProductReferenceMini extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      externalConnectionType: String,
      id: String,
      object: String,
      referenceCode: String,
      updatedAt: Date
    }
  }
}

module.exports = ExternalProductReferenceMini
