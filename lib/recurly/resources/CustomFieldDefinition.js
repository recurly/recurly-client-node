'use strict'

/**
 * CustomFieldDefinition
 * @typedef {Object} CustomFieldDefinition
 * @prop {datetime} created_at - Created at
 * @prop {datetime} deleted_at - Definitions are initially soft deleted, and once all the values are removed from the accouts or subscriptions, will be hard deleted an no longer visible.
 * @prop {string} display_name - Used to label the field when viewing and editing the field in Recurly's admin UI.
 * @prop {string} id - Custom field definition ID
 * @prop {string} name - Used by the API to identify the field or reading and writing. The name can only be used once per Recurly object type.
 * @prop {string} related_type - Related Recurly object type
 * @prop {string} tooltip - Displayed as a tooltip when editing the field in the Recurly admin UI.
 * @prop {datetime} updated_at - Last updated at
 * @prop {string} user_access - The access control applied inside Recurly's admin UI: - `api_only` - No one will be able to view or edit this field's data via the admin UI. - `read_only` - Users with the Customers role will be able to view this field's data via the admin UI, but   editing will only be available via the API. - `write` - Users with the Customers role will be able to view and edit this field's data via the admin UI.
 */
class CustomFieldDefinition {}

module.exports = CustomFieldDefinition
