# Recurly

*Warning: If you find this repo and want to use it, please slack DM Ben first. It's still under development.*

This library is the node client to the v3, aka API next, aka PAPI, version of Recurly's API. Parts of this gem are generated
by the `recurly-client-gen` project.

## Getting Started

### Documentation

TODO: This library uses jsdoc but it's not published anywhere yet.

### Installing

TODO: This library is an npm package but is not published anywhere yet.

### Creating a client

A client object represents a connection to the Recurly API. The client implements
each `operation` that can be performed in the API as a method.

To initialize a client, give it an API key and a subdomain:

```js


```

## Example

```js
const recurly = require('./lib/recurly')
const client = new recurly.Client(apiKey, `subdomain-${mySubdomain}`)

client.getAccount('code-benjamin')
  .then(account => console.log(account.id))
  .catch(console.log)

client.createAccount({code: 'new-account-code'})
  .then(account => console.log(account.id))
  .catch(console.log)
```
