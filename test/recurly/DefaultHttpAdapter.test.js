/* globals describe, it */

require('../test_helper')
const http = require('http')
const net = require('net')
const zlib = require('zlib')
const assert = require('assert').strict
const DefaultHttpAdapter = require('../../lib/recurly/DefaultHttpAdapter')
const { runSuite } = require('../../lib/recurly/HttpAdapterContract')

describe('DefaultHttpAdapter (contract suite)', () => {
  runSuite(
    () => new DefaultHttpAdapter({ timeout: 5000 }),
    ({ name, run }) => it(name, run)
  )
})

describe('DefaultHttpAdapter (ECONNRESET retry)', () => {
  it('retries once on ECONNRESET and resolves on second attempt', done => {
    let attempts = 0

    // First connection: accept, then immediately destroy (simulates ECONNRESET)
    // Second connection: serve a valid response
    const server = net.createServer((socket) => {
      attempts++
      if (attempts === 1) {
        socket.destroy()
      } else {
        socket.write(
          'HTTP/1.1 200 OK\r\n' +
          'Content-Type: application/json\r\n' +
          'Content-Length: 11\r\n' +
          'Connection: close\r\n' +
          '\r\n' +
          '{"ok":true}'
        )
        socket.end()
      }
    })

    server.listen(0, '127.0.0.1', async () => {
      const { address, port } = server.address()
      const adapter = new DefaultHttpAdapter({ timeout: 5000 })
      try {
        const resp = await adapter.execute('GET', `http://${address}:${port}/test`, {}, null)
        assert.equal(attempts, 2)
        assert.equal(resp.statusCode, 200)
        assert.equal(resp.body, '{"ok":true}')
        done()
      } catch (err) {
        done(err)
      } finally {
        server.close()
      }
    })
  })
})

describe('DefaultHttpAdapter (gzip)', () => {
  it('decodes a gzip-encoded response body', done => {
    const payload = Buffer.from('{"gzipped":true}')
    const server = http.createServer((req, res) => {
      zlib.gzip(payload, (err, compressed) => {
        if (err) { res.writeHead(500, {}); res.end(''); return }
        res.writeHead(200, {
          'content-encoding': 'gzip',
          'content-type': 'application/json',
          'content-length': compressed.length
        })
        res.end(compressed)
      })
    })

    server.listen(0, '127.0.0.1', async () => {
      const { address, port } = server.address()
      const adapter = new DefaultHttpAdapter({ timeout: 5000 })
      try {
        const resp = await adapter.execute('GET', `http://${address}:${port}/gzip`, {}, null)
        assert.equal(resp.body, '{"gzipped":true}')
        done()
      } catch (err) {
        done(err)
      } finally {
        server.close()
      }
    })
  })
})
