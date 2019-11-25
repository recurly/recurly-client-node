class ApiError extends Error {
  constructor (message, type, attributes = {}) {
    super(message)
    this.name = `Recurly${this.constructor.name}`
    this.type = type
    Object.keys(attributes).forEach(k => {
      this[k] = attributes[k]
    })
  }

  getResponse () {
    return this._response
  }

  _setResponse (response) {
    // We do not want this property accidentally serialized
    Object.defineProperty(this, '_response', { value: 'static', writable: true })
    this._response = response
  }
}

module.exports = ApiError
