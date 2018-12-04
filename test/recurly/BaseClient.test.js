/* globals describe, it */

const assert = require('assert').strict

const pkg = require('../../package.json')

const BaseClient = require('../../lib/recurly/BaseClient')

class TestClient extends BaseClient {
  apiVersion() {
    return "v2020-01-01"
  }
}

const client = new TestClient('myapikey', 'subdomain-mysubdomain')

describe('BaseClient', () => {
  describe('#constructor', () => {
    it('Should set the internal state and headers', () => {
      assert.equal(client.siteId, 'subdomain-mysubdomain')
      assert.equal(client.httpOptions.headers['Authorization'], 'Basic bXlhcGlrZXk6')
      assert.equal(client.httpOptions.headers['User-Agent'], `Recurly/${pkg.name}:${pkg.version}`)
      assert.equal(client.httpOptions.headers['Accept'], 'application/vnd.recurly.v2020-01-01')
    })
  })
  describe('#_interpolatePath', () => {
    it('Should interpolate the path with the given params', () => {
      const pathTmpl = '/sites/{site_id}/accounts/{account_id}/shipping_addresses/{shipping_address_id}'
      const path = client._interpolatePath(pathTmpl, {
        'account_id': 'code-benjamin-du-monde',
        'shipping_address_id': 1234567890
      })

      assert.equal(path, '/sites/subdomain-mysubdomain/accounts/code-benjamin-du-monde/shipping_addresses/1234567890')
    })
  })
})
