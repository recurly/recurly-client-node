class Pager {
  constructor (client, path, params) {
    this.client = client
    this.path = path
    this.params = params
  }

  eachPage () {
    return {
      [Symbol.asyncIterator]: this._pageIterator.bind(this)
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
