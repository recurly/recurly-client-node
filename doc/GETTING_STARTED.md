### Installing

This library is published on npm under the name `recurly`.

We recommend installing via the command line:

```
npm install recurly --save-prod
```

Or manually insert the dependency into the `dependencies` section of your `package.json`:

> **Note**: We do try to strictly follow [SemVer](https://semver.org/) so locking to a major version should be safe.

```
{
  // ...
  "recurly" : "^4.12.0"
  // ...
}
```
> **Note**: When upgrading, view the [CHANGELOG](https://github.com/recurly/recurly-client-node/blob/master/CHANGELOG.md) to see what's changed.

### Creating a client

A client object represents a connection to the Recurly API. The client implements
each `operation` that can be performed in the API as a method.

To initialize a client, you only need an API key which can be obtained on the [API Credentials Page](https://app.recurly.com/go/integrations/api_keys).

```js
const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = '<myapikey>'
const client = new recurly.Client(myApiKey)
```

**Note**: to import using typescript:
```ts
import * as recurly from "recurly";
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
async function myFunc () {
  try {
    let account = await client.getAccount('code-benjamin')
  } catch (err) {
    // handle err from client
  }
}
```

### Creating Resources

For creating or updating resources, pass a plain object to one of the create* or update* methods.

> **Note**: Keep in mind that the API accepts snake-cased keys but this library expects camel-cased keys. We do the translation for you so this library can conform to js style standards.

```js

try {
  const acctReq = {
    code: 'new-account-code',
    firstName: 'Benjamin',
    lastName: 'Du Monde'
  }
  const account = await client.createAccount(acctReq)
} catch (err) {
  if (err instanceof recurly.errors.ValidationError) {
    // If the request was not valid, you may want to tell your user
    // why. You can find the invalid params and reasons in err.params
    console.log('Failed validation:', err.params)
  } else {
    // If we don't know what to do with the err, we should
    // probably re-raise and let our web framework and logger handle it
    console.log('Unknown Error:', err)
  }
}
```

### Pagination

All `list*` methods on the client return a `Pager`. They
are not `async` because they are lazy and do not make any
network requests until they are iterated over. There are
two methods on `Pager` that return async iterators `each` and `eachPage`:

* `each` will give you an iterator over each item that matches your query.
* `eachPage` will give you an iterator over each page that is returned. The result is an array of resources.

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

const accounts = client.listAccounts({
    beginTime: '2018-12-01T00:00:00Z',
    sort: 'updated_at'
  })

eachAccount(accounts)
// or 
eachPageOfAccounts(accounts)
```

### Efficiently Fetch the First or Last Resource

The Pager class implements a `first` method which allows you to fetch just the first or last resource from the server.
On top of being a convenient abstraction, this is implemented efficiently by only asking the server for the 1 item you want.

```js
const accounts = client.listAccounts({
    beginTime: '2018-12-01T00:00:00Z',
    subscriber: true,
    order: 'desc'
  })

const firstAccount = await accounts.first()
```

If you want to fetch the last account in this scenario, invert the order from `desc` to `asc`

```js
const accounts = client.listAccounts({
    beginTime: '2018-12-01T00:00:00Z',
    subscriber: true,
    order: 'asc'
  })

const lastAccount = await accounts.first()
```

### Counting Resources

The Pager class implements a `count` method which allows you to count the resources the pager would return.
It does so by calling the endpoint with `HEAD` and parsing and returning the `Recurly-Total-Records` header. This
method respects any filtering parameters you apply to the pager, but the sorting parameters will have no effect.

```js
const accounts = client.listAccounts({
    beginTime: '2018-12-01T00:00:00Z',
    subscriber: true
  })

const count = await accounts.count()
// => 573
```


### Error Handling

This library currently throws 1 primary class of exceptions, recurly.ApiError.
The ApiError comes in a few flavors which help you determine what to do next. To see a full list, view the [api_errors module](https://github.com/recurly/recurly-client-node/blob/master/lib/recurly/api_errors.js).

```js
try {
  const expiredSub = await client.terminateSubscription(subId, { refund: 'full' })
} catch (err) {
  if (err) {
    if (err.getResponse()) {
      const requstId = err.getResponse().requestId
      console.log('Request Id useful for support:', requestId)
    }

    if (err instanceof recurly.errors.ValidationError) {
      // If the request was not valid, you may want to tell your user
      // why. You can find the invalid params and reasons in err.params
      console.log('Failed validation:', err.params)
    } else if (err instanceof recurly.errors.NotFoundError) {
      console.log('Subscription not found:', err)
    } else if (err instanceof recurly.ApiError) {
       console.log('generic API error:', err)
    } else {
      // If we don't know what to do with the err, we should
      // probably re-raise and let our web framework and logger handle it
      console.log('Unknown Error:', err)
    }
  }
}
```
### HTTP Metadata

Sometimes you might want to get some additional information about the underlying HTTP request and response. Instead of
returning this information directly and forcing the programmer to unwrap it, we inject this metadata into the top level
resource that was returned. You can access the response by calling `getResponse()` on any Resource.

**Warning**: Do not log or render whole requests or responses as they may contain PII or sensitive data.


```js
const account = await client.getAccount("code-benjamin")
const response = account.getResponse()
response.rateLimitRemaining // 1985
response.requestId // "0av50sm5l2n2gkf88ehg"
response.request.path // "/sites/subdomain-mysite/accounts/code-benjamin"
response.request.body // null
```

This also works on Empty responses:

```js
const result = await client.removeLineItem("a959576b2b10b012")
const response = result.getResponse()
```

And it can be captured on exceptions through the ApiError object:

```js
try {
  const account = await client.getAccount(account_id)
} catch (err) {
  if (err instanceof recurly.errors.NotFoundError) {
    // You can also get the Response here
    const response = err.getResponse()
  } else {
    console.log('Unknown Error:', err)
  }
}
```

### Webhooks

Recurly can send webhooks to any publicly accessible server. When an event in Recurly triggers
a webhook (e.g., an account is opened), Recurly will attempt to send this notification to the
endpoint(s) you specify.  You can specify up to 10 endpoints through the application. All
notifications will be sent to all configured endpoints for your site.

See our [product docs](https://docs.recurly.com/docs/webhooks) to learn more about webhooks
and see our [dev docs](https://developers.recurly.com/pages/webhooks.html) to learn about what payloads
are available.

Although our API is now JSON, our webhook payloads are still formatted as XML for the time being.
This library is not yet responsible for handling webhooks. If you do need webhooks, we recommend using a simple
XML to Plain Object parser such as [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js).


```js
const parseString = require('xml2js').parseString

const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <new_account_notification>
      <account>
        <account_code>1</account_code>
        <username nil="true"></username>
        <email>verena@example.com</email>
        <first_name>Verena</first_name>
        <last_name>Example</last_name>
        <company_name nil="true"></company_name>
      </account>
    </new_account_notification>
`;

parseString(xml, function (err, result) {
  const code = result.new_account_notification.account[0].account_code[0];
  console.log('New account created with code:', code);
})
```

You can do this without dependencies, but you'll need to heed warnings about security concerns.
Read more about the security implications of parsing untrusted XML in [this OWASP cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/XML_Security_Cheat_Sheet.html).
