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
 * ExportFile
 * @typedef {Object} ExportFile
 * @prop {string} href - A presigned link to download the export file.
 * @prop {string} md5sum - MD5 hash of the export file.
 * @prop {string} name - Name of the export file.
 */
class ExportFile extends Resource {
  static getSchema () {
    return {
      href: String,
      md5sum: String,
      name: String
    }
  }
}

module.exports = ExportFile
