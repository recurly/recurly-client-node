'use strict'

/**
 * Site
 * @typedef {Object} Site
 * @prop {Address} address
 * @prop {datetime} createdAt - Created at
 * @prop {datetime} deletedAt - Deleted at
 * @prop {Array.<string>} features - A list of features enabled for the site.
 * @prop {string} id - Site ID
 * @prop {string} mode - Mode
 * @prop {string} publicApiKey - This value is used to configure RecurlyJS to submit tokenized billing information.
 * @prop {Settings} settings
 * @prop {string} subdomain
 * @prop {datetime} updatedAt - Updated at
 */
class Site {}

module.exports = Site
