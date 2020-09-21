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
 * ExportFiles
 * @typedef {Object} ExportFiles
 * @prop {Array.<ExportFile>} files
 * @prop {string} object - Object type
 */
class ExportFiles extends Resource {
  static getSchema () {
    return {
      files: ['ExportFile'],
      object: String
    }
  }
}

module.exports = ExportFiles
