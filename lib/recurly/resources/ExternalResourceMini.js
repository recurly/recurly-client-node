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
 * ExternalResourceMini
 * @typedef {Object} ExternalResourceMini
 * @prop {string} externalObjectReference - Identifier or URL reference where the resource is canonically available in the external platform.
 * @prop {string} id - System-generated unique identifier for an external resource ID, e.g. `e28zov4fw0v2`.
 * @prop {string} object - Object type
 */
class ExternalResourceMini extends Resource {
  static getSchema () {
    return {
      externalObjectReference: String,
      id: String,
      object: String
    }
  }
}

module.exports = ExternalResourceMini
