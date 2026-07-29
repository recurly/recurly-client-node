'use strict'

const { HttpResponse } = require('../lib/recurly/HttpAdapter')

function jsonResponse (status, obj) {
  const body = obj !== null ? JSON.stringify(obj) : null
  return Promise.resolve(new HttpResponse(status, { 'content-type': 'application/json; charset=utf-8' }, body))
}

function emptyResponse (status) {
  return Promise.resolve(new HttpResponse(status, {}, null))
}

module.exports = { HttpResponse, jsonResponse, emptyResponse }
