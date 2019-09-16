'use strict'

const Schema = require('./recurly/schemas').Schema
const exps = {
  Schema: Schema,
  Client: require('./recurly/Client'),
  ApiError: require('./recurly/ApiError')
}

exps.errors = require('./recurly/api_errors')

const resources = require('./recurly/resources')
for (let key in resources) {
  exps[key] = resources[key]
}

Schema.locateResource = name => resources[name]

module.exports = exps
