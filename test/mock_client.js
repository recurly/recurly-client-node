const sinon = require('sinon')
const BaseClient = require('../lib/recurly/BaseClient')
const Pager = require('../lib/recurly/Pager')
const { HttpResponse } = require('../lib/recurly/HttpAdapter')

class MockClient extends BaseClient {
  constructor (apiKey, options = {}) {
    super(apiKey, options)
    this._sandbox = sinon.createSandbox()
  }

  apiVersion () {
    return 'v2022-01-01'
  }

  listResources (options = {}) {
    let path = '/resources'
    path = this._interpolatePath(path)
    return new Pager(this, path, options)
  }

  async getResource (resourceId) {
    let path = '/resources/{resource_id}'
    path = this._interpolatePath(path, { 'resource_id': resourceId })
    return this._makeRequest('GET', path, null)
  }

  async createResource (body) {
    let path = '/resources'
    path = this._interpolatePath(path)
    return this._makeRequest('POST', path, body)
  }

  async updateResource (resourceId, body) {
    let path = '/resources/{resource_id}'
    path = this._interpolatePath(path, { 'resource_id': resourceId })
    return this._makeRequest('PUT', path, body)
  }

  async deleteResource (resourceId) {
    let path = '/resources/{resource_id}'
    path = this._interpolatePath(path, { 'resource_id': resourceId })
    return this._makeRequest('DELETE', path, null)
  }

  mock (strategy) {
    this._sandbox.stub(this._httpAdapter, 'execute').callsFake(strategy)
  }

  restore () {
    this._sandbox.restore()
  }

  calledWith (method, urlMatcher, headers, body) {
    const h = headers !== undefined ? headers : sinon.match.any
    const b = body !== undefined ? body : sinon.match.any
    return this._httpAdapter.execute.calledWithMatch(method, urlMatcher, h, b)
  }

  callCount () {
    return this._httpAdapter.execute.callCount
  }
}

module.exports.MockClient = MockClient
module.exports.HttpResponse = HttpResponse
