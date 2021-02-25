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
 * AddOn
 * @typedef {Object} AddOn
 * @prop {string} accountingCode - Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
 * @prop {string} addOnType - Whether the add-on type is fixed, or usage-based.
 * @prop {number} avalaraServiceType - Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
 * @prop {number} avalaraTransactionType - Used by Avalara for Communications taxes. The transaction type in combination with the service type describe how the add-on is taxed. Refer to [the documentation](https://help.avalara.com/AvaTax_for_Communications/Tax_Calculation/AvaTax_for_Communications_Tax_Engine/Mapping_Resources/TM_00115_AFC_Modules_Corresponding_Transaction_Types) for more available t/s types.
 * @prop {string} code - The unique identifier for the add-on within its plan.
 * @prop {Date} createdAt - Created at
 * @prop {Array.<AddOnPricing>} currencies - Add-on pricing
 * @prop {number} defaultQuantity - Default quantity for the hosted pages.
 * @prop {Date} deletedAt - Deleted at
 * @prop {boolean} displayQuantity - Determines if the quantity field is displayed on the hosted pages for the add-on.
 * @prop {string} externalSku - Optional, stock keeping unit to link the item to other inventory systems.
 * @prop {string} id - Add-on ID
 * @prop {ItemMini} item - Just the important parts.
 * @prop {string} measuredUnitId - System-generated unique identifier for an measured unit associated with the add-on.
 * @prop {string} name - Describes your add-on and will appear in subscribers' invoices.
 * @prop {string} object - Object type
 * @prop {boolean} optional - Whether the add-on is optional for the customer to include in their purchase on the hosted payment page. If false, the add-on will be included when a subscription is created through the Recurly UI. However, the add-on will not be included when a subscription is created through the API.
 * @prop {string} planId - Plan ID
 * @prop {string} revenueScheduleType - When this add-on is invoiced, the line item will use this revenue schedule. If `item_code`/`item_id` is part of the request then `revenue_schedule_type` must be absent in the request as the value will be set from the item.
 * @prop {string} state - Add-ons can be either active or inactive.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
 * @prop {string} tierType - The pricing model for the add-on.  For more information, [click here](https://docs.recurly.com/docs/billing-models#section-quantity-based). See our [Guide](https://developers.recurly.com/guides/item-addon-guide.html) for an overview of how to configure quantity-based pricing models.
 * @prop {Array.<Tier>} tiers - Tiers
 * @prop {Date} updatedAt - Last updated at
 * @prop {number} usagePercentage - The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0.
 * @prop {string} usageType - Type of usage, returns usage type if `add_on_type` is `usage`.
 */
class AddOn extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      addOnType: String,
      avalaraServiceType: Number,
      avalaraTransactionType: Number,
      code: String,
      createdAt: Date,
      currencies: ['AddOnPricing'],
      defaultQuantity: Number,
      deletedAt: Date,
      displayQuantity: Boolean,
      externalSku: String,
      id: String,
      item: 'ItemMini',
      measuredUnitId: String,
      name: String,
      object: String,
      optional: Boolean,
      planId: String,
      revenueScheduleType: String,
      state: String,
      taxCode: String,
      tierType: String,
      tiers: ['Tier'],
      updatedAt: Date,
      usagePercentage: Number,
      usageType: String
    }
  }
}

module.exports = AddOn
