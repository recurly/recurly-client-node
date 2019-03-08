# Recurly

This repository contains the node client for Recurly's V3 API (or "partner api").
It's currently Beta software and is not yet an official release. Documentation for the HTTP API can be found [here](https://partner-docs.recurly.com/).

## Getting Started

### Documentation

This library uses [documentation](http://documentation.js.org/) to generate jsdocs, but it's not published anywhere yet.
To view documentation locally run:

```
./scripts/build && open docs/index.html
```

To view the HTTP API documentation along with the node example code, see [https://partner-docs.recurly.com/](https://partner-docs.recurly.com/).

### Installing

This library is published on npm under the name `recurly`.

We recommend manually inserting the dependency into the `dependencies` section of your `package.json`:

```
{
  // ...
  "recurly" : "3.0.0.beta.1"
  // ...
}
```


Install via the command line:
```
npm install recurly@3.0.0.beta.1 --save-prod
```

### Creating a client

A client object represents a connection to the Recurly API. The client implements
each `operation` that can be performed in the API as a method.

To initialize a client, give it an API key and a subdomain:

```js
const recurly = require('recurly')
// You should store your api key somewhere safe
// and not in plain text if possible
const myApiKey = '<myapikey>'
const mySubdomain = '<mysubdomain>'
const client = new recurly.Client(myApiKey, `subdomain-${mySubdomain}`)
```

### Operations

All operations are `async` and return promises (except the `list*` methods which return `Pager`s).
You can handle the promises directly with `then` and `catch` or use await:

```js
client.getAccount('code-benjamin')
  .then(account => console.log(account.id))
  .catch(err => console.log(err.msg))
```

```js
async myFunc () {
  try {
    let account = await client.getAccount('code-benjamin')
  } catch (err) {
    // handle err from client
  }
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

All `list*` methods on the client return a `Pager`. They
are not `async` because they are lazy and do not make any
network requests until they are iterated over. There are
two methods on `Pager` that return async iterators `each` and `eachPage`:

* `each` will give you an iterator over each item that matches your query.
* `eachPage` will give you an iterator over each page that is returned. The result is an array of resources.

TODO: Need to fully test and document error handling

```js
async function eachAccount (accounts) {
  try {
    for await (const acct of accounts.each()) {
      console.log(acct.id)
    }
  } catch (err) {
    // err is bubbled up from recurly client
  }
}

async function eachPageOfAccounts (accounts) {
  try {
    for await (const page of accounts.eachPage()) {
      page.forEach(acct => console.log(acct.id))
    }
  } catch (err) {
    // err is bubbled up from recurly client
  }
}

let accounts = client.listAccounts({
    beginTime: '2018-12-01T00:00:00Z',
    sort: 'updated_at'
  })

eachAccount(accounts)
// or 
eachPageOfAccounts(accounts)
```
