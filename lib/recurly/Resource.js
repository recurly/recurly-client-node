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

  /**
   * This allows you to inspect the underlying HTTP metadata which
   * created this resoource.
   *
   * @returns {Response} The underlying HTTP response.
   */
  getResponse () {
    return this._response
  }

  _setResponse (response) {
    // We do not want this property accidentally serialized
    Object.defineProperty(this, '_response', { value: 'static', writable: true })
    this._response = response
  }
}

module.exports = Resource
