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
 * PerformanceObligation
 * @typedef {Object} PerformanceObligation
 * @prop {Date} createdAt - Created At
 * @prop {string} id - The ID of a performance obligation. Performance obligations are only accessible as a part of the Recurly RevRec Standard and Recurly RevRec Advanced features.
 * @prop {string} name - Performance Obligation Name
 * @prop {Date} updatedAt - Last updated at
 */
class PerformanceObligation extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      id: String,
      name: String,
      updatedAt: Date
    }
  }
}

module.exports = PerformanceObligation
