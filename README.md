# Recurly

*Warning: If you find this repo and want to use it, please slack DM Ben first. It's still under developement.*

This library is the node client to the v3, aka API next, aka PAPI, version of Recurly's API. Parts of this gem are generated
by the `recurly-client-gen` project.

## Example

```
let recurly = require('./lib/recurly');
let client = new recurly.Client(apiKey, `subdomain-${mySubdomain}`);
client.getAccount('code-benjamin').then(account => console.log(account.id));
```