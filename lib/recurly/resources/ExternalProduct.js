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
 * ExternalProduct
 * @typedef {Object} ExternalProduct
 * @prop {Date} createdAt - When the external product was created in Recurly.
 * @prop {Array.<ExternalProductReferenceMini>} externalProductReferences - List of external product references of the external product.
 * @prop {string} id - System-generated unique identifier for an external product ID, e.g. `e28zov4fw0v2`.
 * @prop {string} name - Name to identify the external product in Recurly.
 * @prop {string} object - Object type
 * @prop {PlanMini} plan - Just the important parts.
 * @prop {Date} updatedAt - When the external product was updated in Recurly.
 */
class ExternalProduct extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      externalProductReferences: ['ExternalProductReferenceMini'],
      id: String,
      name: String,
      object: String,
      plan: 'PlanMini',
      updatedAt: Date
    }
  }
}

module.exports = ExternalProduct
