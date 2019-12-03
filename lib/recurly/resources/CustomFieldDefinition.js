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
 * CustomFieldDefinition
 * @typedef {Object} CustomFieldDefinition
 * @prop {Date} createdAt - Created at
 * @prop {Date} deletedAt - Definitions are initially soft deleted, and once all the values are removed from the accouts or subscriptions, will be hard deleted an no longer visible.
 * @prop {string} displayName - Used to label the field when viewing and editing the field in Recurly's admin UI.
 * @prop {string} id - Custom field definition ID
 * @prop {string} name - Used by the API to identify the field or reading and writing. The name can only be used once per Recurly object type.
 * @prop {string} object - Object type
 * @prop {string} relatedType - Related Recurly object type
 * @prop {string} tooltip - Displayed as a tooltip when editing the field in the Recurly admin UI.
 * @prop {Date} updatedAt - Last updated at
 * @prop {string} userAccess - The access control applied inside Recurly's admin UI: - `api_only` - No one will be able to view or edit this field's data via the admin UI. - `read_only` - Users with the Customers role will be able to view this field's data via the admin UI, but   editing will only be available via the API. - `write` - Users with the Customers role will be able to view and edit this field's data via the admin UI.
 */
class CustomFieldDefinition extends Resource {
  static getSchema () {
    return {
      createdAt: Date,
      deletedAt: Date,
      displayName: String,
      id: String,
      name: String,
      object: String,
      relatedType: String,
      tooltip: String,
      updatedAt: Date,
      userAccess: String
    }
  }
}

module.exports = CustomFieldDefinition
