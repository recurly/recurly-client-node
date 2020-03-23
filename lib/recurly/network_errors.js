/* istanbul ignore file */
'use strict'

let ApiError = require('./ApiError')

class ServiceUnavailableError extends ApiError { }

class TimeoutError extends ApiError { }

class UnexpectedResponseError extends ApiError { }

module.exports = {

  ServiceUnavailableError: ServiceUnavailableError,

  TimeoutError: TimeoutError,

  UnexpectedResponseError: UnexpectedResponseError
}
