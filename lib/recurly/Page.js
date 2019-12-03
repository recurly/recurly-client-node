const Resource = require('./Resource')
const Schema = require('./schemas').Schema
const utils = require('./utils')

class Page extends Resource {
  static getSchema () {
    return {
      object: String,
      hasMore: Boolean,
      next: String,
      data: Array
    }
  }

  // This is overridden because we need to
  // cast the objects in `data` depending on
  // what type they say they are in `object`
  static cast (v) {
    const obj = this.getCompiledSchema().cast(v)
    if (obj.data && obj.data.length > 0) {
      const name = utils.className(obj.data[0].object)
      const Klass = Schema.locateResource(name)
      obj.data = obj.data.map(d => Klass.cast(d))
    }
    return obj
  }
}

module.exports = Page
