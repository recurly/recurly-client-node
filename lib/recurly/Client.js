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
   * Verify an account's credit card billing cvv
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/verify_billing_info_cvv}
   *
   *
   * @param {string} accountId - Account ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @param {BillingInfoVerifyCVV} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoVerifyCVV}
   * @return {Promise<Transaction>} Transaction information from verify.
   */
  async verifyBillingInfoCvv (accountId, body, options = {}) {
    let path = '/accounts/{account_id}/billing_info/verify_cvv'
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
   * @param {string} invoiceTemplateId - Invoice template ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
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
   * Create a pending purchase
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/create_pending_purchase}
   *
   *
   * @param {PurchaseCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PurchaseCreate}
   * @return {Promise<InvoiceCollection>} Returns the pending invoice
   */
  async createPendingPurchase (body, options = {}) {
    let path = '/purchases/pending'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body, options)
  }

  /**
   * List the dates that have an available export to download.
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_export_dates}
   *
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
   * @param {string} dunningCampaignId - Dunning Campaign ID, e.g. `e28zov4fw0v2`.
   * @param {DunningCampaignsBulkUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {DunningCampaignsBulkUpdate}
   * @return {Promise<DunningCampaignsBulkUpdateResponse>} A list of updated plans.
   */
  async putDunningCampaignBulkUpdate (dunningCampaignId, body, options = {}) {
    let path = '/dunning_campaigns/{dunning_campaign_id}/bulk_update'
    path = this._interpolatePath(path, { 'dunning_campaign_id': dunningCampaignId })
    return this._makeRequest('PUT', path, body, options)
  }

  /**
   * Show the invoice templates for a site
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/list_invoice_templates}
   *
   *
   * @param {Object} options - Optional configurations for the request
   * @param {Object} options.params - The optional url parameters for this request.
   * @param {string} options.params.sort - Sort field. You *really* only want to sort by `updated_at` in ascending
   *   order. In descending order updated records will move behind the cursor and could
   *   prevent some records from being returned.
   *
   * @return {Pager<InvoiceTemplate>} A list of the the invoice templates on a site.
   */
  listInvoiceTemplates (options = {}) {
    let path = '/invoice_templates'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  /**
   * Show the settings for an invoice template
   *
   * API docs: {@link https://developers.recurly.com/api/v2021-02-25#operation/get_invoice_template}
   *
   *
   * @param {string} invoiceTemplateId - Invoice template ID or code. For ID no prefix is used e.g. `e28zov4fw0v2`. For code use prefix `code-`, e.g. `code-bob`.
   * @return {Promise<InvoiceTemplate>} Settings for an invoice template.
   */
  async getInvoiceTemplate (invoiceTemplateId, options = {}) {
    let path = '/invoice_templates/{invoice_template_id}'
    path = this._interpolatePath(path, { 'invoice_template_id': invoiceTemplateId })
    return this._makeRequest('GET', path, null, options)
  }
}

module.exports = Client
