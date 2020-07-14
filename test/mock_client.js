const sinon = require('sinon')
const BaseClient = require('../lib/recurly/BaseClient')
const Pager = require('../lib/recurly/Pager')
const { Request, Response } = require('../lib/recurly/Http')

class MockClient extends BaseClient {
  constructor (apiKey) {
    super(apiKey)
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
    this._sandbox.stub(this, '_requestAdapter').callsFake((options, requestBody) => {
      const req = new Request(options.method, options.path, requestBody)
      const resp = new Response()
      resp.request = req
      resp.contentType = 'application/json'
      return strategy(resp, options)
    })
  }

  restore () {
    this._sandbox.restore()
  }

  calledWith (options, body) {
    return this._requestAdapter.calledWithMatch(options, body)
  }

  callCount () {
    return this._requestAdapter.callCount
  }
}

module.exports = MockClient
