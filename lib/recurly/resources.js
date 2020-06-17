'use strict'

const exps = require('./resources/index')

const Page = require('./Page')
// Page has object type "list"
exps.List = Page

const Resource = require('./Resource')
/**
 * A special resource for an empty response
 */
exps.Empty = class Empty extends Resource {
  static getSchema () { return {} }
}

module.exports = exps
