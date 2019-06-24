const Schema = require('./schemas').Schema

class Resource {
  /**
   * Holds a cached copy of the compiled
   * Schema object for this Resource.
   */
  static getCompiledSchema () {
    if (!this._compiledSchema) {
      this._compiledSchema = new Schema(this)
    }
    return this._compiledSchema
  }

  /**
   * Can cast a plain js Object to a Resource
   * of this class type
   *
   * @param {Object} v - The plain js Object to cast
   */
  static cast (v) {
    return this.getCompiledSchema().cast(v)
  }
}

module.exports = Resource
