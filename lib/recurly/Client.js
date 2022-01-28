/* istanbul ignore file */
/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

const BaseClient = require('./BaseClient')

const Pager = require('./Pager')

/**
 *
 * @param {string} apiKey - The private api key.
 */
class Client extends BaseClient {
  apiVersion () {
    return 'v2021-02-25'
  }

  /**
   * List sites
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_sites}
   *
   * @example
   * const sites = client.listSites({ params: { limit: 200 } })
   *
   * for await (const site of sites.each()) {
   *   console.log(site.subdomain)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<Site>} A list of sites.
   */
  listSites (options = {}) {
    let path = '/sites'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Fetch a site
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_site}
   *
   * @example
   * try {
   *   const site = await client.getSite(siteId)
   *   console.log('Fetched site: ', site)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} siteId - Site ID or subdomain. For ID no prefix is used e.g. `e28zov4fw0v2`. For subdomain use prefix `subdomain-`, e.g. `subdomain-recurly`.
   * @return {Promise<Site>} A site.
   */
  async getSite (siteId, options = {}) {
    let path = '/sites/{site_id}'
    path = this._interpolatePath(path, { 'site_id': siteId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * List a site's accounts
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_accounts}
   *
   * @example
   * const accounts = client.listAccounts({ params: { limit: 200 } })
   *
   * for await (const account of accounts.each()) {
   *   console.log(account.code)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param {boolean} options.params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *
   * @param {string} options.params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of the site's accounts.
   */
  listAccounts (options = {}) {
    let path = '/accounts'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Create an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_account}
   *
   * @example
   * try {
   *   const accountCreate = {
   *     code: accountCode,
   *     firstName: 'Benjamin',
   *     lastName: 'Du Monde',
   *     address: {
   *       street1: '900 Camp St',
   *       city: 'New Orleans',
   *       region: 'LA',
   *       postalCode: '70115',
   *       country: 'US'
   *     }
   *   }
   *   const account = await client.createAccount(accountCreate)
   *   console.log('Created Account: ', account.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {AccountCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountCreate}
   * @return {Promise<Account>} An account.
   */
  async createAccount (body, options = {}) {
    let path = '/accounts'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_account}
   *
   * @example
   * try {
   *   const account = await client.getAccount(accountId)
   *   console.log('Fetched account: ', account.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  async getAccount (accountId, options = {}) {
    let path = '/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_account}
   *
   * @example
   * try {
   *   const accountUpdate = {
   *     firstName: 'Aaron',
   *     lastName: 'Du Monde'
   *   }
   *   const account = await client.updateAccount(accountId, accountUpdate)
   *   console.log('Updated account: ', account)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {AccountUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountUpdate}
   * @return {Promise<Account>} An account.
   */
  async updateAccount (accountId, body, options = {}) {
    let path = '/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Deactivate an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/deactivate_account}
   *
   * @example
   * try {
   *   const account = await client.deactivateAccount(accountId)
   *   console.log('Deleted account: ', account.code)
   * } catch (err) {
   *   if (err && err.type === 'not-found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  async deactivateAccount (accountId, options = {}) {
    let path = '/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Fetch an account's acquisition data
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_account_acquisition}
   *
   * @example
   * try {
   *   const acquisition = await client.getAccountAcquisition(accountId)
   *   console.log('Fetched account acquisition: ', acquisition.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<AccountAcquisition>} An account's acquisition data.
   */
  async getAccountAcquisition (accountId, options = {}) {
    let path = '/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an account's acquisition data
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_account_acquisition}
   *
   * @example
   * try {
   *   const acquisitionUpdate = {
   *     campaign: "big-event-campaign",
   *     channel: "social_media",
   *     subchannel: "twitter"
   *   }
   *   const accountAcquisition = await client.updateAccountAcquisition(accountId, acquisitionUpdate)
   *   console.log('Edited Account Acquisition: ', accountAcquisition)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {AccountAcquisitionUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountAcquisitionUpdate}
   * @return {Promise<AccountAcquisition>} An account's updated acquisition data.
   */
  async updateAccountAcquisition (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Remove an account's acquisition data
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_account_acquisition}
   *
   * @example
   * try {
   *   await client.removeAccountAcquisition(accountId)
   *   console.log('Removed account acquisition from account: ', accountId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Empty>} Acquisition data was succesfully deleted.
   */
  async removeAccountAcquisition (accountId, options = {}) {
    let path = '/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Reactivate an inactive account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/reactivate_account}
   *
   * @example
   * try {
   *   const account = await client.reactivateAccount(accountId)
   *   console.log('Reactivated account: ', account.code)
   * } catch (err) {
   *   if (err && err.type === 'not_found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Account>} An account.
   */
  async reactivateAccount (accountId, options = {}) {
    let path = '/accounts/{account_id}/reactivate'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Fetch an account's balance and past due status
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_account_balance}
   *
   * @example
   * try {
   *   const balance = await client.getAccountBalance(accountId)
   *   console.log('Fetched account balance: ', balance.balances)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<AccountBalance>} An account's balance.
   */
  async getAccountBalance (accountId, options = {}) {
    let path = '/accounts/{account_id}/balance'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Fetch an account's billing information
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_billing_info}
   *
   * @example
   * try {
   *   const billingInfo = await client.getBillingInfo(accountId)
   *   console.log('Fetched Billing Info: ', billingInfo.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<BillingInfo>} An account's billing information.
   */
  async getBillingInfo (accountId, options = {}) {
    let path = '/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Set an account's billing information
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_billing_info}
   *
   * @example
   * try {
   *   const billingInfoUpdate = {
   *     firstName: 'Aaron',
   *     lastName: 'Du Monde',
   *   }
   *   const billingInfo = await client.updateBillingInfo(accountId, billingInfoUpdate)
   *   console.log('Updated billing info: ', billingInfo.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  async updateBillingInfo (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Remove an account's billing information
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_billing_info}
   *
   * @example
   * try {
   *   client.removeBillingInfo(accountId)
   *   console.log('Removed billing info from account: ', accountId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<Empty>} Billing information deleted
   */
  async removeBillingInfo (accountId, options = {}) {
    let path = '/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Verify an account's credit card billing information
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/verify_billing_info}
   *
   * @example
   * try {
   *   const transaction = await client.verifyBillingInfo(accountId)
   *   console.log('Fetched Transaction: ', transaction.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {BillingInfoVerify} options.body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoVerify}
   * @return {Promise<Transaction>} Transaction information from verify.
   */
  async verifyBillingInfo (accountId, options = {}) {
    const body = options['body']
    let path = '/accounts/{account_id}/billing_info/verify'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Get the list of billing information associated with an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_billing_infos}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<BillingInfo>} A list of the the billing information for an account's
   */
  listBillingInfos (accountId, options = {}) {
    let path = '/accounts/{account_id}/billing_infos'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * Add new billing information on an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_billing_info}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  async createBillingInfo (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/billing_infos'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a billing info
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_a_billing_info}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} billingInfoId - Billing Info ID. Can ONLY be used for sites utilizing the Wallet feature.
   * @return {Promise<BillingInfo>} A billing info.
   */
  async getABillingInfo (accountId, billingInfoId, options = {}) {
    let path = '/accounts/{account_id}/billing_infos/{billing_info_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'billing_info_id': billingInfoId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an account's billing information
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_a_billing_info}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} billingInfoId - Billing Info ID. Can ONLY be used for sites utilizing the Wallet feature.
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  async updateABillingInfo (accountId, billingInfoId, body, options = {}) {
    let path = '/accounts/{account_id}/billing_infos/{billing_info_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'billing_info_id': billingInfoId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Remove an account's billing information
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_a_billing_info}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} billingInfoId - Billing Info ID. Can ONLY be used for sites utilizing the Wallet feature.
   * @return {Promise<Empty>} Billing information deleted
   */
  async removeABillingInfo (accountId, billingInfoId, options = {}) {
    let path = '/accounts/{account_id}/billing_infos/{billing_info_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'billing_info_id': billingInfoId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Show the coupon redemptions for an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_coupon_redemptions}
   *
   * @example
   * const redemptions = client.listAccountCouponRedemptions(accountId, { params: { limit: 200 } })
   *
   * for await (const redemption of redemptions.each()) {
   *   console.log(redemption.id)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on an account.
   */
  listAccountCouponRedemptions (accountId, options = {}) {
    let path = '/accounts/{account_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * Show the coupon redemptions that are active on an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_active_coupon_redemptions}
   *
   * @example
   * const redemptions = await client.listActiveCouponRedemptions(accountId, { params: { limit: 200 } })
   *
   * for await (const redemption of redemptions.each()) {
   *   console.log('Fetched coupon redemption: ', redemption.id)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Pager<CouponRedemption>} Active coupon redemptions on an account.
   */
  listActiveCouponRedemptions (accountId, options = {}) {
    let path = '/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * Generate an active coupon redemption on an account or subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_coupon_redemption}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {CouponRedemptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponRedemptionCreate}
   * @return {Promise<CouponRedemption>} Returns the new coupon redemption.
   */
  async createCouponRedemption (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Delete the active coupon redemption from an account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_coupon_redemption}
   *
   * @example
   * try {
   *   const redemption = await client.removeCouponRedemption(accountId)
   *   console.log('Removed coupon redemption: ', redemption.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<CouponRedemption>} Coupon redemption deleted.
   */
  async removeCouponRedemption (accountId, options = {}) {
    let path = '/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List an account's credit payments
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_credit_payments}
   *
   * @example
   * const payments = client.listAccountCreditPayments(accountId, { params: { limit: 200 } })
   *
   * for await (const payment of payments.each()) {
   *   console.log(payment.uuid)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CreditPayment>} A list of the account's credit payments.
   */
  listAccountCreditPayments (accountId, options = {}) {
    let path = '/accounts/{account_id}/credit_payments'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * List an account's invoices
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_invoices}
   *
   * @example
   * const invoices = client.listAccountInvoices(accountId, { params: { limit: 200 } })
   *
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *
   * @return {Pager<Invoice>} A list of the account's invoices.
   */
  listAccountInvoices (accountId, options = {}) {
    let path = '/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * Create an invoice for pending line items
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_invoice}
   *
   * @example
   * try {
   *   let invoiceCreate = {
   *     currency: 'USD',
   *     collectionMethod: 'automatic'
   *   }
   *   let invoiceCollection = await client.createInvoice(accountId, invoiceCreate)
   *   console.log('Created Invoice')
   *   console.log('Charge Invoice: ', invoiceCollection.chargeInvoice)
   *   console.log('Credit Invoices: ', invoiceCollection.creditInvoices)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the new invoices.
   */
  async createInvoice (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Preview new invoice for pending line items
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/preview_invoice}
   *
   * @example
   * try {
   *   const collection = await client.previewInvoice(accountId, {
   *     currency: "USD",
   *     collectionMethod: "automatic"
   *   })
   *   console.log(`Previewed invoice due at ${collection.chargeInvoice.dueAt}`)
   *   console.log(collection.chargeInvoice)
   *   console.log(collection.creditInvoices)
   * } catch(err) {
   *
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the invoice previews.
   */
  async previewInvoice (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/invoices/preview'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * List an account's line items
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_line_items}
   *
   * @example
   * const lineItems = client.listAccountLineItems(accountId, { params: { limit: 200 } })
   *
   * for await (const lineItem of lineItems.each()) {
   *   console.log(lineItem.id)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the account's line items.
   */
  listAccountLineItems (accountId, options = {}) {
    let path = '/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * Create a new line item for the account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_line_item}
   *
   * @example
   * try {
   *   let lineItemReq = {
   *     currency: 'USD',
   *     unitAmount: 1000,
   *     type: 'charge' // choose "credit" for a credit
   *   }
   *   let lineItem = await client.createLineItem(accountId, lineItemReq)
   *   console.log('Created Line Item: ', lineItem.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {LineItemCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {LineItemCreate}
   * @return {Promise<LineItem>} Returns the new line item.
   */
  async createLineItem (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a list of an account's notes
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_notes}
   *
   * @example
   * const notes = client.listAccountNotes(accountId, { params: { limit: 200 } })
   *
   * for await (const note of notes.each()) {
   *   console.log(note.message)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @return {Pager<AccountNote>} A list of an account's notes.
   */
  listAccountNotes (accountId, options = {}) {
    let path = '/accounts/{account_id}/notes'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * Fetch an account note
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_account_note}
   *
   * @example
   * try {
   *   console.log(accountId)
   *   const note = await client.getAccountNote(accountId, accountNoteId)
   *   console.log('Fetched account note: ', note.message)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} accountNoteId - Account Note ID.
   * @return {Promise<AccountNote>} An account note.
   */
  async getAccountNote (accountId, accountNoteId, options = {}) {
    let path = '/accounts/{account_id}/notes/{account_note_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'account_note_id': accountNoteId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Fetch a list of an account's shipping addresses
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_shipping_addresses}
   *
   * @example
   * const addresses = client.listShippingAddresses(accountId, { params: { limit: 200 } })
   *
   * for await (const address of addresses.each()) {
   *   console.log(address.street1)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<ShippingAddress>} A list of an account's shipping addresses.
   */
  listShippingAddresses (accountId, options = {}) {
    let path = '/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * Create a new shipping address for the account
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_shipping_address}
   *
   * @example
   * try {
   *   const shippingAddressCreate = {
   *     firstName: 'Aaron',
   *     lastName: 'Du Monde',
   *     street1: '900 Camp St.',
   *     city: 'New Orleans',
   *     region: 'LA',
   *     postalCode: '70115',
   *     country: 'US'
   *   }
   *   const address = await client.createShippingAddress(accountId, shippingAddressCreate)
   *   console.log('Created shipping address: ', address.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {ShippingAddressCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressCreate}
   * @return {Promise<ShippingAddress>} Returns the new shipping address.
   */
  async createShippingAddress (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch an account's shipping address
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_shipping_address}
   *
   * @example
   * try {
   *   const address = await client.getShippingAddress(accountId, shippingAddressId)
   *   console.log('Fetched shipping address: ', address.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return {Promise<ShippingAddress>} A shipping address.
   */
  async getShippingAddress (accountId, shippingAddressId, options = {}) {
    let path = '/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an account's shipping address
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_shipping_address}
   *
   * @example
   * try {
   *   const shadUpdate = {
   *     firstName: "Benjamin",
   *     lastName: "Du Monde"
   *   }
   *   const address = await client.updateShippingAddress(accountId, shippingAddressId, shadUpdate)
   *   console.log('Updated shipping address: ', address.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} shippingAddressId - Shipping Address ID.
   * @param {ShippingAddressUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressUpdate}
   * @return {Promise<ShippingAddress>} The updated shipping address.
   */
  async updateShippingAddress (accountId, shippingAddressId, body, options = {}) {
    let path = '/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Remove an account's shipping address
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_shipping_address}
   *
   * @example
   * try {
   *   await client.removeShippingAddress(accountId, shippingAddress.id)
   *   console.log('Removed shipping address: ', shippingAddress.street1)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return {Promise<Empty>} Shipping address deleted.
   */
  async removeShippingAddress (accountId, shippingAddressId, options = {}) {
    let path = '/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List an account's subscriptions
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_subscriptions}
   *
   * @example
   * const subscriptions = client.listAccountSubscriptions(accountId, { params: { limit: 200 } })
   *
   * for await (const subscription of subscriptions.each()) {
   *   console.log(subscription.uuid)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   *
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *
   * @return {Pager<Subscription>} A list of the account's subscriptions.
   */
  listAccountSubscriptions (accountId, options = {}) {
    let path = '/accounts/{account_id}/subscriptions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * List an account's transactions
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_transactions}
   *
   * @example
   * const transactions = client.listAccountTransactions(accountId, { params: { limit: 200 } })
   *
   * for await (const transaction of transactions.each()) {
   *   console.log(transaction.uuid)
   * }
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param {string} options.params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the account's transactions.
   */
  listAccountTransactions (accountId, options = {}) {
    let path = '/accounts/{account_id}/transactions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * List an account's child accounts
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_child_accounts}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param {boolean} options.params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *
   * @param {string} options.params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of an account's child accounts.
   */
  listChildAccounts (accountId, options = {}) {
    let path = '/accounts/{account_id}/accounts'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, options)
  }

  /**
   * List a site's account acquisition data
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_account_acquisition}
   *
   * @example
   * const acquisitions = client.listAccountAcquisition({ params: { limit: 200 } })
   *
   * for await (const acquisition of acquisitions.each()) {
   *   console.log(acquisition.id)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<AccountAcquisition>} A list of the site's account acquisition data.
   */
  listAccountAcquisition (options = {}) {
    let path = '/acquisitions'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * List a site's coupons
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_coupons}
   *
   * @example
   * const coupons = client.listCoupons({ params: { limit: 200 } })
   *
   * for await (const coupon of coupons.each()) {
   *   console.log(coupon.code)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<Coupon>} A list of the site's coupons.
   */
  listCoupons (options = {}) {
    let path = '/coupons'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Create a new coupon
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_coupon}
   *
   * @example
   * try {
   *   const couponCreate = {
   *     name: "Promotional Coupon",
   *     code: couponCode,
   *     discount_type: "fixed",
   *     currencies: [{"currency": "USD", "discount": 10}],
   *   }
   *   const coupon = await client.createCoupon(couponCreate)
   *   console.log('Created coupon: ', coupon.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {CouponCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponCreate}
   * @return {Promise<Coupon>} A new coupon.
   */
  async createCoupon (body, options = {}) {
    let path = '/coupons'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a coupon
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_coupon}
   *
   * @example
   * try {
   *   const coupon = await client.getCoupon(couponId)
   *   console.log('Fetched coupon: ', coupon.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @return {Promise<Coupon>} A coupon.
   */
  async getCoupon (couponId, options = {}) {
    let path = '/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an active coupon
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_coupon}
   *
   * @example
   * try {
   *   const couponUpdate = {
   *     name: "New Coupon Name"
   *   }
   *   const coupon = await client.updateCoupon(couponId, couponUpdate)
   *   console.log('Updated coupon: ', coupon)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {CouponUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return {Promise<Coupon>} The updated coupon.
   */
  async updateCoupon (couponId, body, options = {}) {
    let path = '/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Expire a coupon
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/deactivate_coupon}
   *
   * @example
   * try {
   *   const coupon = await client.deactivateCoupon(couponId)
   *   console.log('Deactivated coupon: ', coupon.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @return {Promise<Coupon>} The expired Coupon
   */
  async deactivateCoupon (couponId, options = {}) {
    let path = '/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Generate unique coupon codes
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/generate_unique_coupon_codes}
   *
   *
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {CouponBulkCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponBulkCreate}
   * @return {Promise<UniqueCouponCodeParams>} A set of parameters that can be passed to the `list_unique_coupon_codes`
endpoint to obtain only the newly generated `UniqueCouponCodes`.

   */
  async generateUniqueCouponCodes (couponId, body, options = {}) {
    let path = '/coupons/{coupon_id}/generate'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Restore an inactive coupon
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/restore_coupon}
   *
   *
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {CouponUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return {Promise<Coupon>} The restored coupon.
   */
  async restoreCoupon (couponId, body, options = {}) {
    let path = '/coupons/{coupon_id}/restore'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * List unique coupon codes associated with a bulk coupon
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_unique_coupon_codes}
   *
   *
   * @param {string} couponId - Coupon ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-10off`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<UniqueCouponCode>} A list of unique coupon codes that were generated
   */
  listUniqueCouponCodes (couponId, options = {}) {
    let path = '/coupons/{coupon_id}/unique_coupon_codes'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return new Pager(this, path, options)
  }

  /**
   * List a site's credit payments
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_credit_payments}
   *
   * @example
   * const payments = client.listCreditPayments({ params: { limit: 200 } })
   *
   * for await (const payment of payments.each()) {
   *   console.log(payment.uuid)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CreditPayment>} A list of the site's credit payments.
   */
  listCreditPayments (options = {}) {
    let path = '/credit_payments'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Fetch a credit payment
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_credit_payment}
   *
   *
   * @param {string} creditPaymentId - Credit Payment ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<CreditPayment>} A credit payment.
   */
  async getCreditPayment (creditPaymentId, options = {}) {
    let path = '/credit_payments/{credit_payment_id}'
    path = this._interpolatePath(path, { 'credit_payment_id': creditPaymentId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * List a site's custom field definitions
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_custom_field_definitions}
   *
   * @example
   * const definitions = client.listCustomFieldDefinitions({ params: { limit: 200 } })
   *
   * for await (const definition of definitions.each()) {
   *   console.log(definition.displayName)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.relatedType - Filter by related type.
   * @return {Pager<CustomFieldDefinition>} A list of the site's custom field definitions.
   */
  listCustomFieldDefinitions (options = {}) {
    let path = '/custom_field_definitions'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Fetch an custom field definition
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_custom_field_definition}
   *
   * @example
   * try {
   *   const definition = await client.getCustomFieldDefinition(definitionId)
   *   console.log('Fetched custom field definition: ', definition.displayName)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} customFieldDefinitionId - Custom Field Definition ID
   * @return {Promise<CustomFieldDefinition>} An custom field definition.
   */
  async getCustomFieldDefinition (customFieldDefinitionId, options = {}) {
    let path = '/custom_field_definitions/{custom_field_definition_id}'
    path = this._interpolatePath(path, { 'custom_field_definition_id': customFieldDefinitionId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * List an invoice template's associated accounts
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_invoice_template_accounts}
   *
   *
   * @param {string} invoiceTemplateId - Invoice template ID.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.email - Filter for accounts with this exact email address. A blank value will return accounts with both `null` and `""` email addresses. Note that multiple accounts can share one email address.
   * @param {boolean} options.params.subscriber - Filter for accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *
   * @param {string} options.params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of an invoice template's associated accounts.
   */
  listInvoiceTemplateAccounts (invoiceTemplateId, options = {}) {
    let path = '/invoice_templates/{invoice_template_id}/accounts'
    path = this._interpolatePath(path, { 'invoice_template_id': invoiceTemplateId })
    return new Pager(this, path, options)
  }

  /**
   * List a site's items
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_items}
   *
   * @example
   * const items = client.listItems({ params: { limit: 200 } })
   *
   * for await (const item of items.each()) {
   *   console.log(item.code)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<Item>} A list of the site's items.
   */
  listItems (options = {}) {
    let path = '/items'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Create a new item
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_item}
   *
   * @example
   * try {
   *   const itemCreate = {
   *     code: itemCode,
   *     name: "Item Name",
   *     description: "Item Description",
   *     external_sku: "a35JE-44",
   *     accounting_code: "item-code-127",
   *     revenue_schedule_type: "at_range_end",
   *     custom_fields: [{
   *       name: "custom-field-1",
   *       value: "Custom Field 1 value"
   *     }]
   *   }
   *   const item = await client.createItem(itemCreate)
   *   console.log('Created Item: ', item.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {ItemCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ItemCreate}
   * @return {Promise<Item>} A new item.
   */
  async createItem (body, options = {}) {
    let path = '/items'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch an item
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_item}
   *
   * @example
   * try {
   *   const item = await client.getItem(itemId)
   *   console.log('Fetched item: ', item.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  async getItem (itemId, options = {}) {
    let path = '/items/{item_id}'
    path = this._interpolatePath(path, { 'item_id': itemId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an active item
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_item}
   *
   * @example
   * try {
   *   const itemUpdate = {
   *     name: 'New Item Name',
   *     description: 'New Item Description'
   *   }
   *   const item = await client.updateItem(itemId, itemUpdate)
   *   console.log('Updated item: ', item)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @param {ItemUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ItemUpdate}
   * @return {Promise<Item>} The updated item.
   */
  async updateItem (itemId, body, options = {}) {
    let path = '/items/{item_id}'
    path = this._interpolatePath(path, { 'item_id': itemId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Deactivate an item
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/deactivate_item}
   *
   * @example
   * try {
   *   const item = await client.deactivateItem(itemId)
   *   console.log('Deleted item: ', item.code)
   * } catch (err) {
   *   if (err && err.type === 'not-found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   *
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  async deactivateItem (itemId, options = {}) {
    let path = '/items/{item_id}'
    path = this._interpolatePath(path, { 'item_id': itemId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Reactivate an inactive item
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/reactivate_item}
   *
   * @example
   * try {
   *   const item = await client.reactivateItem(itemId)
   *   console.log('Reactivated item: ', item.code)
   * } catch (err) {
   *   if (err && err.type === 'not_found') {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   }
   *   // If we don't know what to do with the err, we should
   *   // probably re-raise and let our web framework and logger handle it
   *   throw err
   * }
   *
   * @param {string} itemId - Item ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-red`.
   * @return {Promise<Item>} An item.
   */
  async reactivateItem (itemId, options = {}) {
    let path = '/items/{item_id}/reactivate'
    path = this._interpolatePath(path, { 'item_id': itemId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * List a site's measured units
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_measured_unit}
   *
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<MeasuredUnit>} A list of the site's measured units.
   */
  listMeasuredUnit (options = {}) {
    let path = '/measured_units'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Create a new measured unit
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_measured_unit}
   *
   *
   * @param {MeasuredUnitCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {MeasuredUnitCreate}
   * @return {Promise<MeasuredUnit>} A new measured unit.
   */
  async createMeasuredUnit (body, options = {}) {
    let path = '/measured_units'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a measured unit
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_measured_unit}
   *
   *
   * @param {string} measuredUnitId - Measured unit ID or name. For ID no prefix is used e.g. `e28zov4fw0v2`. For name use prefix `name-`, e.g. `name-Storage`.
   * @return {Promise<MeasuredUnit>} An item.
   */
  async getMeasuredUnit (measuredUnitId, options = {}) {
    let path = '/measured_units/{measured_unit_id}'
    path = this._interpolatePath(path, { 'measured_unit_id': measuredUnitId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update a measured unit
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_measured_unit}
   *
   *
   * @param {string} measuredUnitId - Measured unit ID or name. For ID no prefix is used e.g. `e28zov4fw0v2`. For name use prefix `name-`, e.g. `name-Storage`.
   * @param {MeasuredUnitUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {MeasuredUnitUpdate}
   * @return {Promise<MeasuredUnit>} The updated measured_unit.
   */
  async updateMeasuredUnit (measuredUnitId, body, options = {}) {
    let path = '/measured_units/{measured_unit_id}'
    path = this._interpolatePath(path, { 'measured_unit_id': measuredUnitId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Remove a measured unit
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_measured_unit}
   *
   *
   * @param {string} measuredUnitId - Measured unit ID or name. For ID no prefix is used e.g. `e28zov4fw0v2`. For name use prefix `name-`, e.g. `name-Storage`.
   * @return {Promise<MeasuredUnit>} A measured unit.
   */
  async removeMeasuredUnit (measuredUnitId, options = {}) {
    let path = '/measured_units/{measured_unit_id}'
    path = this._interpolatePath(path, { 'measured_unit_id': measuredUnitId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List a site's invoices
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_invoices}
   *
   * @example
   * const invoices = client.listInvoices({ params: { limit: 200 } })
   *
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *
   * @return {Pager<Invoice>} A list of the site's invoices.
   */
  listInvoices (options = {}) {
    let path = '/invoices'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Fetch an invoice
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_invoice}
   *
   * @example
   * try {
   *   const invoice = await client.getInvoice(invoiceId)
   *   console.log('Fetched Invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} An invoice.
   */
  async getInvoice (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an invoice
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_invoice}
   *
   * @example
   * try {
   *   const invoiceUpdate = {
   *     customerNotes: "New notes",
   *     termsAndConditions: "New terms and conditions"
   *   }
   *
   *   const invoice = await client.updateInvoice(invoiceId, invoiceUpdate)
   *   console.log('Edited invoice: ', invoice.number)
   * } catch(err) {
   *
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {InvoiceUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceUpdate}
   * @return {Promise<Invoice>} An invoice.
   */
  async updateInvoice (invoiceId, body, options = {}) {
    let path = '/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Fetch an invoice as a PDF
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_invoice_pdf}
   *
   * @example
   * try {
   *   const invoice = await client.getInvoicePdf(invoiceId)
   *   console.log('Fetched Invoice: ', invoice)
   *   const filename = `${downloadDirectory}/nodeinvoice-${invoiceId}.pdf`
   *   await fs.writeFile(filename, invoice.data, 'binary', (err) => {
   *     // throws an error, you could also catch it here
   *     if (err) throw err;
   *
   *     // success case, the file was saved
   *     console.log('Saved Invoice PDF to', filename)
   *   })
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<BinaryFile>} An invoice as a PDF.
   */
  async getInvoicePdf (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}.pdf'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Collect a pending or past due, automatic invoice
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/collect_invoice}
   *
   * @example
   * try {
   *   const invoice = await client.collectInvoice(invoiceId)
   *   console.log('Collected invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {InvoiceCollect} options.body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCollect}
   * @return {Promise<Invoice>} The updated invoice.
   */
  async collectInvoice (invoiceId, options = {}) {
    const body = options['body']
    let path = '/invoices/{invoice_id}/collect'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Mark an open invoice as failed
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/mark_invoice_failed}
   *
   * @example
   * try {
   *   const invoice = await client.markInvoiceFailed(invoiceId)
   *   console.log('Failed invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  async markInvoiceFailed (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}/mark_failed'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Mark an open invoice as successful
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/mark_invoice_successful}
   *
   * @example
   * try {
   *   const invoice = await client.markInvoiceSuccessful(invoiceId)
   *   console.log(`Marked invoice #${invoice.number} successful`)
   * } catch(err) {
   *
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  async markInvoiceSuccessful (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}/mark_successful'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Reopen a closed, manual invoice
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/reopen_invoice}
   *
   * @example
   * try {
   *   const invoice = await client.reopenInvoice(invoiceId)
   *   console.log('Reopened invoice: ', invoice.number)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  async reopenInvoice (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}/reopen'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Void a credit invoice.
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/void_invoice}
   *
   * @example
   * try {
   *   const invoice = await client.voidInvoice(invoiceId)
   *   console.log('Voided invoice: ', invoice)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Promise<Invoice>} The updated invoice.
   */
  async voidInvoice (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}/void'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Record an external payment for a manual invoices.
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/record_external_transaction}
   *
   * @example
   * try {
   *   const externalTrx = {
   *     description: "A check collected outside of Recurly",
   *     amount: 10.0,
   *     payment_method: 'check'
   *   }
   *   const transaction = await client.recordExternalTransaction(invoiceId, externalTrx)
   *   console.log('External Transaction: ', transaction)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {ExternalTransaction} body - The object representing the JSON request to send to the server. It should conform to the schema of {ExternalTransaction}
   * @return {Promise<Transaction>} The recorded transaction.
   */
  async recordExternalTransaction (invoiceId, body, options = {}) {
    let path = '/invoices/{invoice_id}/transactions'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * List an invoice's line items
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_invoice_line_items}
   *
   * @example
   * const lineItems = client.listInvoiceLineItems(invoiceId, { params: { limit: 200 } })
   *
   * for await (const lineItem of lineItems.each()) {
   *   console.log(lineItem.id)
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the invoice's line items.
   */
  listInvoiceLineItems (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}/line_items'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return new Pager(this, path, options)
  }

  /**
   * Show the coupon redemptions applied to an invoice
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_invoice_coupon_redemptions}
   *
   * @example
   * const redemptions = client.listInvoiceCouponRedemptions(invoiceId, { params: { limit: 200 } })
   *
   * for await (const redemption of redemptions.each()) {
   *   console.log(redemption.id)
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions associated with the invoice.
   */
  listInvoiceCouponRedemptions (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return new Pager(this, path, options)
  }

  /**
   * List an invoice's related credit or charge invoices
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_related_invoices}
   *
   * @example
   * const invoices = client.listRelatedInvoices(invoiceId, { params: { limit: 200 } })
   *
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @return {Pager<Invoice>} A list of the credit or charge invoices associated with the invoice.
   */
  listRelatedInvoices (invoiceId, options = {}) {
    let path = '/invoices/{invoice_id}/related_invoices'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return new Pager(this, path, options)
  }

  /**
   * Refund an invoice
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/refund_invoice}
   *
   * @example
   * try {
   *   const invoiceRefund = {
   *     creditCustomerNotes: "Notes on credits",
   *     type: "amount", // could also be "line_items"
   *     amount: 100
   *   }
   *
   *   const invoice = await client.refundInvoice(invoiceId, invoiceRefund)
   *   console.log('Refunded invoice: ', invoice.number)
   * } catch(err) {
   *
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} invoiceId - Invoice ID or number. For ID no prefix is used e.g. `e28zov4fw0v2`. For number use prefix `number-`, e.g. `number-1000`.
   * @param {InvoiceRefund} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceRefund}
   * @return {Promise<Invoice>} Returns the new credit invoice.
   */
  async refundInvoice (invoiceId, body, options = {}) {
    let path = '/invoices/{invoice_id}/refund'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * List a site's line items
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_line_items}
   *
   * @example
   * const lineItems = client.listLineItems({ params: { limit: 200 } })
   *
   * for await (const item of lineItems.each()) {
   *   console.log(`Item ${item.id} for ${item.amount}`)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the site's line items.
   */
  listLineItems (options = {}) {
    let path = '/line_items'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Fetch a line item
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_line_item}
   *
   * @example
   * try {
   *   const lineItem = await client.getLineItem(lineItemId)
   *   console.log('Fetched line item: ', lineItem.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} lineItemId - Line Item ID.
   * @return {Promise<LineItem>} A line item.
   */
  async getLineItem (lineItemId, options = {}) {
    let path = '/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': lineItemId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Delete an uninvoiced line item
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_line_item}
   *
   * @example
   * try {
   *   await client.removeLineItem(lineItemId)
   *   console.log('Removed line item: ', lineItemId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} lineItemId - Line Item ID.
   * @return {Promise<Empty>} Line item deleted.
   */
  async removeLineItem (lineItemId, options = {}) {
    let path = '/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': lineItemId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List a site's plans
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_plans}
   *
   * @example
   * const plans = client.listPlans({ params: { limit: 200 } })
   *
   * for await (const plan of plans.each()) {
   *   console.log(plan.code)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<Plan>} A list of plans.
   */
  listPlans (options = {}) {
    let path = '/plans'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Create a plan
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_plan}
   *
   * @example
   * try {
   *   const planCreate = {
   *     name: 'Monthly Coffee Subscription',
   *     code: planCode,
   *     currencies: [
   *       {
   *         currency: 'USD',
   *         unitAmount: 10000
   *       }
   *     ]
   *   }
   *   const plan = await client.createPlan(planCreate)
   *   console.log('Created Plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {PlanCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanCreate}
   * @return {Promise<Plan>} A plan.
   */
  async createPlan (body, options = {}) {
    let path = '/plans'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a plan
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_plan}
   *
   * @example
   * try {
   *   const plan = await client.getPlan(planId)
   *   console.log('Fetched plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<Plan>} A plan.
   */
  async getPlan (planId, options = {}) {
    let path = '/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update a plan
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_plan}
   *
   * @example
   * try {
   *   const planUpdate = {
   *     name: 'New monthly coffee subscription'
   *   }
   *   const plan = await client.updatePlan(planId, planUpdate)
   *   console.log('Updated plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {PlanUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanUpdate}
   * @return {Promise<Plan>} A plan.
   */
  async updatePlan (planId, body, options = {}) {
    let path = '/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Remove a plan
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_plan}
   *
   * @example
   * try {
   *   const plan = await client.removePlan(planId)
   *   console.log('Removed plan: ', plan.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<Plan>} Plan deleted
   */
  async removePlan (planId, options = {}) {
    let path = '/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List a plan's add-ons
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_plan_add_ons}
   *
   * @example
   * const addOns = client.listPlanAddOns(planId, { params: { limit: 200 } })
   *
   * for await (const addOn of addOns.each()) {
   *   console.log(addOn.code)
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listPlanAddOns (planId, options = {}) {
    let path = '/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return new Pager(this, path, options)
  }

  /**
   * Create an add-on
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_plan_add_on}
   *
   * @example
   * try {
   *   const addOnCreate = {
   *     code: 'coffee_grinder',
   *     name: 'A quality grinder for your beans',
   *     defaultQuantity: 1,
   *     currencies: [
   *       {
   *         currency: 'USD',
   *         unitAmount: 10000
   *       }
   *     ]
   *   }
   *
   *   const addOn = await client.createPlanAddOn(planId, addOnCreate)
   *   console.log('Created add-on: ', addOn.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {AddOnCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnCreate}
   * @return {Promise<AddOn>} An add-on.
   */
  async createPlanAddOn (planId, body, options = {}) {
    let path = '/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a plan's add-on
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_plan_add_on}
   *
   * @example
   * try {
   *   const addOn = await client.getPlanAddOn(planId, addOnId)
   *   console.log('Fetched add-on: ', addOn.code)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} An add-on.
   */
  async getPlanAddOn (planId, addOnId, options = {}) {
    let path = '/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'plan_id': planId, 'add_on_id': addOnId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an add-on
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_plan_add_on}
   *
   * @example
   * try {
   *   const addOnUpdate = {
   *     name: 'New AddOn Name',
   *   }
   *   const addOn = await client.updatePlanAddOn(planId, addOnId, addOnUpdate)
   *   console.log('Updated add-on: ', addOn)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {AddOnUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnUpdate}
   * @return {Promise<AddOn>} An add-on.
   */
  async updatePlanAddOn (planId, addOnId, body, options = {}) {
    let path = '/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'plan_id': planId, 'add_on_id': addOnId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Remove an add-on
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_plan_add_on}
   *
   * @example
   * try {
   *   const addOn = await client.removePlanAddOn(planId, addOnId)
   *   console.log('Removed plan add-on: ', addOn)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} planId - Plan ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} Add-on deleted
   */
  async removePlanAddOn (planId, addOnId, options = {}) {
    let path = '/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'plan_id': planId, 'add_on_id': addOnId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List a site's add-ons
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_add_ons}
   *
   * @example
   * const addOns = client.listAddOns({ params: { limit: 200 } })
   *
   * for await (const addOn of addOns.each()) {
   *   console.log(addOn.code)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listAddOns (options = {}) {
    let path = '/add_ons'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Fetch an add-on
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_add_on}
   *
   * @example
   * try {
   *   const addOn = await client.getAddOn(addOnId)
   *   console.log('Fetched add-on: ', addOn)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @return {Promise<AddOn>} An add-on.
   */
  async getAddOn (addOnId, options = {}) {
    let path = '/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': addOnId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * List a site's shipping methods
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_shipping_methods}
   *
   * @example
   * const methods = client.listShippingMethods({ params: { limit: 200 } })
   *
   * for await (const method of methods.each()) {
   *   console.log(method.code)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<ShippingMethod>} A list of the site's shipping methods.
   */
  listShippingMethods (options = {}) {
    let path = '/shipping_methods'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Create a new shipping method
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_shipping_method}
   *
   *
   * @param {ShippingMethodCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingMethodCreate}
   * @return {Promise<ShippingMethod>} A new shipping method.
   */
  async createShippingMethod (body, options = {}) {
    let path = '/shipping_methods'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a shipping method
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_shipping_method}
   *
   *
   * @param {string} shippingMethodId - Shipping Method ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-usps_2-day`.
   * @return {Promise<ShippingMethod>} A shipping method.
   */
  async getShippingMethod (shippingMethodId, options = {}) {
    let path = '/shipping_methods/{shipping_method_id}'
    path = this._interpolatePath(path, { 'shipping_method_id': shippingMethodId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update an active Shipping Method
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_shipping_method}
   *
   *
   * @param {string} shippingMethodId - Shipping Method ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-usps_2-day`.
   * @param {ShippingMethodUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingMethodUpdate}
   * @return {Promise<ShippingMethod>} The updated shipping method.
   */
  async updateShippingMethod (shippingMethodId, body, options = {}) {
    let path = '/shipping_methods/{shipping_method_id}'
    path = this._interpolatePath(path, { 'shipping_method_id': shippingMethodId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Deactivate a shipping method
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/deactivate_shipping_method}
   *
   *
   * @param {string} shippingMethodId - Shipping Method ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-usps_2-day`.
   * @return {Promise<ShippingMethod>} A shipping method.
   */
  async deactivateShippingMethod (shippingMethodId, options = {}) {
    let path = '/shipping_methods/{shipping_method_id}'
    path = this._interpolatePath(path, { 'shipping_method_id': shippingMethodId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List a site's subscriptions
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_subscriptions}
   *
   * @example
   * const subscriptions = client.listSubscriptions({ params: { limit: 200 } })
   *
   * for await (const subscription of subscriptions.each()) {
   *   console.log(subscription.uuid)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.state - Filter by state.
   *
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *
   * @return {Pager<Subscription>} A list of the site's subscriptions.
   */
  listSubscriptions (options = {}) {
    let path = '/subscriptions'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Create a new subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_subscription}
   *
   * @example
   * try {
   *   let subscriptionReq = {
   *     planCode: planCode,
   *     currency: `USD`,
   *     account: {
   *       code: accountCode
   *     }
   *   }
   *   let sub = await client.createSubscription(subscriptionReq)
   *   console.log('Created subscription: ', sub.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {SubscriptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCreate}
   * @return {Promise<Subscription>} A subscription.
   */
  async createSubscription (body, options = {}) {
    let path = '/subscriptions'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Fetch a subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_subscription}
   *
   * @example
   * try {
   *   const subscription = await client.getSubscription(subscriptionId)
   *   console.log('Fetched subscription: ', subscription.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  async getSubscription (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update a subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_subscription}
   *
   * @example
   * try {
   *   const update = {
   *     termsAndConditions: "Some new terms and conditions",
   *     customerNotes: "Some new customer notes"
   *   }
   *   const subscription = await client.updateSubscription(subscriptionId, update)
   *   console.log('Modified subscription: ', subscription.uuid)
   * } catch(err) {
   *
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionUpdate}
   * @return {Promise<Subscription>} A subscription.
   */
  async updateSubscription (subscriptionId, body, options = {}) {
    let path = '/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Terminate a subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/terminate_subscription}
   *
   * @example
   * try {
   *   const subscription = await client.terminateSubscription(subscriptionId)
   *   console.log('Terminated subscription: ', subscription.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string} options.params.refund - The type of refund to perform:
   *
   *   * `full` - Performs a full refund of the last invoice for the current subscription term.
   *   * `partial` - Prorates a refund based on the amount of time remaining in the current bill cycle.
   *   * `none` - Terminates the subscription without a refund.
   *
   *   In the event that the most recent invoice is a $0 invoice paid entirely by credit, Recurly will apply the credit back to the customer’s account.
   *
   *   You may also terminate a subscription with no refund and then manually refund specific invoices.
   *
   * @param {boolean} options.params.charge - Applicable only if the subscription has usage based add-ons and unbilled usage logged for the current billing cycle. If true, current billing cycle unbilled usage is billed on the final invoice. If false, Recurly will create a negative usage record for current billing cycle usage that will zero out the final invoice line items.
   * @return {Promise<Subscription>} An expired subscription.
   */
  async terminateSubscription (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Cancel a subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/cancel_subscription}
   *
   * @example
   * try {
   *   let expiredSub = await client.cancelSubscription(subscriptionId)
   *   console.log('Canceled Subscription: ', expiredSub.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {SubscriptionCancel} options.body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCancel}
   * @return {Promise<Subscription>} A canceled or failed subscription.
   */
  async cancelSubscription (subscriptionId, options = {}) {
    const body = options['body']
    let path = '/subscriptions/{subscription_id}/cancel'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Reactivate a canceled subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/reactivate_subscription}
   *
   * @example
   * try {
   *   const subscription = await client.reactivateSubscription(subscriptionId)
   *   console.log('Reactivated subscription: ', subscription.uuid)
   * } catch(err) {
   *
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} An active subscription.
   */
  async reactivateSubscription (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/reactivate'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Pause subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/pause_subscription}
   *
   * @example
   * try {
   *   let pauseReq = {
   *     remaining_pause_cycles: 2,
   *   }
   *   const subscription = await client.pauseSubscription(subscriptionId, pauseReq)
   *   console.log('Paused subscription: ', subscription.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionPause} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionPause}
   * @return {Promise<Subscription>} A subscription.
   */
  async pauseSubscription (subscriptionId, body, options = {}) {
    let path = '/subscriptions/{subscription_id}/pause'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Resume subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/resume_subscription}
   *
   * @example
   * try {
   *   const subscription = await client.resumeSubscription(subscriptionId)
   *   console.log('Resumed subscription: ', subscription.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  async resumeSubscription (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/resume'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Convert trial subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/convert_trial}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Subscription>} A subscription.
   */
  async convertTrial (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/convert_trial'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Fetch a preview of a subscription's renewal invoice(s)
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_preview_renewal}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<InvoiceCollection>} A preview of the subscription's renewal invoice(s).
   */
  async getPreviewRenewal (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/preview_renewal'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Fetch a subscription's pending change
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_subscription_change}
   *
   * @example
   * try {
   *   const change = await client.getSubscriptionChange(subscriptionId)
   *   console.log('Fetched subscription change: ', change.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<SubscriptionChange>} A subscription's pending change.
   */
  async getSubscriptionChange (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Create a new subscription change
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_subscription_change}
   *
   * @example
   * try {
   *   const subscriptionChangeCreate = {
   *     planCode: newPlanCode,
   *     timeframe: 'now'
   *   }
   *
   *   const change = await client.createSubscriptionChange(subscriptionId, subscriptionChangeCreate)
   *   console.log('Created subscription change: ', change.id)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionChangeCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return {Promise<SubscriptionChange>} A subscription change.
   */
  async createSubscriptionChange (subscriptionId, body, options = {}) {
    let path = '/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Delete the pending subscription change
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_subscription_change}
   *
   * @example
   * try {
   *   await client.removeSubscriptionChange(subscriptionId)
   *   console.log('Removed subscription change: ', subscriptionId)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Empty>} Subscription change was deleted.
   */
  async removeSubscriptionChange (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Preview a new subscription change
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/preview_subscription_change}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {SubscriptionChangeCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return {Promise<SubscriptionChange>} A subscription change.
   */
  async previewSubscriptionChange (subscriptionId, body, options = {}) {
    let path = '/subscriptions/{subscription_id}/change/preview'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * List a subscription's invoices
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_subscription_invoices}
   *
   * @example
   * const invoices = client.listSubscriptionInvoices(subscriptionId, { params: { limit: 200 } })
   *
   * for await (const invoice of invoices.each()) {
   *   console.log(invoice.number)
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *
   * @return {Pager<Invoice>} A list of the subscription's invoices.
   */
  listSubscriptionInvoices (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/invoices'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return new Pager(this, path, options)
  }

  /**
   * List a subscription's line items
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_subscription_line_items}
   *
   * @example
   * const lineItems = client.listSubscriptionLineItems(subscriptionId, { params: { limit: 200 } })
   *
   * for await (const lineItem of lineItems.each()) {
   *   console.log(lineItem.id)
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.original - Filter by original field.
   * @param {string} options.params.state - Filter by state field.
   * @param {string} options.params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the subscription's line items.
   */
  listSubscriptionLineItems (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/line_items'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return new Pager(this, path, options)
  }

  /**
   * Show the coupon redemptions for a subscription
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_subscription_coupon_redemptions}
   *
   * @example
   * const redemptions = client.listSubscriptionCouponRedemptions(subscriptionId, { params: { limit: 200 } })
   *
   * for await (const redemption of redemptions.each()) {
   *   console.log(redemption.id)
   * }
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on a subscription.
   */
  listSubscriptionCouponRedemptions (subscriptionId, options = {}) {
    let path = '/subscriptions/{subscription_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return new Pager(this, path, options)
  }

  /**
   * List a subscription add-on's usage records
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_usage}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `usage_timestamp` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=usage_timestamp` or `sort=recorded_timestamp`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=usage_timestamp` or `sort=recorded_timestamp`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.billingStatus - Filter by usage record's billing status
   * @return {Pager<Usage>} A list of the subscription add-on's usage records.
   */
  listUsage (subscriptionId, addOnId, options = {}) {
    let path = '/subscriptions/{subscription_id}/add_ons/{add_on_id}/usage'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId, 'add_on_id': addOnId })
    return new Pager(this, path, options)
  }

  /**
   * Log a usage record on this subscription add-on
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_usage}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @param {string} addOnId - Add-on ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-gold`.
   * @param {UsageCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {UsageCreate}
   * @return {Promise<Usage>} The created usage record.
   */
  async createUsage (subscriptionId, addOnId, body, options = {}) {
    let path = '/subscriptions/{subscription_id}/add_ons/{add_on_id}/usage'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId, 'add_on_id': addOnId })
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Get a usage record
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_usage}
   *
   *
   * @param {string} usageId - Usage Record ID.
   * @return {Promise<Usage>} The usage record.
   */
  async getUsage (usageId, options = {}) {
    let path = '/usage/{usage_id}'
    path = this._interpolatePath(path, { 'usage_id': usageId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Update a usage record
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/update_usage}
   *
   *
   * @param {string} usageId - Usage Record ID.
   * @param {UsageCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {UsageCreate}
   * @return {Promise<Usage>} The updated usage record.
   */
  async updateUsage (usageId, body, options = {}) {
    let path = '/usage/{usage_id}'
    path = this._interpolatePath(path, { 'usage_id': usageId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Delete a usage record.
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/remove_usage}
   *
   *
   * @param {string} usageId - Usage Record ID.
   * @return {Promise<Empty>} Usage was successfully deleted.
   */
  async removeUsage (usageId, options = {}) {
    let path = '/usage/{usage_id}'
    path = this._interpolatePath(path, { 'usage_id': usageId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * List a site's transactions
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_transactions}
   *
   * @example
   * const transactions = client.listTransactions({ params: { limit: 200 } })
   *
   * for await (const transaction of transactions.each()) {
   *   console.log(transaction.uuid)
   * }
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {Array.<string>} options.params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} options.params.limit - Limit number of records 1-200.
   * @param {string} options.params.order - Sort order.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {Date} options.params.beginTime - Inclusively filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {Date} options.params.endTime - Inclusively filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} options.params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param {string} options.params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the site's transactions.
   */
  listTransactions (options = {}) {
    let path = '/transactions'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Fetch a transaction
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_transaction}
   *
   * @example
   * try {
   *   const transaction = await client.getTransaction(transactionId)
   *   console.log('Fetched transaction: ', transaction.uuid)
   * } catch (err) {
   *   if (err instanceof recurly.errors.NotFoundError) {
   *     // If the request was not found, you may want to alert the user or
   *     // just return null
   *     console.log('Resource Not Found')
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {string} transactionId - Transaction ID or UUID. For ID no prefix is used e.g. `e28zov4fw0v2`. For UUID use prefix `uuid-`, e.g. `uuid-123457890`.
   * @return {Promise<Transaction>} A transaction.
   */
  async getTransaction (transactionId, options = {}) {
    let path = '/transactions/{transaction_id}'
    path = this._interpolatePath(path, { 'transaction_id': transactionId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Fetch a unique coupon code
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_unique_coupon_code}
   *
   *
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  async getUniqueCouponCode (uniqueCouponCodeId, options = {}) {
    let path = '/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Deactivate a unique coupon code
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/deactivate_unique_coupon_code}
   *
   *
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  async deactivateUniqueCouponCode (uniqueCouponCodeId, options = {}) {
    let path = '/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('DELETE', path, null, options)
  }

  /**
   * Restore a unique coupon code
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/reactivate_unique_coupon_code}
   *
   *
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-abc-8dh2-def`.
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  async reactivateUniqueCouponCode (uniqueCouponCodeId, options = {}) {
    let path = '/unique_coupon_codes/{unique_coupon_code_id}/restore'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('PUT', path, null, options)
  }

  /**
   * Create a new purchase
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_purchase}
   *
   * @example
   * try {
   *   let purchaseReq = {
   *     currency: 'USD',
   *     account: {
   *       code: accountCode,
   *       firstName: 'Benjamin',
   *       lastName: 'Du Monde',
   *       billingInfo: {
   *         tokenId: rjsTokenId
   *       }
   *     },
   *     subscriptions: [
   *       { planCode: planCode },
   *     ]
   *   }
   *   let invoiceCollection = await client.createPurchase(purchaseReq)
   *   console.log('Created Charge Invoice: ', invoiceCollection.chargeInvoice)
   *   console.log('Created Credit Invoices: ', invoiceCollection.creditInvoices)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {PurchaseCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PurchaseCreate}
   * @return {Promise<InvoiceCollection>} Returns the new invoices
   */
  async createPurchase (body, options = {}) {
    let path = '/purchases'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * Preview a new purchase
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/preview_purchase}
   *
   * @example
   * try {
   *   let purchaseReq = {
   *     currency: 'USD',
   *     account: {
   *       firstName: 'Benjamin',
   *       lastName: 'Du Monde',
   *       code: accountCode,
   *       billingInfo: {
   *         tokenId: rjsTokenId
   *       }
   *     },
   *     subscriptions: [
   *       { planCode: planCode },
   *     ]
   *   }
   *   let invoiceCollection = await client.previewPurchase(purchaseReq)
   *   console.log('Preview Charge Invoice: ', invoiceCollection.chargeInvoice)
   *   console.log('Preview Credit Invoices: ', invoiceCollection.creditInvoices)
   * } catch (err) {
   *   if (err instanceof recurly.errors.ValidationError) {
   *     // If the request was not valid, you may want to tell your user
   *     // why. You can find the invalid params and reasons in err.params
   *     console.log('Failed validation', err.params)
   *   } else {
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     console.log('Unknown Error: ', err)
   *   }
   * }
   *
   * @param {PurchaseCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PurchaseCreate}
   * @return {Promise<InvoiceCollection>} Returns preview of the new invoices
   */
  async previewPurchase (body, options = {}) {
    let path = '/purchases/preview'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * List the dates that have an available export to download.
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_export_dates}
   *
   * @example
   * try {
   *   const export_dates = await client.getExportDates()
   *   export_dates.dates.forEach(date => {
   *     console.log(`Exports are available for: ${date}`)
   *   })
   * } catch (err) {
   *   if (err instanceof recurly.ApiError) {
   *     console.log('Unexpected error', err)
   *   }
   * }
   *
   * @return {Promise<ExportDates>} Returns a list of dates.
   */
  async getExportDates (options = {}) {
    let path = '/export_dates'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * List of the export files that are available to download.
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_export_files}
   *
   * @example
   * try {
   *   const export_files = await client.getExportFiles(export_date)
   *   export_files.files.forEach(file => {
   *     console.log(`Export file download URL: ${file.href}`)
   *   })
   * } catch (err) {
   *   if (err instanceof recurly.ApiError) {
   *     console.log('Unexpected error', err)
   *   }
   * }
   *
   * @param {string} exportDate - Date for which to get a list of available automated export files. Date must be in YYYY-MM-DD format.
   * @return {Promise<ExportFiles>} Returns a list of export files to download.
   */
  async getExportFiles (exportDate, options = {}) {
    let path = '/export_dates/{export_date}/export_files'
    path = this._interpolatePath(path, { 'export_date': exportDate })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Show the dunning campaigns for a site
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_dunning_campaigns}
   *
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @return {Pager<DunningCampaign>} A list of the the dunning_campaigns on an account.
   */
  listDunningCampaigns (options = {}) {
    let path = '/dunning_campaigns'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Show the settings for a dunning campaign
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_dunning_campaign}
   *
   *
   * @param {string} dunningCampaignId - Dunning Campaign ID, e.g. `e28zov4fw0v2`.
   * @return {Promise<DunningCampaign>} Settings for a dunning campaign.
   */
  async getDunningCampaign (dunningCampaignId, options = {}) {
    let path = '/dunning_campaigns/{dunning_campaign_id}'
    path = this._interpolatePath(path, { 'dunning_campaign_id': dunningCampaignId })
    return this._makeRequest('GET', path, null, options)
  }

  /**
   * Assign a dunning campaign to multiple plans
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/put_dunning_campaign_bulk_update}
   *
   *
   * @param {DunningCampaignsBulkUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {DunningCampaignsBulkUpdate}
   * @return {Promise<DunningCampaignsBulkUpdateResponse>} A list of updated plans.
   */
  async putDunningCampaignBulkUpdate (body, options = {}) {
    let path = '/dunning_campaigns/{dunning_campaign_id}/bulk_update'
    path = this._interpolatePath(path)
    return this._makeRequest('PUT', path, body, options)
  }
}

module.exports = Client
