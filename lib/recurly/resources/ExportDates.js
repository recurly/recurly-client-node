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
 * ExportDates
 * @typedef {Object} ExportDates
 * @prop {Array.<string>} dates - An array of dates that have available exports.
 * @prop {string} object - Object type
 */
class ExportDates extends Resource {
  static getSchema () {
    return {
      dates: Array,
      object: String
    }
  }
}

module.exports = ExportDates
