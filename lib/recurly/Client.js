'use strict';

let BaseClient = require('./BaseClient');

class Client extends BaseClient {

  apiVersion() {
    return "v2018-10-04";
  }

  async listSites(params={}) {
    let path = "/sites";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async getSite() {
    let path = "/sites/{site_id}";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async listAccounts(params={}) {
    let path = "/sites/{site_id}/accounts";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async createAccount(body) {
    let path = "/sites/{site_id}/accounts";
    path = this._interpolatePath(path, { 'body': body });
    return this._makeRequest('POST', path);
  }

  async getAccount(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async updateAccount(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async deactivateAccount(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('DELETE', path);
  }

  async getAccountAcquisition(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/acquisition";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async updateAccountAcquisition(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/acquisition";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async removeAccountAcquisition(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/acquisition";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('DELETE', path);
  }

  async reactivateAccount(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/reactivate";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('PUT', path);
  }

  async getAccountBalance(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/balance";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async getBillingInfo(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/billing_info";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async updateBillingInfo(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/billing_info";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async removeBillingInfo(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/billing_info";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('DELETE', path);
  }

  async listAccountCouponRedemptions(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/coupon_redemptions";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async getActiveCouponRedemption(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async createCouponRedemption(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async removeCouponRedemption(account_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/coupon_redemptions/active";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('DELETE', path);
  }

  async listAccountCreditPayments(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/credit_payments";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async listAccountInvoices(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/invoices";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async createInvoice(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/invoices";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async previewInvoice(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/invoices/preview";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async listAccountLineItems(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/line_items";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async createLineItem(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/line_items";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async listAccountNotes(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/notes";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async getAccountNote(account_id, account_note_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/notes/{account_note_id}";
    path = this._interpolatePath(path, { 'account_id': account_id ,'account_note_id': account_note_id });
    return this._makeRequest('GET', path);
  }

  async listShippingAddresses(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/shipping_addresses";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async createShippingAddress(account_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/shipping_addresses";
    path = this._interpolatePath(path, { 'account_id': account_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async getShippingAddress(account_id, shipping_address_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}";
    path = this._interpolatePath(path, { 'account_id': account_id ,'shipping_address_id': shipping_address_id });
    return this._makeRequest('GET', path);
  }

  async updateShippingAddress(account_id, shipping_address_id, body) {
    let path = "/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}";
    path = this._interpolatePath(path, { 'account_id': account_id ,'shipping_address_id': shipping_address_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async removeShippingAddress(account_id, shipping_address_id) {
    let path = "/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}";
    path = this._interpolatePath(path, { 'account_id': account_id ,'shipping_address_id': shipping_address_id });
    return this._makeRequest('DELETE', path);
  }

  async listAccountSubscriptions(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/subscriptions";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async listAccountTransactions(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/transactions";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async listChildAccounts(account_id, params={}) {
    let path = "/sites/{site_id}/accounts/{account_id}/accounts";
    path = this._interpolatePath(path, { 'account_id': account_id });
    return this._makeRequest('GET', path);
  }

  async listAccountAcquisition(params={}) {
    let path = "/sites/{site_id}/acquisitions";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async listCoupons(params={}) {
    let path = "/sites/{site_id}/coupons";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async createCoupon(body) {
    let path = "/sites/{site_id}/coupons";
    path = this._interpolatePath(path, { 'body': body });
    return this._makeRequest('POST', path);
  }

  async getCoupon(coupon_id) {
    let path = "/sites/{site_id}/coupons/{coupon_id}";
    path = this._interpolatePath(path, { 'coupon_id': coupon_id });
    return this._makeRequest('GET', path);
  }

  async updateCoupon(coupon_id, body) {
    let path = "/sites/{site_id}/coupons/{coupon_id}";
    path = this._interpolatePath(path, { 'coupon_id': coupon_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async listUniqueCouponCodes(coupon_id, params={}) {
    let path = "/sites/{site_id}/coupons/{coupon_id}/unique_coupon_codes";
    path = this._interpolatePath(path, { 'coupon_id': coupon_id });
    return this._makeRequest('GET', path);
  }

  async listCreditPayments(params={}) {
    let path = "/sites/{site_id}/credit_payments";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async getCreditPayment(credit_payment_id) {
    let path = "/sites/{site_id}/credit_payments/{credit_payment_id}";
    path = this._interpolatePath(path, { 'credit_payment_id': credit_payment_id });
    return this._makeRequest('GET', path);
  }

  async listCustomFieldDefinitions(params={}) {
    let path = "/sites/{site_id}/custom_field_definitions";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async getCustomFieldDefinition(custom_field_definition_id) {
    let path = "/sites/{site_id}/custom_field_definitions/{custom_field_definition_id}";
    path = this._interpolatePath(path, { 'custom_field_definition_id': custom_field_definition_id });
    return this._makeRequest('GET', path);
  }

  async listInvoices(params={}) {
    let path = "/sites/{site_id}/invoices";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async getInvoice(invoice_id) {
    let path = "/sites/{site_id}/invoices/{invoice_id}";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('GET', path);
  }

  async putInvoice(invoice_id, body) {
    let path = "/sites/{site_id}/invoices/{invoice_id}";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async collectInvoice(invoice_id) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/collect";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('PUT', path);
  }

  async failInvoice(invoice_id) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/mark_failed";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('PUT', path);
  }

  async markInvoiceSuccessful(invoice_id) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/mark_successful";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('PUT', path);
  }

  async reopenInvoice(invoice_id) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/reopen";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('PUT', path);
  }

  async listInvoiceLineItems(invoice_id, params={}) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/line_items";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('GET', path);
  }

  async listInvoiceCouponRedemptions(invoice_id, params={}) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/coupon_redemptions";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('GET', path);
  }

  async listRelatedInvoices(invoice_id) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/related_invoices";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id });
    return this._makeRequest('GET', path);
  }

  async refundInvoice(invoice_id, body) {
    let path = "/sites/{site_id}/invoices/{invoice_id}/refund";
    path = this._interpolatePath(path, { 'invoice_id': invoice_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async listLineItems(params={}) {
    let path = "/sites/{site_id}/line_items";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async getLineItem(line_item_id) {
    let path = "/sites/{site_id}/line_items/{line_item_id}";
    path = this._interpolatePath(path, { 'line_item_id': line_item_id });
    return this._makeRequest('GET', path);
  }

  async removeLineItem(line_item_id) {
    let path = "/sites/{site_id}/line_items/{line_item_id}";
    path = this._interpolatePath(path, { 'line_item_id': line_item_id });
    return this._makeRequest('DELETE', path);
  }

  async listPlans(params={}) {
    let path = "/sites/{site_id}/plans";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async createPlan(body) {
    let path = "/sites/{site_id}/plans";
    path = this._interpolatePath(path, { 'body': body });
    return this._makeRequest('POST', path);
  }

  async getPlan(plan_id) {
    let path = "/sites/{site_id}/plans/{plan_id}";
    path = this._interpolatePath(path, { 'plan_id': plan_id });
    return this._makeRequest('GET', path);
  }

  async updatePlan(plan_id, body) {
    let path = "/sites/{site_id}/plans/{plan_id}";
    path = this._interpolatePath(path, { 'plan_id': plan_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async removePlan(plan_id) {
    let path = "/sites/{site_id}/plans/{plan_id}";
    path = this._interpolatePath(path, { 'plan_id': plan_id });
    return this._makeRequest('DELETE', path);
  }

  async listPlanAddOns(plan_id, params={}) {
    let path = "/sites/{site_id}/plans/{plan_id}/add_ons";
    path = this._interpolatePath(path, { 'plan_id': plan_id });
    return this._makeRequest('GET', path);
  }

  async createPlanAddOn(plan_id, body) {
    let path = "/sites/{site_id}/plans/{plan_id}/add_ons";
    path = this._interpolatePath(path, { 'plan_id': plan_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async getPlanAddOn(add_on_id, plan_id) {
    let path = "/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}";
    path = this._interpolatePath(path, { 'add_on_id': add_on_id ,'plan_id': plan_id });
    return this._makeRequest('GET', path);
  }

  async updatePlanAddOn(add_on_id, plan_id, body) {
    let path = "/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}";
    path = this._interpolatePath(path, { 'add_on_id': add_on_id ,'plan_id': plan_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async removePlanAddOn(add_on_id, plan_id) {
    let path = "/sites/{site_id}/plans/{plan_id}/add_ons/{add_on_id}";
    path = this._interpolatePath(path, { 'add_on_id': add_on_id ,'plan_id': plan_id });
    return this._makeRequest('DELETE', path);
  }

  async listAddOns(params={}) {
    let path = "/sites/{site_id}/add_ons";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async getAddOn(add_on_id) {
    let path = "/sites/{site_id}/add_ons/{add_on_id}";
    path = this._interpolatePath(path, { 'add_on_id': add_on_id });
    return this._makeRequest('GET', path);
  }

  async listSubscriptions(params={}) {
    let path = "/sites/{site_id}/subscriptions";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async createSubscription(body) {
    let path = "/sites/{site_id}/subscriptions";
    path = this._interpolatePath(path, { 'body': body });
    return this._makeRequest('POST', path);
  }

  async getSubscription(subscription_id) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('GET', path);
  }

  async modifySubscription(subscription_id, body) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async terminateSubscription(subscription_id, params={}) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('DELETE', path);
  }

  async cancelSubscription(subscription_id) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/cancel";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('PUT', path);
  }

  async reactivateSubscription(subscription_id) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/reactivate";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('PUT', path);
  }

  async pauseSubscription(subscription_id, body) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/pause";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id ,'body': body });
    return this._makeRequest('PUT', path);
  }

  async resumeSubscription(subscription_id) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/resume";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('PUT', path);
  }

  async getSubscriptionChange(subscription_id) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/change";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('GET', path);
  }

  async createSubscriptionChange(subscription_id, body) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/change";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id ,'body': body });
    return this._makeRequest('POST', path);
  }

  async removeSubscriptionChange(subscription_id) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/change";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('DELETE', path);
  }

  async listSubscriptionInvoices(subscription_id, params={}) {
    let path = "/sites/{site_id}/subscriptions/{subscription_id}/invoices";
    path = this._interpolatePath(path, { 'subscription_id': subscription_id });
    return this._makeRequest('GET', path);
  }

  async listTransactions(params={}) {
    let path = "/sites/{site_id}/transactions";
    path = this._interpolatePath(path);
    return this._makeRequest('GET', path);
  }

  async getTransaction(transaction_id) {
    let path = "/sites/{site_id}/transactions/{transaction_id}";
    path = this._interpolatePath(path, { 'transaction_id': transaction_id });
    return this._makeRequest('GET', path);
  }

  async getUniqueCouponCode(unique_coupon_code_id) {
    let path = "/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}";
    path = this._interpolatePath(path, { 'unique_coupon_code_id': unique_coupon_code_id });
    return this._makeRequest('GET', path);
  }

  async deactivateUniqueCouponCode(unique_coupon_code_id) {
    let path = "/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}";
    path = this._interpolatePath(path, { 'unique_coupon_code_id': unique_coupon_code_id });
    return this._makeRequest('DELETE', path);
  }

  async reactivateUniqueCouponCode(unique_coupon_code_id) {
    let path = "/sites/{site_id}/unique_coupon_codes/{unique_coupon_code_id}/restore";
    path = this._interpolatePath(path, { 'unique_coupon_code_id': unique_coupon_code_id });
    return this._makeRequest('PUT', path);
  }

  async createPurchase(body) {
    let path = "/sites/{site_id}/purchases";
    path = this._interpolatePath(path, { 'body': body });
    return this._makeRequest('POST', path);
  }

  async previewPurchase(body) {
    let path = "/sites/{site_id}/purchases/preview";
    path = this._interpolatePath(path, { 'body': body });
    return this._makeRequest('POST', path);
  }


}

module.exports = Client;
