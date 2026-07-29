'use strict'

const http = require('http')
const assert = require('assert').strict

/**
 * Creates and starts a local HTTP server for testing.
 * The server responds to each request based on the provided handler.
 *
 * @param {Function} handler - (req, res) handler function.
 * @return {Promise<http.Server>} Resolves when the server is listening.
 */
function startServer (handler) {
  return new Promise((resolve) => {
    const sockets = new Set()
    const server = http.createServer(handler)
    server.on('connection', (sock) => {
      sockets.add(sock)
      sock.once('close', () => sockets.delete(sock))
    })
    server._sockets = sockets
    server.listen(0, '127.0.0.1', () => resolve(server))
  })
}

function stopServer (server) {
  return new Promise((resolve, reject) => {
    if (server._sockets) {
      server._sockets.forEach(s => s.destroy())
    }
    server.close(err => err ? reject(err) : resolve())
  })
}

function serverUrl (server) {
  const { address, port } = server.address()
  return `http://${address}:${port}`
}

/**
 * Runs the HttpAdapter contract test suite against a given adapter instance.
 *
 * Each test is registered via the `register` callback, which receives `{ name, run }`.
 * `name` is the test description; `run` is an async function that asserts the behaviour.
 *
 * Example with mocha:
 *
 *   const { HttpAdapterContract } = require('recurly/lib/testing')
 *   describe('MyAdapter', () => {
 *     HttpAdapterContract.runSuite(() => new MyAdapter(), ({ name, run }) => it(name, run))
 *   })
 *
 * @param {Function} createAdapter - Factory that returns a fresh HttpAdapter for each test.
 * @param {Function} register - Called once per test with `{ name: string, run: Function }`.
 */
function runSuite (createAdapter, register) {
  register({
    name: 'GET — request reaches server and response is returned',
    run: async () => {
      let receivedMethod
      const server = await startServer((req, res) => {
        receivedMethod = req.method
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end('{"ok":true}')
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      const resp = await adapter.execute('GET', `${base}/test`, {}, null)
      await stopServer(server)
      assert.equal(receivedMethod, 'GET')
      assert.equal(resp.statusCode, 200)
      assert.equal(resp.body, '{"ok":true}')
    }
  })

  register({
    name: 'POST — sends body to server',
    run: async () => {
      let receivedBody = ''
      const server = await startServer((req, res) => {
        req.on('data', c => { receivedBody += c })
        req.on('end', () => {
          res.writeHead(201, { 'content-type': 'application/json' })
          res.end('{"created":true}')
        })
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      await adapter.execute('POST', `${base}/items`, { 'content-type': 'application/json' }, '{"name":"test"}')
      await stopServer(server)
      assert.equal(receivedBody, '{"name":"test"}')
    }
  })

  register({
    name: 'PUT — sends body to server',
    run: async () => {
      let receivedMethod
      let receivedBody = ''
      const server = await startServer((req, res) => {
        receivedMethod = req.method
        req.on('data', c => { receivedBody += c })
        req.on('end', () => {
          res.writeHead(200, {})
          res.end('')
        })
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      await adapter.execute('PUT', `${base}/items/1`, {}, '{"name":"updated"}')
      await stopServer(server)
      assert.equal(receivedMethod, 'PUT')
      assert.equal(receivedBody, '{"name":"updated"}')
    }
  })

  register({
    name: 'DELETE — sends no body',
    run: async () => {
      let receivedBody = ''
      const server = await startServer((req, res) => {
        req.on('data', c => { receivedBody += c })
        req.on('end', () => {
          res.writeHead(200, {})
          res.end('')
        })
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      await adapter.execute('DELETE', `${base}/items/1`, {}, null)
      await stopServer(server)
      assert.equal(receivedBody, '')
    }
  })

  register({
    name: 'HEAD — returns empty body',
    run: async () => {
      const server = await startServer((req, res) => {
        res.writeHead(200, { 'x-total': '42' })
        res.end()
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      const resp = await adapter.execute('HEAD', `${base}/items`, {}, null)
      await stopServer(server)
      assert.equal(resp.statusCode, 200)
      assert.equal(resp.body, null)
    }
  })

  register({
    name: 'Request headers — forwarded to server unmodified',
    run: async () => {
      let receivedHeaders
      const server = await startServer((req, res) => {
        receivedHeaders = req.headers
        res.writeHead(200, {})
        res.end('')
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      await adapter.execute('GET', `${base}/test`, {
        'authorization': 'Basic abc123',
        'accept': 'application/json',
        'x-custom-header': 'myvalue'
      }, null)
      await stopServer(server)
      assert.equal(receivedHeaders['authorization'], 'Basic abc123')
      assert.equal(receivedHeaders['accept'], 'application/json')
      assert.equal(receivedHeaders['x-custom-header'], 'myvalue')
    }
  })

  register({
    name: 'Response headers — keys are normalized to lowercase',
    run: async () => {
      const server = await startServer((req, res) => {
        res.writeHead(200, { 'X-Request-Id': 'abc', 'Content-Type': 'application/json' })
        res.end('{}')
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      const resp = await adapter.execute('GET', `${base}/test`, {}, null)
      await stopServer(server)
      assert.equal(resp.headers['x-request-id'], 'abc')
      assert.equal(resp.headers['content-type'], 'application/json')
    }
  })

  const STATUS_CODES = [200, 201, 204, 400, 404, 422, 500]
  for (const status of STATUS_CODES) {
    register({
      name: `Status ${status} — returned as-is without translation`,
      run: async () => {
        const server = await startServer((req, res) => {
          res.writeHead(status, {})
          res.end('')
        })
        const adapter = createAdapter()
        const base = serverUrl(server)
        const resp = await adapter.execute('GET', `${base}/test`, {}, null)
        await stopServer(server)
        assert.equal(resp.statusCode, status)
      }
    })
  }

  register({
    name: '204 — body is null',
    run: async () => {
      const server = await startServer((req, res) => {
        res.writeHead(204, {})
        res.end()
      })
      const adapter = createAdapter()
      const base = serverUrl(server)
      const resp = await adapter.execute('DELETE', `${base}/items/1`, {}, null)
      await stopServer(server)
      assert.equal(resp.statusCode, 204)
      assert.equal(resp.body, null)
    }
  })

  register({
    name: 'Network failure — rejected with error on closed port',
    run: async () => {
      const adapter = createAdapter()
      // Port 1 is reserved/unreachable; connecting should reject
      try {
        await adapter.execute('GET', 'http://127.0.0.1:1/test', {}, null)
        assert.fail('Expected execute() to reject on network failure')
      } catch (err) {
        assert.ok(err instanceof Error)
      }
    }
  })
}

module.exports.runSuite = runSuite
