'use strict';

const https = require('https')
    , resources = require('./resources')
    , pkg = require('../../package')
    , ApiError = require('./ApiError')
    ;

// TODO terrible name
class BaseClient {
  constructor(apiKey, siteId) {
    this.siteId = siteId;
    this.httpOptions = {
      // TODO will need to be configurable from playground
      // at some point
      host: 'partner-api.recurly.com',
      headers: {
        'Accept': `application/vnd.recurly.${this.apiVersion()}`,
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

  _makeRequest(method, path, request) {
    const options = Object.assign({
      method: method,
      path: path,
    }, this.httpOptions);

    let requestBody;
    if (request) {
      requestBody = JSON.stringify(request);
      options.headers['Content-Type'] = 'application/json';
      options.headers['Content-Length'] = Buffer.byteLength(requestBody);
    }

    return new Promise((resolve, reject) => {
      options.agent = new https.Agent(options);
      console.log('Sending Request: ', options);
      const request = https.request(options, (response) => {
        const body = [];
        response.setEncoding('utf8');
        response.on('data', (chunk) => body.push(chunk));
        response.on('end', () => {
          const status = response.statusCode;
          let jsonBody = JSON.parse(body.join(''));
          console.log('Got Response: ', jsonBody);

          if (response.statusCode < 200 || response.statusCode > 299) {
            const err = jsonBody.error;
            reject(new ApiError(err.message, err.type, err.params));
          } else {
            const className = jsonBody.object.replace(/_([a-z])/g, g => g[1].toUpperCase()).replace(/^\w/, g => g.toUpperCase());
            delete body['object'];
            // TODO this needs to recursively create Resource objects
            // TODO should also do things like parse datetimes, etc
            const resource = Object.assign(new resources[className](), body);
            resolve(resource);
          }
        });
      });
      request.on('error', err => {
        reject(err);
      });
      if (requestBody) {
        request.write(requestBody);
      }
      request.end();
    });
  }
}

module.exports = BaseClient;
