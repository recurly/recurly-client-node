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
 * BinaryFile
 * @typedef {Object} BinaryFile
 * @prop {string} data
 */
class BinaryFile extends Resource {
  static getSchema () {
    return {
      data: String
    }
  }
}

module.exports = BinaryFile
