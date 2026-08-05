# Recurly

[![Npm](https://img.shields.io/static/v1?label=npm&message=recurly&color=purple)](https://www.npmjs.com/package/recurly)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

This repository houses the official node library for Recurly's V3 API.

## Documentation

Docs, Getting Started, and example code can be found here: [https://recurly.github.io/recurly-client-node](https://recurly.github.io/recurly-client-node).
Documentation for the HTTP API and example code can be found [on our Developer Portal](https://developers.recurly.com/api/v2019-10-10/).

## Custom HTTP Adapter

By default the client uses a built-in HTTP implementation (`DefaultHttpAdapter`) based on Node's `https` module. You can replace it with your own by passing an `httpAdapter` option to the constructor:

```js
const recurly = require('recurly')

const client = new recurly.Client(apiKey, { httpAdapter: myAdapter })
```

### HttpAdapter interface

A custom adapter must extend `recurly.HttpAdapter` and implement one method:

```js
class MyAdapter extends recurly.HttpAdapter {
  async execute (method, url, headers, body) {
    // method  — HTTP verb string: 'GET', 'POST', 'PUT', 'DELETE', 'HEAD'
    // url     — fully-formed URL string, query string already appended
    // headers — plain object of application-level headers (Authorization, Accept, etc.)
    // body    — JSON string, or null for requests with no body

    // Must return an HttpResponse:
    return new recurly.HttpResponse(statusCode, responseHeaders, responseBody)
    // responseBody must be a decoded string (or null for empty responses)
  }
}
```

The `HttpResponse` constructor normalises header keys to lowercase automatically.

### DefaultHttpAdapter options

`DefaultHttpAdapter` accepts an optional configuration object:

| Option | Type | Default | Description |
|---|---|---|---|
| `timeout` | `number` | `60000` | Request timeout in milliseconds. |
| `logger` | `{ debug(msg) }` | `null` | Optional logger for request lifecycle events. |

```js
const { DefaultHttpAdapter } = require('recurly')

const adapter = new DefaultHttpAdapter({
  timeout: 30000,
  logger: console
})

const client = new recurly.Client(apiKey, { httpAdapter: adapter })
```

### HttpMethod constants

```js
const { HttpMethod } = require('recurly')
// HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.HEAD
```

### Gzip

`DefaultHttpAdapter` adds `Accept-Encoding: gzip` automatically and decodes the response. Custom adapters are not required to implement gzip — if you omit the `Accept-Encoding` header the server will respond with uncompressed data and the body will already be a plain string.

### Testing a custom adapter

Use the contract test suite to verify that your adapter satisfies the required behaviours:

```js
const { HttpAdapterContract } = require('recurly/lib/testing')

describe('MyAdapter', () => {
  HttpAdapterContract.runSuite(
    () => new MyAdapter(),
    ({ name, run }) => it(name, run)
  )
})
```

The suite covers all HTTP methods, header forwarding, status code pass-through, empty body handling, and network failure rejection. It uses a local test server and has no external dependencies.

## Contributing

Please see our [Contributing Guide](CONTRIBUTING.md).
