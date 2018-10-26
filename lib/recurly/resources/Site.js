'use strict';

/**
 * Site
 * @typedef {Object} Site
 * @prop {Address} address
 * @prop {datetime} created_at - Created at
 * @prop {datetime} deleted_at - Deleted at
 * @prop {Array.<string>} features - A list of features enabled for the site.
 * @prop {string} id - Site ID
 * @prop {string} mode - Mode
 * @prop {string} public_api_key - This value is used to configure RecurlyJS to submit tokenized billing information.
 * @prop {Settings} settings
 * @prop {string} subdomain
 * @prop {datetime} updated_at - Updated at
 */
class Site {}

module.exports = Site
