class ApiError extends Error {
  constructor (message, type, params) {
    super(message)
    this.name = 'RecurlyApiError'
    this.type = type
    this.params = params || []
  }
}

module.exports = ApiError
