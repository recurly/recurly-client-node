'use strict'

let BaseClient = require('./BaseClient')

class Client extends BaseClient {
  apiVersion () {
    return 'v2018-10-04'
  }

  /**
   * List sites
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listSites (params = {}) {
    let path = '/sites'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a site
   *
   * @async
   * @return {Promise<Resource>}
   */
  async getSite () {
    let path = '/sites/{site_id}'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's accounts
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listAccounts (params = {}) {
    let path = '/sites/{site_id}/accounts'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Create an account
   *
   * @async
   * @param {AccountCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountCreate}
   * @return {Promise<Resource>}
   */
  async createAccount (body) {
    let path = '/sites/{site_id}/accounts'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch an account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async getAccount (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Modify an account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {AccountUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountUpdate}
   * @return {Promise<Resource>}
   */
  async updateAccount (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Deactivate an account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async deactivateAccount (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Fetch an account's acquisition data
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async getAccountAcquisition (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an account's acquisition data
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {AccountAcquisitionUpdatable} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountAcquisitionUpdatable}
   * @return {Promise<Resource>}
   */
  async updateAccountAcquisition (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's acquisition data
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async removeAccountAcquisition (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Reactivate an inactive account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async reactivateAccount (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/reactivate'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * Fetch an account's balance and past due status
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async getAccountBalance (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/balance'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch an account's billing information
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async getBillingInfo (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Set an account's billing information
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return {Promise<Resource>}
   */
  async updateBillingInfo (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's billing information
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async removeBillingInfo (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Show the coupon redemptions for an account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listAccountCouponRedemptions (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Show the coupon redemption that is active on an account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async getActiveCouponRedemption (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Generate an active coupon redemption on an account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {CouponRedemptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponRedemptionCreate}
   * @return {Promise<Resource>}
   */
  async createCouponRedemption (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Delete the active coupon redemption from an account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async removeCouponRedemption (account_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List an account's credit payments
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listAccountCreditPayments (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/credit_payments'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List an account's invoices
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listAccountInvoices (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Create an invoice for pending line items
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<Resource>}
   */
  async createInvoice (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Preview new invoice for pending line items
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return {Promise<Resource>}
   */
  async previewInvoice (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices/preview'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * List an account's line items
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listAccountLineItems (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new line item for the account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {LineItemCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {LineItemCreate}
   * @return {Promise<Resource>}
   */
  async createLineItem (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a list of an account's notes
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listAccountNotes (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/notes'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch an account note
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} account_note_id - Account Note ID.
   * @return {Promise<Resource>}
   */
  async getAccountNote (account_id, account_note_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/notes/{account_note_id}'
    path = this._interpolatePath(path, { 'account_id': account_id, 'account_note_id': account_note_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a list of an account's shipping addresses
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listShippingAddresses (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new shipping address for the account
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {ShippingAddressCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressCreate}
   * @return {Promise<Resource>}
   */
  async createShippingAddress (account_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch an account's shipping address
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} shipping_address_id - Shipping Address ID.
   * @return {Promise<Resource>}
   */
  async getShippingAddress (account_id, shipping_address_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': account_id, 'shipping_address_id': shipping_address_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an account's shipping address
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} shipping_address_id - Shipping Address ID.
   * @param {ShippingAddressUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressUpdate}
   * @return {Promise<Resource>}
   */
  async updateShippingAddress (account_id, shipping_address_id, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': account_id, 'shipping_address_id': shipping_address_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's shipping address
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} shipping_address_id - Shipping Address ID.
   * @return {Promise<Resource>}
   */
  async removeShippingAddress (account_id, shipping_address_id) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': account_id, 'shipping_address_id': shipping_address_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List an account's subscriptions
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listAccountSubscriptions (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/subscriptions'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List an account's transactions
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listAccountTransactions (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/transactions'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List an account's child accounts
   *
   * @async
   * @param {string} account_id - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return {Promise<Resource>}
   */
  async listChildAccounts (account_id, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/accounts'
    path = this._interpolatePath(path, { 'account_id': account_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's account acquisition data
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listAccountAcquisition (params = {}) {
    let path = '/sites/{site_id}/acquisitions'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's coupons
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listCoupons (params = {}) {
    let path = '/sites/{site_id}/coupons'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new coupon
   *
   * @async
   * @param {CouponCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponCreate}
   * @return {Promise<Resource>}
   */
  async createCoupon (body) {
    let path = '/sites/{site_id}/coupons'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a coupon
   *
   * @async
   * @param {string} coupon_id - Coupon ID or code (use prefix: +code-+, e.g. +code-10off+).
   * @return {Promise<Resource>}
   */
  async getCoupon (coupon_id) {
    let path = '/sites/{site_id}/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': coupon_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an active coupon
   *
   * @async
   * @param {string} coupon_id - Coupon ID or code (use prefix: +code-+, e.g. +code-10off+).
   * @param {CouponUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return {Promise<Resource>}
   */
  async updateCoupon (coupon_id, body) {
    let path = '/sites/{site_id}/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': coupon_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * List unique coupon codes associated with a bulk coupon
   *
   * @async
   * @param {string} coupon_id - Coupon ID or code (use prefix: +code-+, e.g. +code-10off+).
   * @return {Promise<Resource>}
   */
  async listUniqueCouponCodes (coupon_id, params = {}) {
    let path = '/sites/{site_id}/coupons/{coupon_id}/unique_coupon_codes'
    path = this._interpolatePath(path, { 'coupon_id': coupon_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's credit payments
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listCreditPayments (params = {}) {
    let path = '/sites/{site_id}/credit_payments'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a credit payment
   *
   * @async
   * @param {string} credit_payment_id - Credit Payment ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async getCreditPayment (credit_payment_id) {
    let path = '/sites/{site_id}/credit_payments/{credit_payment_id}'
    path = this._interpolatePath(path, { 'credit_payment_id': credit_payment_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's custom field definitions
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listCustomFieldDefinitions (params = {}) {
    let path = '/sites/{site_id}/custom_field_definitions'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch an custom field definition
   *
   * @async
   * @param {string} custom_field_definition_id - Custom Field Definition ID
   * @return {Promise<Resource>}
   */
  async getCustomFieldDefinition (custom_field_definition_id) {
    let path = '/sites/{site_id}/custom_field_definitions/{custom_field_definition_id}'
    path = this._interpolatePath(path, { 'custom_field_definition_id': custom_field_definition_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's invoices
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listInvoices (params = {}) {
    let path = '/sites/{site_id}/invoices'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch an invoice
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async getInvoice (invoice_id) {
    let path = '/sites/{site_id}/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an invoice
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @param {InvoiceUpdatable} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceUpdatable}
   * @return {Promise<Resource>}
   */
  async putInvoice (invoice_id, body) {
    let path = '/sites/{site_id}/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Collect a pending or past due, automatic invoice
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async collectInvoice (invoice_id) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/collect'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * Mark an open invoice as failed
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async failInvoice (invoice_id) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/mark_failed'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * Mark an open invoice as successful
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async markInvoiceSuccessful (invoice_id) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/mark_successful'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * Reopen a closed, manual invoice
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async reopenInvoice (invoice_id) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/reopen'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * List a invoice's line items
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async listInvoiceLineItems (invoice_id, params = {}) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/line_items'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Show the coupon redemptions applied to an invoice
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async listInvoiceCouponRedemptions (invoice_id, params = {}) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List an invoice's related credit or charge invoices
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return {Promise<Resource>}
   */
  async listRelatedInvoices (invoice_id) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/related_invoices'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Refund an invoice
   *
   * @async
   * @param {string} invoice_id - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @param {InvoiceRefund} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceRefund}
   * @return {Promise<Resource>}
   */
  async refundInvoice (invoice_id, body) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/refund'
    path = this._interpolatePath(path, { 'invoice_id': invoice_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * List a site's line items
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listLineItems (params = {}) {
    let path = '/sites/{site_id}/line_items'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a line item
   *
   * @async
   * @param {string} line_item_id - Line Item ID.
   * @return {Promise<Resource>}
   */
  async getLineItem (line_item_id) {
    let path = '/sites/{site_id}/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': line_item_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Delete an uninvoiced line item
   *
   * @async
   * @param {string} line_item_id - Line Item ID.
   * @return {Promise<Resource>}
   */
  async removeLineItem (line_item_id) {
    let path = '/sites/{site_id}/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': line_item_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a site's plans
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listPlans (params = {}) {
    let path = '/sites/{site_id}/plans'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Create a plan
   *
   * @async
   * @param {PlanCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanCreate}
   * @return {Promise<Resource>}
   */
  async createPlan (body) {
    let path = '/sites/{site_id}/plans'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a plan
   *
   * @async
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return {Promise<Resource>}
   */
  async getPlan (plan_id) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': plan_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Update a plan
   *
   * @async
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {PlanUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanUpdate}
   * @return {Promise<Resource>}
   */
  async updatePlan (plan_id, body) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': plan_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove a plan
   *
   * @async
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return {Promise<Resource>}
   */
  async removePlan (plan_id) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': plan_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a plan's add-ons
   *
   * @async
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return {Promise<Resource>}
   */
  async listPlanAddOns (plan_id, params = {}) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': plan_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Create an add-on
   *
   * @async
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {AddOnCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnCreate}
   * @return {Promise<Resource>}
   */
  async createPlanAddOn (plan_id, body) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': plan_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a plan's add-on
   *
   * @async
   * @param {string} add_on_id - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return {Promise<Resource>}
   */
  async getPlanAddOn (add_on_id, plan_id) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': add_on_id, 'plan_id': plan_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an add-on
   *
   * @async
   * @param {string} add_on_id - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {AddOnUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnUpdate}
   * @return {Promise<Resource>}
   */
  async updatePlanAddOn (add_on_id, plan_id, body) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': add_on_id, 'plan_id': plan_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an add-on
   *
   * @async
   * @param {string} add_on_id - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {string} plan_id - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return {Promise<Resource>}
   */
  async removePlanAddOn (add_on_id, plan_id) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': add_on_id, 'plan_id': plan_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a site's add-ons
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listAddOns (params = {}) {
    let path = '/sites/{site_id}/add_ons'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch an add-on
   *
   * @async
   * @param {string} add_on_id - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return {Promise<Resource>}
   */
  async getAddOn (add_on_id) {
    let path = '/sites/{site_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': add_on_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's subscriptions
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listSubscriptions (params = {}) {
    let path = '/sites/{site_id}/subscriptions'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new subscription
   *
   * @async
   * @param {SubscriptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionCreate}
   * @return {Promise<Resource>}
   */
  async createSubscription (body) {
    let path = '/sites/{site_id}/subscriptions'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a subscription
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async getSubscription (subscription_id) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Modify a subscription
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @param {SubscriptionUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionUpdate}
   * @return {Promise<Resource>}
   */
  async modifySubscription (subscription_id, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Terminate a subscription
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async terminateSubscription (subscription_id, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Cancel a subscription
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async cancelSubscription (subscription_id) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/cancel'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * Reactivate a canceled subscription
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async reactivateSubscription (subscription_id) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/reactivate'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * Pause subscription
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @param {SubscriptionPause} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionPause}
   * @return {Promise<Resource>}
   */
  async pauseSubscription (subscription_id, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/pause'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Resume subscription
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async resumeSubscription (subscription_id) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/resume'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('PUT', path)
  }

  /**
   * Fetch a subscription's pending change
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async getSubscriptionChange (subscription_id) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new subscription change
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @param {SubscriptionChangeCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return {Promise<Resource>}
   */
  async createSubscriptionChange (subscription_id, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Delete the pending subscription change
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async removeSubscriptionChange (subscription_id) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a subscription's invoices
   *
   * @async
   * @param {string} subscription_id - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async listSubscriptionInvoices (subscription_id, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/invoices'
    path = this._interpolatePath(path, { 'subscription_id': subscription_id })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's transactions
   *
   * @async
   * @return {Promise<Resource>}
   */
  async listTransactions (params = {}) {
    let path = '/sites/{site_id}/transactions'
    path = this._interpolatePath(path)
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a transaction
   *
   * @async
   * @param {string} transaction_id - Transaction ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return {Promise<Resource>}
   */
  async getTransaction (transaction_id) {
    let path = '/sites/{site_id}/transactions/{transaction_id}'
    path = this._interpolatePath(path, { 'transaction_id': transaction_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a unique coupon code
   *
   * @async
   * @param {string} unique_coupon_code_id - Unique Coupon Code ID or code (use prefix: +code-+, e.g. +code-abc-8dh2-def+).
   * @return {Promise<Resource>}
   */
  async getUniqueCouponCode (unique_coupon_code_id) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': unique_coupon_code_id })
    return this._makeRequest('GET', path)
  }

  /**
   * Deactivate a unique coupon code
   *
   * @async
   * @param {string} unique_coupon_code_id - Unique Coupon Code ID or code (use prefix: +code-+, e.g. +code-abc-8dh2-def+).
   * @return {Promise<Resource>}
   */
  async deactivateUniqueCouponCode (unique_coupon_code_id) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': unique_coupon_code_id })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Restore a unique coupon code
   *
   * @async
   * @param {string} unique_coupon_code_id - Unique Coupon Code ID or code (use prefix: +code-+, e.g. +code-abc-8dh2-def+).
   * @return {Promise<Resource>}
   */
  async reactivateUniqueCouponCode (unique_coupon_code_id) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}/restore'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': unique_coupon_code_id })
    return this._makeRequest('PUT', path)
  }
}

module.exports = Client
