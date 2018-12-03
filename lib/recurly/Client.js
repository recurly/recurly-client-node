'use strict'

const BaseClient = require('./BaseClient')

class Client extends BaseClient {
  apiVersion () {
    return 'v2018-10-04'
  }

  /**
   * List sites
   *
   * @async
   * @return Pager<Site> A list of sites.
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
   * @return Promise<Site> A site.
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
   * @return Pager<Account> A list of the site's accounts.
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
   * @return Promise<Account> An account.
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
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<Account> An account.
   */
  async getAccount (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Modify an account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {AccountUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountUpdate}
   * @return Promise<Account> An account.
   */
  async updateAccount (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Deactivate an account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<Account> An account.
   */
  async deactivateAccount (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Fetch an account's acquisition data
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<AccountAcquisition> An account's acquisition data.
   */
  async getAccountAcquisition (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an account's acquisition data
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {AccountAcquisitionUpdatable} body - The object representing the JSON request to send to the server. It should conform to the schema of {AccountAcquisitionUpdatable}
   * @return Promise<AccountAcquisition> An account's updated acquisition data.
   */
  async updateAccountAcquisition (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's acquisition data
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise Acquisition data was succesfully deleted.
   */
  async removeAccountAcquisition (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/acquisition'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Reactivate an inactive account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<Account> An account.
   */
  async reactivateAccount (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/reactivate'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path)
  }

  /**
   * Fetch an account's balance and past due status
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<AccountBalance> An account's balance.
   */
  async getAccountBalance (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/balance'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch an account's billing information
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<BillingInfo> An account's billing information.
   */
  async getBillingInfo (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Set an account's billing information
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {BillingInfoCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {BillingInfoCreate}
   * @return Promise<BillingInfo> Updated billing information.
   */
  async updateBillingInfo (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's billing information
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise Billing information deleted
   */
  async removeBillingInfo (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/billing_info'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Show the coupon redemptions for an account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<CouponRedemption> A list of the the coupon redemptions on an account.
   */
  async listAccountCouponRedemptions (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Show the coupon redemption that is active on an account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<CouponRedemption> An active coupon redemption on an account.
   */
  async getActiveCouponRedemption (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Generate an active coupon redemption on an account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {CouponRedemptionCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponRedemptionCreate}
   * @return Promise<CouponRedemption> Returns the new coupon redemption.
   */
  async createCouponRedemption (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Delete the active coupon redemption from an account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Promise<CouponRedemption> Coupon redemption deleted.
   */
  async removeCouponRedemption (accountId) {
    let path = '/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List an account's credit payments
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<CreditPayment> A list of the account's credit payments.
   */
  async listAccountCreditPayments (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/credit_payments'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * List an account's invoices
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<Invoice> A list of the account's invoices.
   */
  async listAccountInvoices (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Create an invoice for pending line items
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return Promise<InvoiceCollection> Returns the new invoices.
   */
  async createInvoice (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Preview new invoice for pending line items
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {InvoiceCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceCreate}
   * @return Promise<InvoiceCollection> Returns the invoice previews.
   */
  async previewInvoice (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/invoices/preview'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * List an account's line items
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<LineItem> A list of the account's line items.
   */
  async listAccountLineItems (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new line item for the account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {LineItemCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {LineItemCreate}
   * @return Promise<LineItem> Returns the new line item.
   */
  async createLineItem (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/line_items'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a list of an account's notes
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<AccountNote> A list of an account's notes.
   */
  async listAccountNotes (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/notes'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch an account note
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} accountNoteId - Account Note ID.
   * @return Promise<AccountNote> An account note.
   */
  async getAccountNote (accountId, accountNoteId) {
    let path = '/sites/{site_id}/accounts/{account_id}/notes/{account_note_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'account_note_id': accountNoteId })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a list of an account's shipping addresses
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<ShippingAddress> A list of an account's shipping addresses.
   */
  async listShippingAddresses (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new shipping address for the account
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {ShippingAddressCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressCreate}
   * @return Promise<ShippingAddress> Returns the new shipping address.
   */
  async createShippingAddress (accountId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch an account's shipping address
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return Promise<ShippingAddress> A shipping address.
   */
  async getShippingAddress (accountId, shippingAddressId) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an account's shipping address
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} shippingAddressId - Shipping Address ID.
   * @param {ShippingAddressUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {ShippingAddressUpdate}
   * @return Promise<ShippingAddress> The updated shipping address.
   */
  async updateShippingAddress (accountId, shippingAddressId, body) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an account's shipping address
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @param {string} shippingAddressId - Shipping Address ID.
   * @return Promise Shipping address deleted.
   */
  async removeShippingAddress (accountId, shippingAddressId) {
    let path = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
    path = this._interpolatePath(path, { 'account_id': accountId, 'shipping_address_id': shippingAddressId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List an account's subscriptions
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<Subscription> A list of the account's subscriptions.
   */
  async listAccountSubscriptions (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/subscriptions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * List an account's transactions
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<Transaction> A list of the account's transactions.
   */
  async listAccountTransactions (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/transactions'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * List an account's child accounts
   *
   * @async
   * @param {string} accountId - Account ID or code (use prefix: +code-+, e.g. +code-bob+).
   * @return Pager<Account> A list of an account's child accounts.
   */
  async listChildAccounts (accountId, params = {}) {
    let path = '/sites/{site_id}/accounts/{account_id}/accounts'
    path = this._interpolatePath(path, { 'account_id': accountId })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's account acquisition data
   *
   * @async
   * @return Promise<AccountAcquisition> A list of the site's account acquisition data.
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
   * @return Pager<Coupon> A list of the site's coupons.
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
   * @return Promise<Coupon> A new coupon.
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
   * @param {string} couponId - Coupon ID or code (use prefix: +code-+, e.g. +code-10off+).
   * @return Promise<Coupon> A coupon.
   */
  async getCoupon (couponId) {
    let path = '/sites/{site_id}/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an active coupon
   *
   * @async
   * @param {string} couponId - Coupon ID or code (use prefix: +code-+, e.g. +code-10off+).
   * @param {CouponUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {CouponUpdate}
   * @return Promise<Coupon> The updated coupon.
   */
  async updateCoupon (couponId, body) {
    let path = '/sites/{site_id}/coupons/{coupon_id}'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * List unique coupon codes associated with a bulk coupon
   *
   * @async
   * @param {string} couponId - Coupon ID or code (use prefix: +code-+, e.g. +code-10off+).
   * @return Pager<UniqueCouponCode> A list of unique coupon codes that were generated
   */
  async listUniqueCouponCodes (couponId, params = {}) {
    let path = '/sites/{site_id}/coupons/{coupon_id}/unique_coupon_codes'
    path = this._interpolatePath(path, { 'coupon_id': couponId })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's credit payments
   *
   * @async
   * @return Pager<CreditPayment> A list of the site's credit payments.
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
   * @param {string} creditPaymentId - Credit Payment ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<CreditPayment> A credit payment.
   */
  async getCreditPayment (creditPaymentId) {
    let path = '/sites/{site_id}/credit_payments/{credit_payment_id}'
    path = this._interpolatePath(path, { 'credit_payment_id': creditPaymentId })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's custom field definitions
   *
   * @async
   * @return Pager<CustomFieldDefinition> A list of the site's custom field definitions.
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
   * @param {string} customFieldDefinitionId - Custom Field Definition ID
   * @return Promise<CustomFieldDefinition> An custom field definition.
   */
  async getCustomFieldDefinition (customFieldDefinitionId) {
    let path = '/sites/{site_id}/custom_field_definitions/{custom_field_definition_id}'
    path = this._interpolatePath(path, { 'custom_field_definition_id': customFieldDefinitionId })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's invoices
   *
   * @async
   * @return Pager<Invoice> A list of the site's invoices.
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
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Promise<Invoice> An invoice.
   */
  async getInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an invoice
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @param {InvoiceUpdatable} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceUpdatable}
   * @return Promise<Invoice> An invoice.
   */
  async putInvoice (invoiceId, body) {
    let path = '/sites/{site_id}/invoices/{invoice_id}'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Collect a pending or past due, automatic invoice
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Promise<Invoice> The updated invoice.
   */
  async collectInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/collect'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path)
  }

  /**
   * Mark an open invoice as failed
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Promise<Invoice> The updated invoice.
   */
  async failInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/mark_failed'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path)
  }

  /**
   * Mark an open invoice as successful
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Promise<Invoice> The updated invoice.
   */
  async markInvoiceSuccessful (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/mark_successful'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path)
  }

  /**
   * Reopen a closed, manual invoice
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Promise<Invoice> The updated invoice.
   */
  async reopenInvoice (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/reopen'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('PUT', path)
  }

  /**
   * List a invoice's line items
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Pager<LineItem> A list of the invoice's line items.
   */
  async listInvoiceLineItems (invoiceId, params = {}) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/line_items'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('GET', path)
  }

  /**
   * Show the coupon redemptions applied to an invoice
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Pager<CouponRedemption> A list of the the coupon redemptions associated with the invoice.
   */
  async listInvoiceCouponRedemptions (invoiceId, params = {}) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/coupon_redemptions'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('GET', path)
  }

  /**
   * List an invoice's related credit or charge invoices
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @return Pager<Invoice> A list of the credit or charge invoices associated with the invoice.
   */
  async listRelatedInvoices (invoiceId) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/related_invoices'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('GET', path)
  }

  /**
   * Refund an invoice
   *
   * @async
   * @param {string} invoiceId - Invoice ID or number (use prefix: +number-+, e.g. +number-1000+).
   * @param {InvoiceRefund} body - The object representing the JSON request to send to the server. It should conform to the schema of {InvoiceRefund}
   * @return Promise<Invoice> Returns the new credit invoice.
   */
  async refundInvoice (invoiceId, body) {
    let path = '/sites/{site_id}/invoices/{invoice_id}/refund'
    path = this._interpolatePath(path, { 'invoice_id': invoiceId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * List a site's line items
   *
   * @async
   * @return Pager<LineItem> A list of the site's line items.
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
   * @param {string} lineItemId - Line Item ID.
   * @return Promise<LineItem> A line item.
   */
  async getLineItem (lineItemId) {
    let path = '/sites/{site_id}/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': lineItemId })
    return this._makeRequest('GET', path)
  }

  /**
   * Delete an uninvoiced line item
   *
   * @async
   * @param {string} lineItemId - Line Item ID.
   * @return Promise Line item deleted.
   */
  async removeLineItem (lineItemId) {
    let path = '/sites/{site_id}/line_items/{line_item_id}'
    path = this._interpolatePath(path, { 'line_item_id': lineItemId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a site's plans
   *
   * @async
   * @return Pager<Plan> A list of plans.
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
   * @return Promise<Plan> A plan.
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
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return Promise<Plan> A plan.
   */
  async getPlan (planId) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('GET', path)
  }

  /**
   * Update a plan
   *
   * @async
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {PlanUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {PlanUpdate}
   * @return Promise<Plan> A plan.
   */
  async updatePlan (planId, body) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove a plan
   *
   * @async
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return Promise<Plan> Plan deleted
   */
  async removePlan (planId) {
    let path = '/sites/{site_id}/plans/{plan_id}'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a plan's add-ons
   *
   * @async
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return Pager<AddOn> A list of add-ons.
   */
  async listPlanAddOns (planId, params = {}) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('GET', path)
  }

  /**
   * Create an add-on
   *
   * @async
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {AddOnCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnCreate}
   * @return Promise<AddOn> An add-on.
   */
  async createPlanAddOn (planId, body) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons'
    path = this._interpolatePath(path, { 'plan_id': planId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Fetch a plan's add-on
   *
   * @async
   * @param {string} addOnId - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return Promise<AddOn> An add-on.
   */
  async getPlanAddOn (addOnId, planId) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': addOnId, 'plan_id': planId })
    return this._makeRequest('GET', path)
  }

  /**
   * Update an add-on
   *
   * @async
   * @param {string} addOnId - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {AddOnUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {AddOnUpdate}
   * @return Promise<AddOn> An add-on.
   */
  async updatePlanAddOn (addOnId, planId, body) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': addOnId, 'plan_id': planId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Remove an add-on
   *
   * @async
   * @param {string} addOnId - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @param {string} planId - Plan ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return Promise<AddOn> Add-on deleted
   */
  async removePlanAddOn (addOnId, planId) {
    let path = '/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': addOnId, 'plan_id': planId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a site's add-ons
   *
   * @async
   * @return Pager<AddOn> A list of add-ons.
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
   * @param {string} addOnId - Add-on ID or code (use prefix: +code-+, e.g. +code-gold+).
   * @return Promise<AddOn> An add-on.
   */
  async getAddOn (addOnId) {
    let path = '/sites/{site_id}/add_ons/{add_on_id}'
    path = this._interpolatePath(path, { 'add_on_id': addOnId })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's subscriptions
   *
   * @async
   * @return Pager<Subscription> A list of the site's subscriptions.
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
   * @return Promise<Subscription> A subscription.
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
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<Subscription> A subscription.
   */
  async getSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path)
  }

  /**
   * Modify a subscription
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @param {SubscriptionUpdate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionUpdate}
   * @return Promise<Subscription> A subscription.
   */
  async modifySubscription (subscriptionId, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Terminate a subscription
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<Subscription> An expired subscription.
   */
  async terminateSubscription (subscriptionId, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Cancel a subscription
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<Subscription> A canceled or failed subscription.
   */
  async cancelSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/cancel'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path)
  }

  /**
   * Reactivate a canceled subscription
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<Subscription> An active subscription.
   */
  async reactivateSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/reactivate'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path)
  }

  /**
   * Pause subscription
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @param {SubscriptionPause} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionPause}
   * @return Promise<Subscription> A subscription.
   */
  async pauseSubscription (subscriptionId, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/pause'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path, body)
  }

  /**
   * Resume subscription
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<Subscription> A subscription.
   */
  async resumeSubscription (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/resume'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('PUT', path)
  }

  /**
   * Fetch a subscription's pending change
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<SubscriptionChange> A subscription's pending change.
   */
  async getSubscriptionChange (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path)
  }

  /**
   * Create a new subscription change
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @param {SubscriptionChangeCreate} body - The object representing the JSON request to send to the server. It should conform to the schema of {SubscriptionChangeCreate}
   * @return Promise<SubscriptionChange> A subscription change.
   */
  async createSubscriptionChange (subscriptionId, body) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('POST', path, body)
  }

  /**
   * Delete the pending subscription change
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise Subscription change was deleted.
   */
  async removeSubscriptionChange (subscriptionId) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/change'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * List a subscription's invoices
   *
   * @async
   * @param {string} subscriptionId - Subscription ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Pager<Invoice> A list of the subscription's invoices.
   */
  async listSubscriptionInvoices (subscriptionId, params = {}) {
    let path = '/sites/{site_id}/subscriptions/{subscription_id}/invoices'
    path = this._interpolatePath(path, { 'subscription_id': subscriptionId })
    return this._makeRequest('GET', path)
  }

  /**
   * List a site's transactions
   *
   * @async
   * @return Pager<Transaction> A list of the site's transactions.
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
   * @param {string} transactionId - Transaction ID or UUID (use prefix: +uuid-+, e.g. +uuid-123457890+).
   * @return Promise<Transaction> A transaction.
   */
  async getTransaction (transactionId) {
    let path = '/sites/{site_id}/transactions/{transaction_id}'
    path = this._interpolatePath(path, { 'transaction_id': transactionId })
    return this._makeRequest('GET', path)
  }

  /**
   * Fetch a unique coupon code
   *
   * @async
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code (use prefix: +code-+, e.g. +code-abc-8dh2-def+).
   * @return Promise<UniqueCouponCode> A unique coupon code.
   */
  async getUniqueCouponCode (uniqueCouponCodeId) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('GET', path)
  }

  /**
   * Deactivate a unique coupon code
   *
   * @async
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code (use prefix: +code-+, e.g. +code-abc-8dh2-def+).
   * @return Promise<UniqueCouponCode> A unique coupon code.
   */
  async deactivateUniqueCouponCode (uniqueCouponCodeId) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('DELETE', path)
  }

  /**
   * Restore a unique coupon code
   *
   * @async
   * @param {string} uniqueCouponCodeId - Unique Coupon Code ID or code (use prefix: +code-+, e.g. +code-abc-8dh2-def+).
   * @return Promise<UniqueCouponCode> A unique coupon code.
   */
  async reactivateUniqueCouponCode (uniqueCouponCodeId) {
    let path = '/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}/restore'
    path = this._interpolatePath(path, { 'unique_coupon_code_id': uniqueCouponCodeId })
    return this._makeRequest('PUT', path)
  }
}

module.exports = Client
