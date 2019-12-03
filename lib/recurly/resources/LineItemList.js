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
 * LineItemList
 * @typedef {Object} LineItemList
 * @prop {Array.<LineItem>} data
 * @prop {boolean} hasMore - Indicates there are more results on subsequent pages.
 * @prop {string} next - Path to subsequent page of results.
 * @prop {string} object - Will always be List.
 */
class LineItemList extends Resource {
  static getSchema () {
    return {
      data: ['LineItem'],
      hasMore: Boolean,
      next: String,
      object: String
    }
  }
}

module.exports = LineItemList
