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
 * AddOnMini
 * @typedef {Object} AddOnMini
 * @prop {string} accountingCode - Accounting code for invoice line items for this add-on. If no value is provided, it defaults to add-on's code.
 * @prop {string} addOnType - Whether the add-on type is fixed, or usage-based.
 * @prop {string} code - The unique identifier for the add-on within its plan.
 * @prop {string} externalSku - Optional, stock keeping unit to link the item to other inventory systems.
 * @prop {string} id - Add-on ID
 * @prop {string} itemId - Item ID
 * @prop {string} measuredUnitId - System-generated unique identifier for an measured unit associated with the add-on.
 * @prop {string} name - Describes your add-on and will appear in subscribers' invoices.
 * @prop {string} object - Object type
 * @prop {number} usagePercentage - The percentage taken of the monetary amount of usage tracked. This can be up to 4 decimal places. A value between 0.0 and 100.0.
 * @prop {string} usageType - Type of usage, returns usage type if `add_on_type` is `usage`.
 */
class AddOnMini extends Resource {
  static getSchema () {
    return {
      accountingCode: String,
      addOnType: String,
      code: String,
      externalSku: String,
      id: String,
      itemId: String,
      measuredUnitId: String,
      name: String,
      object: String,
      usagePercentage: Number,
      usageType: String
    }
  }
}

module.exports = AddOnMini
