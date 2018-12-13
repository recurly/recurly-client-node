class Pager {
  constructor (client, path, options = {}) {
    this.client = client
    this.path = path
    this.options = options
    this.pageNumber = 0
  }

  eachPage (callback) {
    if (this.done) return this

    this.client._makeRequest('GET', this.path)
      .then((results) => {
        this.done = !results.hasMore
        this.path = results.next
        callback(null, results.data)
        this.eachPage(callback)
      })
      .catch(callback)
  }
}

module.exports = Pager
