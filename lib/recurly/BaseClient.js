'use strict';

let request = require('request-promise-native')
  , resources = require('./resources')
  , pkg = require('../../package')
  ;

// TODO will need this to be settable by playground eventually
const BASE_URL = 'https://partner-api.recurly.com';

// TODO terrible name
class BaseClient {
  constructor(apiKey, siteId) {
    this.siteId = siteId;
    this.httpOptions = {
      headers: {
        'Accept': `application/vnd.recurly.${this.apiVersion()}`,
        'Content-Type': 'application/json',
        // TODO need a standardized user agent
        'User-Agent': `Recurly/${pkg.name}:${pkg.version}`,
        // TODO probably a standard way to do this with request
        'Authorization': 'Basic ' + Buffer.from(apiKey + ':', 'ascii').toString('base64')
      }
    };
  }

  _interpolatePath(path, parameters={}) {
    parameters['site_id'] = this.siteId;
    Object.keys(parameters).forEach(name => {
      path = path.replace(`{${name}}`, parameters[name]);
    });
    return path;
  }

  _makeRequest(method, path, body) {
    let options = Object.assign({
      method: method,
      url: BASE_URL + path,
    }, this.httpOptions)

    // TODO what am i doing?
    return new Promise((resolve, reject) => {
      request(options, (err, resp, body) => {
        if (err) {
          reject(err);
        } else {
          body = JSON.parse(body);
          let className = body.object.replace(/_([a-z])/g, g => g[1].toUpperCase()).replace(/^\w/, g => g.toUpperCase());
          delete body['object'];
          // TODO this needs to recursively create Resource objects
          // TODO should also do things like parse datetimes, etc
          let resource = Object.assign(new resources[className](), body);
          resolve(resource);
        }
      });
    });
  }
}

module.exports = BaseClient;
