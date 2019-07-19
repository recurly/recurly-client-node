
/**
 * The class responsible for pagination.
 *
 * @param {Client} client
 * @param {string} path
 * @param {Object} params
 */
class Pager {
  constructor (client, path, params) {
    this.client = client
    this.path = path
    this.params = params
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

  _pageIterator () {
    return {
      next: () => {
        if (this.done) {
          return Promise.resolve({ done: true })
        }
        return new Promise((resolve, reject) => {
          this.client._makeRequest('GET', this.path, null, this._consumeParams())
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
    return this.params
  }
}

module.exports = Pager
