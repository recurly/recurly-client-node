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
// TODO: change this to the npm name
const recurly = require('./lib/recurly')
// You should store your api key somewhere safe
// and not in plain text if possible
const apiKey = 'myapikey'
const subdomain = 'mysubdomain'
const client = new recurly.Client(apiKey, `subdomain-${mySubdomain}`)
```

### Operations

Operations are all `async` and they return promises. You can handle the promises
directly or use await:

```js
client.getAccount('code-benjamin')
  .then(account => console.log(account.id))
  .catch(err => console.log(err.msg))
```

```js
async myFunc () {
  let account = await client.getAccount('code-benjamin')
}
```

### Creating Resources

For creating or updating resources, pass a json object to one of the create* or update* methods.
Keep in mind that the api accepts snake-cased keys but this library expects camel-cased keys.
We do the translation for you so this library can conform to js style standards.

```js
client.createAccount({
    code: 'new-account-code',
    firstName: 'Benjamin',
    lastName: 'Du Monde'
  })
  .then(account => console.log(account.id))
  .catch(console.log)
```

### Pagination

TODO: need to decide on an interface

