class ApiError extends Error {
  constructor (message, type, params) {
    super(message)
    this.name = `Recurly${this.constructor.name}`
    this.type = type
    this.params = params || []
  }
}

module.exports = ApiError
