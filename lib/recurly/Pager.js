
/**
 * The class responsible for pagination.
 *
 * @param {Client} client
 * @param {string} path
 * @param {Object} options
 */
class Pager {
  constructor (client, path, options) {
    this.client = client
    this.path = path
    this.options = options
  }

  /**
   * Returns an async iterator over each page of results.
   */
  eachPage () {
    return {
      [Symbol.asyncIterator]: this._pageIterator.bind(this)
    }
  }

  /**
   * Returns an async iterator over each resource in results.
   */
  each () {
    return {
      [Symbol.asyncIterator]: this._resourceIterator.bind(this)
    }
  }

  /**
   * Count the number of resources that match this Pager's filters
   *
   * @return {Number} The count of resources
   */
  async count () {
    const empty = await this.client._makeRequest('HEAD', this.path, null, this.options)
    return empty.getResponse().recordCount
  }

  /**
   * Return only the first item. This is efficient because it tells
   * the server to only return 1 item. You can also use this method
   * to get the last resource by inverting the `order` parameter.
   *
   * @return {Object} The first resource in the list
   */
  async first () {
    const firstOptions = Object.assign({}, this.options, {
      params: Object.assign({}, this.options.params, { limit: 1 })
    })
    let results = await this.client._makeRequest('GET', this.path, null, firstOptions)
    return results.data && results.data[0]
  }

  _pageIterator () {
    return {
      next: () => {
        if (this.done) {
          return Promise.resolve({ done: true })
        }
        return new Promise((resolve, reject) => {
          const pageOptions = Object.assign({}, this.options, {
            params: this._consumeParams()
          })
          this.client._makeRequest('GET', this.path, null, pageOptions)
            .then(results => {
              this.done = !results.hasMore
              this.path = results.next
              resolve({
                value: results.data,
                done: false
              })
            })
            .catch(reject)
        })
      }
    }
  }

  _resourceIterator () {
    let iterator = this._pageIterator()
    let resourceNumber = 0
    let resources = null
    return {
      next: () => {
        if (resources && (resourceNumber < resources.length)) {
          return Promise.resolve({ value: resources[resourceNumber++], done: false })
        } else {
          return new Promise((resolve, reject) => {
            iterator.next()
              .then(it => {
                if (it.done) {
                  resolve(it)
                } else {
                  resources = it.value
                  resourceNumber = 0
                  // if we have some resources, yield the first
                  if (resources && resources.length > 0) {
                    resolve({
                      value: resources[resourceNumber++],
                      done: false
                    })
                  // if we have some don't stop iteration
                  } else {
                    resolve({ done: true })
                  }
                }
              })
              .catch(reject)
          })
        }
      }
    }
  }

  // allows us to only apply the params
  // to the first request. For each request after
  // the params are already encoded in the path
  _consumeParams () {
    if (this._paramsConsumed) {
      return null
    }
    this._paramsConsumed = true
    return this.options.params
  }
}

module.exports = Pager
