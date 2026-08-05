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

const { HttpAdapter, HttpResponse, HttpMethod } = require('./recurly/HttpAdapter')
exps.HttpAdapter = HttpAdapter
exps.HttpResponse = HttpResponse
exps.HttpMethod = HttpMethod
exps.DefaultHttpAdapter = require('./recurly/DefaultHttpAdapter')

module.exports = exps
