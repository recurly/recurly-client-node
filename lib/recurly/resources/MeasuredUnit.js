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
 * MeasuredUnit
 * @typedef {Object} MeasuredUnit
 * @prop {Date} createdAt - Created at
 * @prop {Date} deletedAt - Deleted at
 * @prop {string} description - Optional internal description.
 * @prop {string} displayName - Display name for the measured unit. Can only contain spaces, underscores and must be alphanumeric.
 * @prop {string} id - Item ID
 * @prop {string} name - Unique internal name of the measured unit on your site.
 * @prop {string} object - Object type
 * @prop {string} state - The current state of the measured unit.
 * @prop {Date} updatedAt - Last updated at
 */
class MeasuredUnit extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      deletedAt: Date,
      description: String,
      displayName: String,
      id: String,
      name: String,
      object: String,
      state: String,
      updatedAt: Date
    }
  }
}

module.exports = MeasuredUnit
