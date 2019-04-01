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
 * @param {string} siteId - The site id. Accepts the base-36 id or format: `subdomain-${subdomain}`.
 */
class Client extends BaseClient {
  apiVersion () {
    return 'v2018-08-09'
  }

  /**
   * List sites
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_sites}
   *
   * @example
   * const sites = client.listSites()
   *
   *   for await (const site of sites.each()) {
   *     console.log(site.subdomain)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @return {Pager<Site>} A list of sites.
   */
  listSites (params = {}) {
    let path = '/sites'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Fetch a site
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_site}
   *
   *
   * @return {Promise<Site>} A site.
   */
  async getSite () {
    let path = '/sites/{site_id}'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path, null)
  }

  /**
   * List a site's accounts
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_accounts}
   *
   * @example
   * const accounts = client.listAccounts()
   *
   *   for await (const account of accounts.each()) {
   *     console.log(account.code)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.subscriber - Filter accounts accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *
   * @param {string} params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of the site's accounts.
   */
  listAccounts (params = {}) {
    let path = '/sites/{site_id}/accounts'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Create an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_account}
   *
   * @example
   * try {
   *     const accountCreate = {
   *       code: accountCode,
   *       first_name: 'Benjamin',
   *       last_name: 'Du Monde',
   *       address: {
   *         street1: '900 Camp St',
   *         city: 'New Orleans',
   *         region: 'LA',
   *         postal_code: '70115',
   *         country: 'US'
   *       }
   *     }
   *     const account = await client.createAccount(accountCreate)
   *     console.log('Created Account: ', account.code)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {AccountCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountCreate}
   * @return {Promise<Account>} An account.
   */
  async createAccount (body) {
    let path = '/sites/{site_id}/accounts'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_account}
   *
   * @example
   * try {
   *     const account = await client.getAccount(accountId)
   *     console.log('Fetched account: ', account.code)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<Account>} An account.
   */
  async getAccount (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Modify an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/update_account}
   *
   * @example
   * try {
   *     const accountUpdate = {
   *       first_name: 'Aaron',
   *       last_name: 'Du Monde'
   *     }
   *     const account = await client.updateAccount(accountId, accountUpdate)
   *     console.log('Updated account: ', account)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {AccountUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountUpdate}
   * @return {Promise<Account>} An account.
   */
  async updateAccount (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Deactivate an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/deactivate_account}
   *
   * @example
   * try {
   *     const account = await client.deactivateAccount(accountId)
   *     console.log('Deleted account: ', account.code)
   *   } catch (err) {
   *     if (err && err.type === 'not-found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<Account>} An account.
   */
  async deactivateAccount (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * Fetch an account's acquisition data
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_account_acquisition}
   *
   * @example
   * try {
   *     const acquisition = await client.getAccountAcquisition(accountId)
   *     console.log('Fetched account acquisition: ', acquisition.id)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<AccountAcquisition>} An account's acquisition data.
   */
  async getAccountAcquisition (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Update an account's acquisition data
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/update_account_acquisition}
   *
   * @example
   * try {
   *     const acquisitionUpdate = {
   *       campaign: "superbowl-LV-campaign",
   *       channel: "social_media",
   *       subchannel: "twitter"
   *     }
   *     const accountAcquisition = await client.updateAccountAcquisition(accountId, acquisitionUpdate)
   *     console.log('Edited Account Acquisition: ', accountAcquisition)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {AccountAcquisitionUpdatable} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountAcquisitionUpdatable}
   * @return {Promise<AccountAcquisition>} An account's updated acquisition data.
   */
  async updateAccountAcquisition (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's acquisition data
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_account_acquisition}
   *
   * @example
   * try {
   *     await client.removeAccountAcquisition(accountId)
   *     console.log('Removed account acquisition from account: ', accountId)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise} Acquisition data was succesfully deleted.
   */
  async removeAccountAcquisition (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * Reactivate an inactive account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/reactivate_account}
   *
   * @example
   * try {
   *     const account = await client.reactivateAccount(accountId)
   *     console.log('Reactivated account: ', account.code)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<Account>} An account.
   */
  async reactivateAccount (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/reactivate'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * Fetch an account's balance and past due status
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_account_balance}
   *
   * @example
   * try {
   *     const balance = await client.getAccountBalance(accountId)
   *     console.log('Fetched account balance: ', balance.balances)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<AccountBalance>} An account's balance.
   */
  async getAccountBalance (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/balance'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Fetch an account's billing information
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_billing_info}
   *
   * @example
   * try {
   *     const billingInfo = await client.getBillingInfo(accountId)
   *     console.log('Fetched Billing Info: ', billingInfo.id)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<BillingInfo>} An account's billing information.
   */
  async getBillingInfo (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Set an account's billing information
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/update_billing_info}
   *
   * @example
   * try {
   *     const billingInfoUpdate = {
   *       first_name: 'Aaron',
   *       last_name: 'Du Monde',
   *     }
   *     const billingInfo = await client.updateBillingInfo(accountId, billingInfoUpdate)
   *     console.log('Updated billing info: ', billingInfo.id)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<BillingInfo>} Updated billing information.
   */
  async updateBillingInfo (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's billing information
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_billing_info}
   *
   * @example
   * try {
   *     client.removeBillingInfo(accountId)
   *     console.log('Removed billing info from account: ', accountId)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise} Billing information deleted
   */
  async removeBillingInfo (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * Show the coupon redemptions for an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_coupon_redemptions}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on an account.
   */
  listAccountCouponRedemptions (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * Show the coupon redemption that is active on an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_active_coupon_redemption}
   *
   * @example
   * try {
   *     const redemption = await client.getActiveCouponRedemption(accountId)
   *     console.log('Fetched coupon redemption: ', redemption.id)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<CouponRedemption>} An active coupon redemption on an account.
   */
  async getActiveCouponRedemption (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Generate an active coupon redemption on an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_coupon_redemption}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {CouponRedemptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponRedemptionCreate}
   * @return {Promise<CouponRedemption>} Returns the new coupon redemption.
   */
  async createCouponRedemption (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Delete the active coupon redemption from an account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_coupon_redemption}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @return {Promise<CouponRedemption>} Coupon redemption deleted.
   */
  async removeCouponRedemption (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * List an account's credit payments
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_credit_payments}
   *
   * @example
   * const payments = client.listAccountCreditPayments(accountId)
   *
   *   for await (const payment of payments.each()) {
   *     console.log(payment.uuid)
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CreditPayment>} A list of the account's credit payments.
   */
  listAccountCreditPayments (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/credit_payments'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * List an account's invoices
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_invoices}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *
   * @return {Pager<Invoice>} A list of the account's invoices.
   */
  listAccountInvoices (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * Create an invoice for pending line items
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_invoice}
   *
   * @example
   * try {
   *     let invoiceCreate = {
   *       currency: 'USD',
   *       collection_method: 'automatic'
   *     }
   *     let invoiceCollection = await client.createInvoice(accountId, invoiceCreate)
   *     console.log('Created Invoice')
   *     console.log('Charge Invoice: ', invoiceCollection.chargeInvoice)
   *     console.log('Credit Invoices: ', invoiceCollection.creditInvoices)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the new invoices.
   */
  async createInvoice (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Preview new invoice for pending line items
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/preview_invoice}
   *
   * @example
   * try {
   *     const collection = await client.previewInvoice(accountId, {
   *       currency: "USD",
   *       collection_method: "automatic"
   *     })
   *     console.log(`Previewed invoice due at ${collection.chargeInvoice.dueAt}`)
   *     console.log(collection.chargeInvoice)
   *     console.log(collection.creditInvoices)
   *   } catch(err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<InvoiceCollection>} Returns the invoice previews.
   */
  async previewInvoice (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices/preview'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * List an account's line items
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_line_items}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.original - Filter by original field.
   * @param {string} params.state - Filter by state field.
   * @param {string} params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the account's line items.
   */
  listAccountLineItems (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * Create a new line item for the account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_line_item}
   *
   * @example
   * try {
   *     let lineItemReq = {
   *       currency: 'USD',
   *       unit_amount: 1000,
   *       type: 'charge' // choose "credit" for a credit
   *     }
   *     let lineItem = await client.createLineItem(accountId, lineItemReq)
   *     console.log('Created Line Item: ', lineItem.uuid)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {LineItemCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {LineItemCreate}
   * @return {Promise<LineItem>} Returns the new line item.
   */
  async createLineItem (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a list of an account's notes
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_notes}
   *
   * @example
   * const notes = client.listAccountNotes(accountId)
   *
   *   for await (const note of notes.each()) {
   *     console.log(note.message)
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @return {Pager<AccountNote>} A list of an account's notes.
   */
  listAccountNotes (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/notes'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * Fetch an account note
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_account_note}
   *
   * @example
   * try {
   *     console.log(accountId)
   *     const note = await client.getAccountNote(accountId, accountNoteId)
   *     console.log('Fetched account note: ', note.message)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {string} accountNoteId - Account Note ID.
   * @return {Promise<AccountNote>} An account note.
   */
  async getAccountNote (accountId, accountNoteId) {
    let path = '/sites/{site_id}/accounts/{account_id}/notes/{account_note_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'account_note_id': accountNoteId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Fetch a list of an account's shipping addresses
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_shipping_addresses}
   *
   * @example
   * const addresses = client.listShippingAddresses(accountId)
   *
   *   for await (const address of addresses.each()) {
   *     console.log(address.street1)
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<ShippingAddress>} A list of an account's shipping addresses.
   */
  listShippingAddresses (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * Create a new shipping address for the account
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_shipping_address}
   *
   * @example
   * try {
   *     const shippingAddressCreate = {
   *       first_name: 'Aaron',
   *       last_name: 'Du Monde',
   *       street1: '900 Camp St.',
   *       city: 'New Orleans',
   *       region: 'LA',
   *       postal_code: '70115',
   *       country: 'US'
   *     }
   *     const address = await client.createShippingAddress(accountId, shippingAddressCreate)
   *     console.log('Created shipping address: ', address.street1)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {ShippingAddressCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressCreate}
   * @return {Promise<ShippingAddress>} Returns the new shipping address.
   */
  async createShippingAddress (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch an account's shipping address
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_shipping_address}
   *
   * @example
   * try {
   *     const address = await client.getShippingAddress(accountId, shippingAddressId)
   *     console.log('Fetched shipping address: ', address.street1)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return {Promise<ShippingAddress>} A shipping address.
   */
  async getShippingAddress (accountId, shippingAddressId) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Update an account's shipping address
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/update_shipping_address}
   *
   * @example
   * try {
   *     const shadUpdate = {
   *       first_name: "Benjamin",
   *       last_name: "Du Monde"
   *     }
   *     const address = await client.updateShippingAddress(accountId, shippingAddressId, shadUpdate)
   *     console.log('Updated shipping address: ', address.street1)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {string} shippingAddressId - Shipping Address ID.
   * @param {ShippingAddressUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressUpdate}
   * @return {Promise<ShippingAddress>} The updated shipping address.
   */
  async updateShippingAddress (accountId, shippingAddressId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's shipping address
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_shipping_address}
   *
   * @example
   * try {
   *     await client.removeShippingAddress(accountId, shippingAddress.id)
   *     console.log('Removed shipping address: ', shippingAddress.street1)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return {Promise} Shipping address deleted.
   */
  async removeShippingAddress (accountId, shippingAddressId) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * List an account's subscriptions
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_subscriptions}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.state - Filter by state.
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *
   * @return {Pager<Subscription>} A list of the account's subscriptions.
   */
  listAccountSubscriptions (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/subscriptions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * List an account's transactions
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_transactions}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param {string} params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the account's transactions.
   */
  listAccountTransactions (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/transactions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * List an account's child accounts
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_child_accounts}
   *
   *
   * @param {string} accountId - Account ID or code (use prefix: `code-`, e.g. `code-bob`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.subscriber - Filter accounts accounts with or without a subscription in the `active`,
   *   `canceled`, or `future` state.
   *
   * @param {string} params.pastDue - Filter for accounts with an invoice in the `past_due` state.
   * @return {Pager<Account>} A list of an account's child accounts.
   */
  listChildAccounts (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/accounts'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return new Pager(this, path, params)
  }

  /**
   * List a site's account acquisition data
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_account_acquisition}
   *
   *
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Promise<AccountAcquisition>} A list of the site's account acquisition data.
   */
  async listAccountAcquisition (params = {}) {
    let path = '/sites/{site_id}/acquisitions'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path, null)
  }

  /**
   * List a site's coupons
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_coupons}
   *
   * @example
   * const coupons = client.listCoupons()
   *
   *   for await (const coupon of coupons.each()) {
   *     console.log(coupon.code)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<Coupon>} A list of the site's coupons.
   */
  listCoupons (params = {}) {
    let path = '/sites/{site_id}/coupons'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Create a new coupon
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_coupon}
   *
   *
   * @param {CouponCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponCreate}
   * @return {Promise<Coupon>} A new coupon.
   */
  async createCoupon (body) {
    let path = '/sites/{site_id}/coupons'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a coupon
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_coupon}
   *
   * @example
   * try {
   *     const coupon = await client.getCoupon(couponId)
   *     console.log('Fetched coupon: ', coupon.code)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} couponId - Coupon ID or code (use prefix: `code-`, e.g. `code-10off`).
   * @return {Promise<Coupon>} A coupon.
   */
  async getCoupon (couponId) {
    let path = '/sites/{site_id}/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Update an active coupon
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/update_coupon}
   *
   *
   * @param {string} couponId - Coupon ID or code (use prefix: `code-`, e.g. `code-10off`).
   * @param {CouponUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return {Promise<Coupon>} The updated coupon.
   */
  async updateCoupon (couponId, body) {
    let path = '/sites/{site_id}/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * List unique coupon codes associated with a bulk coupon
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_unique_coupon_codes}
   *
   *
   * @param {string} couponId - Coupon ID or code (use prefix: `code-`, e.g. `code-10off`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<UniqueCouponCode>} A list of unique coupon codes that were generated
   */
  listUniqueCouponCodes (couponId, params = {}) {
    let path = '/sites/{site_id}/coupons/{coupon_id}/unique_coupon_codes'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return new Pager(this, path, params)
  }

  /**
   * List a site's credit payments
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_credit_payments}
   *
   * @example
   * const payments = client.listCreditPayments()
   *
   *   for await (const payment of payments.each()) {
   *     console.log(payment.uuid)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CreditPayment>} A list of the site's credit payments.
   */
  listCreditPayments (params = {}) {
    let path = '/sites/{site_id}/credit_payments'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Fetch a credit payment
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_credit_payment}
   *
   *
   * @param {string} creditPaymentId - Credit Payment ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise<CreditPayment>} A credit payment.
   */
  async getCreditPayment (creditPaymentId) {
    let path = '/sites/{site_id}/credit_payments/{credit_payment_id}'
    path = this._interpolatePath(path, { 'credit_payment_id': creditPaymentId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * List a site's custom field definitions
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_custom_field_definitions}
   *
   * @example
   * const definitions = client.listCustomFieldDefinitions()
   *
   *   for await (const definition of definitions.each()) {
   *     console.log(definition.displayName)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CustomFieldDefinition>} A list of the site's custom field definitions.
   */
  listCustomFieldDefinitions (params = {}) {
    let path = '/sites/{site_id}/custom_field_definitions'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Fetch an custom field definition
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_custom_field_definition}
   *
   * @example
   * try {
   *     const definition = await client.getCustomFieldDefinition(definitionId)
   *     console.log('Fetched custom field definition: ', definition.displayName)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} customFieldDefinitionId - Custom Field Definition ID
   * @return {Promise<CustomFieldDefinition>} An custom field definition.
   */
  async getCustomFieldDefinition (customFieldDefinitionId) {
    let path = '/sites/{site_id}/custom_field_definitions/{custom_field_definition_id}'
    path = this._interpolatePath(path, { 'custom_field_definition_id': customFieldDefinitionId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * List a site's invoices
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_invoices}
   *
   * @example
   * const invoices = client.listInvoices()
   *
   *   for await (const invoice of invoices.each()) {
   *     console.log(invoice.number)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *
   * @return {Pager<Invoice>} A list of the site's invoices.
   */
  listInvoices (params = {}) {
    let path = '/sites/{site_id}/invoices'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Fetch an invoice
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_invoice}
   *
   * @example
   * try {
   *     const invoice = await client.getInvoice(invoiceId)
   *     console.log('Fetched Invoice: ', invoice.number)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @return {Promise<Invoice>} An invoice.
   */
  async getInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Update an invoice
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/put_invoice}
   *
   * @example
   * try {
   *     const invoiceUpdate = {
   *       customer_notes: "New notes",
   *       terms_and_conditions: "New terms and conditions"
   *     }
   *
   *     const invoice = await client.putInvoice(invoiceId, invoiceUpdate)
   *     console.log('Edited invoice: ', invoice.number)
   *   } catch(err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @param {InvoiceUpdatable} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceUpdatable}
   * @return {Promise<Invoice>} An invoice.
   */
  async putInvoice (invoiceId, body) {
    let path = '/sites/{site_id}/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Collect a pending or past due, automatic invoice
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/collect_invoice}
   *
   * @example
   * try {
   *     const invoice = await client.collectInvoice(invoiceId)
   *     console.log('Collected invoice: ', invoice.number)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @return {Promise<Invoice>} The updated invoice.
   */
  async collectInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/collect'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * Mark an open invoice as failed
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/fail_invoice}
   *
   * @example
   * try {
   *     const invoice = await client.failInvoice(invoiceId)
   *     console.log('Failed invoice: ', invoice.number)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @return {Promise<Invoice>} The updated invoice.
   */
  async failInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/mark_failed'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * Mark an open invoice as successful
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/mark_invoice_successful}
   *
   * @example
   * try {
   *     const invoice = await client.markInvoiceSuccessful(invoiceId)
   *     console.log(`Marked invoice #${invoice.number} successful`)
   *   } catch(err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @return {Promise<Invoice>} The updated invoice.
   */
  async markInvoiceSuccessful (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/mark_successful'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * Reopen a closed, manual invoice
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/reopen_invoice}
   *
   * @example
   * try {
   *     const invoice = await client.reopenInvoice(invoiceId)
   *     console.log('Reopened invoice: ', invoice.number)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @return {Promise<Invoice>} The updated invoice.
   */
  async reopenInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/reopen'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * List a invoice's line items
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_invoice_line_items}
   *
   *
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.original - Filter by original field.
   * @param {string} params.state - Filter by state field.
   * @param {string} params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the invoice's line items.
   */
  listInvoiceLineItems (invoiceId, params = {}) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/line_items'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return new Pager(this, path, params)
  }

  /**
   * Show the coupon redemptions applied to an invoice
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_invoice_coupon_redemptions}
   *
   *
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions associated with the invoice.
   */
  listInvoiceCouponRedemptions (invoiceId, params = {}) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return new Pager(this, path, params)
  }

  /**
   * List an invoice's related credit or charge invoices
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_related_invoices}
   *
   * @example
   * const invoices = client.listRelatedInvoices(invoiceId)
   *
   *   for await (const invoice of invoices.each()) {
   *     console.log(invoice.number)
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @return {Pager<Invoice>} A list of the credit or charge invoices associated with the invoice.
   */
  listRelatedInvoices (invoiceId, params = {}) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/related_invoices'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return new Pager(this, path, params)
  }

  /**
   * Refund an invoice
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/refund_invoice}
   *
   * @example
   * try {
   *     const invoiceRefund = {
   *       credit_customer_notes: "Notes on credits",
   *       type: "amount", // could also be "line_items"
   *       amount: 100
   *     }
   *
   *     const invoice = await client.refundInvoice(invoiceId, invoiceRefund)
   *     console.log('Refunded invoice: ', invoice.number)
   *   } catch(err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} invoiceId - Invoice ID or number (use prefix: `number-`, e.g. `number-1000`).
   * @param {InvoiceRefund} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceRefund}
   * @return {Promise<Invoice>} Returns the new credit invoice.
   */
  async refundInvoice (invoiceId, body) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/refund'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * List a site's line items
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_line_items}
   *
   * @example
   * const lineItems = client.listLineItems()
   *
   *   for await (const item of lineItems.each()) {
   *     console.log(`Item ${item.id} for ${item.amount}`)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.original - Filter by original field.
   * @param {string} params.state - Filter by state field.
   * @param {string} params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the site's line items.
   */
  listLineItems (params = {}) {
    let path = '/sites/{site_id}/line_items'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Fetch a line item
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_line_item}
   *
   * @example
   * try {
   *     const lineItem = await client.getLineItem(lineItemId)
   *     console.log('Fetched line item: ', lineItem.uuid)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} lineItemId - Line Item ID.
   * @return {Promise<LineItem>} A line item.
   */
  async getLineItem (lineItemId) {
    let path = '/sites/{site_id}/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': lineItemId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Delete an uninvoiced line item
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_line_item}
   *
   * @example
   * try {
   *     await client.removeLineItem(lineItemId)
   *     console.log('Removed line item: ', lineItemId)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} lineItemId - Line Item ID.
   * @return {Promise} Line item deleted.
   */
  async removeLineItem (lineItemId) {
    let path = '/sites/{site_id}/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': lineItemId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * List a site's plans
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_plans}
   *
   * @example
   * const plans = client.listPlans()
   *
   *   for await (const plan of plans.each()) {
   *     console.log(plan.code)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.state - Filter by state.
   * @return {Pager<Plan>} A list of plans.
   */
  listPlans (params = {}) {
    let path = '/sites/{site_id}/plans'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Create a plan
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_plan}
   *
   * @example
   * try {
   *     const planCreate = {
   *       name: 'Monthly Coffee Subscription',
   *       code: planCode,
   *       currencies: [
   *         {
   *           currency: 'USD',
   *           unit_amount: 10000
   *         }
   *       ]
   *     }
   *     const plan = await client.createPlan(planCreate)
   *     console.log('Created Plan: ', plan.code)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {PlanCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanCreate}
   * @return {Promise<Plan>} A plan.
   */
  async createPlan (body) {
    let path = '/sites/{site_id}/plans'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a plan
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_plan}
   *
   * @example
   * try {
   *     const plan = await client.getPlan(planId)
   *     console.log('Fetched plan: ', plan.code)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @return {Promise<Plan>} A plan.
   */
  async getPlan (planId) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Update a plan
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/update_plan}
   *
   * @example
   * try {
   *     const planUpdate = {
   *       name: 'New monthly coffee subscription'
   *     }
   *     const plan = await client.updatePlan(planId, planUpdate)
   *     console.log('Updated plan: ', plan.code)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @param {PlanUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanUpdate}
   * @return {Promise<Plan>} A plan.
   */
  async updatePlan (planId, body) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove a plan
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_plan}
   *
   * @example
   * try {
   *     const plan = await client.removePlan(planId)
   *     console.log('Removed plan: ', plan.code)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @return {Promise<Plan>} Plan deleted
   */
  async removePlan (planId) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * List a plan's add-ons
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_plan_add_ons}
   *
   *
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listPlanAddOns (planId, params = {}) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return new Pager(this, path, params)
  }

  /**
   * Create an add-on
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_plan_add_on}
   *
   *
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @param {AddOnCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnCreate}
   * @return {Promise<AddOn>} An add-on.
   */
  async createPlanAddOn (planId, body) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a plan's add-on
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_plan_add_on}
   *
   *
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @param {string} addOnId - Add-on ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @return {Promise<AddOn>} An add-on.
   */
  async getPlanAddOn (planId, addOnId) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'plan_id': planId, 'add_on_id': addOnId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Update an add-on
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/update_plan_add_on}
   *
   *
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @param {string} addOnId - Add-on ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @param {AddOnUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnUpdate}
   * @return {Promise<AddOn>} An add-on.
   */
  async updatePlanAddOn (planId, addOnId, body) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'plan_id': planId, 'add_on_id': addOnId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an add-on
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_plan_add_on}
   *
   *
   * @param {string} planId - Plan ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @param {string} addOnId - Add-on ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @return {Promise<AddOn>} Add-on deleted
   */
  async removePlanAddOn (planId, addOnId) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'plan_id': planId, 'add_on_id': addOnId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * List a site's add-ons
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_add_ons}
   *
   *
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.state - Filter by state.
   * @return {Pager<AddOn>} A list of add-ons.
   */
  listAddOns (params = {}) {
    let path = '/sites/{site_id}/add_ons'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Fetch an add-on
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_add_on}
   *
   *
   * @param {string} addOnId - Add-on ID or code (use prefix: `code-`, e.g. `code-gold`).
   * @return {Promise<AddOn>} An add-on.
   */
  async getAddOn (addOnId) {
    let path = '/sites/{site_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': addOnId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * List a site's subscriptions
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_subscriptions}
   *
   * @example
   * const subscriptions = client.listSubscriptions()
   *
   *   for await (const subscription of subscriptions.each()) {
   *     console.log(subscription.uuid)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.state - Filter by state.
   *   - When `state=active`, `state=canceled`, `state=expired`, or `state=future`, subscriptions with states that match the query and only those subscriptions will be returned.
   *   - When `state=in_trial`, only subscriptions that have a trial_started_at date earlier than now and a trial_ends_at date later than now will be returned.
   *   - When `state=live`, only subscriptions that are in an active, canceled, or future state or are in trial will be returned.
   *
   * @return {Pager<Subscription>} A list of the site's subscriptions.
   */
  listSubscriptions (params = {}) {
    let path = '/sites/{site_id}/subscriptions'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Create a new subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_subscription}
   *
   * @example
   * try {
   *     let subscriptionReq = {
   *       plan_code: planCode,
   *       currency: `USD`,
   *       account: {
   *         code: accountCode
   *       }
   *     }
   *     let sub = await client.createSubscription(subscriptionReq)
   *     console.log('Created subscription: ', sub.uuid)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {SubscriptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCreate}
   * @return {Promise<Subscription>} A subscription.
   */
  async createSubscription (body) {
    let path = '/sites/{site_id}/subscriptions'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_subscription}
   *
   * @example
   * try {
   *     const subscription = await client.getSubscription(subscriptionId)
   *     console.log('Fetched subscription: ', subscription.uuid)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise<Subscription>} A subscription.
   */
  async getSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Modify a subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/modify_subscription}
   *
   * @example
   * try {
   *     const update = {
   *       terms_and_conditions: "Some new terms and conditions",
   *       customer_notes: "Some new customer notes"
   *     }
   *     const subscription = await client.modifySubscription(subscriptionId, update)
   *     console.log('Modified subscription: ', subscription.uuid)
   *   } catch(err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @param {SubscriptionUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionUpdate}
   * @return {Promise<Subscription>} A subscription.
   */
  async modifySubscription (subscriptionId, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Terminate a subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/terminate_subscription}
   *
   * @example
   * try {
   *     const subscription = await client.terminateSubscription(subscriptionId)
   *     console.log('Terminated subscription: ', subscription.uuid)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {string} params.refund - The type of refund to perform:
   *
   *   * `full` - Performs a full refund of the last invoice for the current subscription term.
   *   * `partial` - Prorates a refund based on the amount of time remaining in the current bill cycle.
   *   * `none` - Terminates the subscription without a refund.
   *
   *   In the event that the most recent invoice is a $0 invoice paid entirely by credit, Recurly will apply the credit back to the customer’s account.
   *
   *   You may also terminate a subscription with no refund and then manually refund specific invoices.
   *
   * @return {Promise<Subscription>} An expired subscription.
   */
  async terminateSubscription (subscriptionId, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * Cancel a subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/cancel_subscription}
   *
   * @example
   * try {
   *     let expiredSub = await client.cancelSubscription(subscriptionId)
   *     console.log('Canceled Subscription: ', expiredSub.uuid)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise<Subscription>} A canceled or failed subscription.
   */
  async cancelSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/cancel'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * Reactivate a canceled subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/reactivate_subscription}
   *
   * @example
   * try {
   *     const subscription = await client.reactivateSubscription(subscriptionId)
   *     console.log('Reactivated subscription: ', subscription.uuid)
   *   } catch(err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise<Subscription>} An active subscription.
   */
  async reactivateSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/reactivate'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * Pause subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/pause_subscription}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @param {SubscriptionPause} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionPause}
   * @return {Promise<Subscription>} A subscription.
   */
  async pauseSubscription (subscriptionId, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/pause'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Resume subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/resume_subscription}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise<Subscription>} A subscription.
   */
  async resumeSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/resume'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, null)
  }

  /**
   * Fetch a subscription's pending change
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_subscription_change}
   *
   * @example
   * try {
   *     const change = await client.getSubscriptionChange(subscriptionId)
   *     console.log('Fetched subscription change: ', change.id)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise<SubscriptionChange>} A subscription's pending change.
   */
  async getSubscriptionChange (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Create a new subscription change
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/create_subscription_change}
   *
   * @example
   * try {
   *     const subscriptionChangeCreate = {
   *       plan_code: newPlanCode,
   *       timeframe: 'now'
   *     }
   *
   *     const change = await client.createSubscriptionChange(subscriptionId, subscriptionChangeCreate)
   *     console.log('Created subscription change: ', change.id)
   *   } catch (err) {
   *     if (err && err.type === 'validation') {
   *       // If the request was not valid, you may want to tell your user
   *       // why. You can find the invalid params and reasons in err.params
   *       console.log('Failed validation', err.params)
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @param {SubscriptionChangeCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return {Promise<SubscriptionChange>} A subscription change.
   */
  async createSubscriptionChange (subscriptionId, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Delete the pending subscription change
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/remove_subscription_change}
   *
   * @example
   * try {
   *     await client.removeSubscriptionChange(subscriptionId)
   *     console.log('Removed subscription change: ', subscriptionId)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise} Subscription change was deleted.
   */
  async removeSubscriptionChange (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * List a subscription's invoices
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_subscription_invoices}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.type - Filter by type when:
   *   - `type=charge`, only charge invoices will be returned.
   *   - `type=credit`, only credit invoices will be returned.
   *   - `type=non-legacy`, only charge and credit invoices will be returned.
   *   - `type=legacy`, only legacy invoices will be returned.
   *
   * @return {Pager<Invoice>} A list of the subscription's invoices.
   */
  listSubscriptionInvoices (subscriptionId, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/invoices'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return new Pager(this, path, params)
  }

  /**
   * List a subscription's line items
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_subscription_line_items}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.original - Filter by original field.
   * @param {string} params.state - Filter by state field.
   * @param {string} params.type - Filter by type field.
   * @return {Pager<LineItem>} A list of the subscription's line items.
   */
  listSubscriptionLineItems (subscriptionId, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/line_items'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return new Pager(this, path, params)
  }

  /**
   * Show the coupon redemptions for a subscription
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_subscription_coupon_redemptions}
   *
   *
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @return {Pager<CouponRedemption>} A list of the the coupon redemptions on a subscription.
   */
  listSubscriptionCouponRedemptions (subscriptionId, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return new Pager(this, path, params)
  }

  /**
   * List a site's transactions
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/list_transactions}
   *
   * @example
   * const transactions = client.listTransactions()
   *
   *   for await (const transaction of transactions.each()) {
   *     console.log(transaction.uuid)
   *   }
   *
   * // END_EXAMPLE
   * @param {Object} params - The optional url parameters for this request.
   * @param {array} params.ids - Filter results by their IDs. Up to 200 IDs can be passed at once using
   *   commas as separators, e.g. `ids=h1at4d57xlmy,gyqgg0d3v9n1,jrsm5b4yefg6`.
   *
   *   **Important notes:**
   *   * The `ids` parameter cannot be used with any other ordering or filtering
   *     parameters (`limit`, `order`, `sort`, `begin_time`, `end_time`, etc)
   *   * Invalid or unknown IDs will be ignored, so you should check that the
   *     results correspond to your request.
   *   * Records are returned in an arbitrary order. Since results are all
   *     returned at once you can sort the records yourself.
   *
   * @param {number} params.limit - Limit number of records 1-200.
   * @param {string} params.order - Sort order.
   * @param {string} params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @param {string} params.beginTime - Filter by begin_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.endTime - Filter by end_time when `sort=created_at` or `sort=updated_at`.
   *   **Note:** this value is an ISO8601 timestamp. A partial timestamp that does not include a time zone will default to UTC.
   *
   * @param {string} params.type - Filter by type field. The value `payment` will return both `purchase` and `capture` transactions.
   * @param {string} params.success - Filter by success field.
   * @return {Pager<Transaction>} A list of the site's transactions.
   */
  listTransactions (params = {}) {
    let path = '/sites/{site_id}/transactions'
    path = this._interpolatePath(path)
    return new Pager(this, path, params)
  }

  /**
   * Fetch a transaction
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_transaction}
   *
   * @example
   * try {
   *     const transaction = await client.getTransaction(transactionId)
   *     console.log('Fetched transaction: ', transaction.uuid)
   *   } catch (err) {
   *     if (err && err.type === 'not_found') {
   *       // If the request was not found, you may want to alert the user or
   *       // just return null
   *       console.log('Resource Not Found')
   *     }
   *     // If we don't know what to do with the err, we should
   *     // probably re-raise and let our web framework and logger handle it
   *     throw err
   *   }
   *
   * // END_EXAMPLE
   * @param {string} transactionId - Transaction ID or UUID (use prefix: `uuid-`, e.g. `uuid-123457890`).
   * @return {Promise<Transaction>} A transaction.
   */
  async getTransaction (transactionId) {
    let path = '/sites/{site_id}/transactions/{transaction_id}'
    path = this._interpolatePath(path, { 'transaction_id': transactionId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Fetch a unique coupon code
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/get_unique_coupon_code}
   *
   *
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code (use prefix: `code-`, e.g. `code-abc-8dh2-def`).
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  async getUniqueCouponCode (uniqueCouponCodeId) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('GET', path, null)
  }

  /**
   * Deactivate a unique coupon code
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/deactivate_unique_coupon_code}
   *
   *
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code (use prefix: `code-`, e.g. `code-abc-8dh2-def`).
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  async deactivateUniqueCouponCode (uniqueCouponCodeId) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('DELETE', path, null)
  }

  /**
   * Restore a unique coupon code
   *
   * API docs: {@link https://partner-docs.recurly.com/v2018-08-09#operation/reactivate_unique_coupon_code}
   *
   *
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code (use prefix: `code-`, e.g. `code-abc-8dh2-def`).
   * @return {Promise<UniqueCouponCode>} A unique coupon code.
   */
  async reactivateUniqueCouponCode (uniqueCouponCodeId) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}/restore'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('PUT', path, null)
  }
}

module.exports = Client
