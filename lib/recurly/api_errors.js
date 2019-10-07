/* istanbul ignore file */
/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

let ApiError = require('./ApiError')

class BadRequestError extends ApiError { }

class InternalServerError extends ApiError { }

class ImmutableSubscriptionError extends ApiError { }

class InvalidApiKeyError extends ApiError { }

class InvalidApiVersionError extends ApiError { }

class InvalidContentTypeError extends ApiError { }

class InvalidPermissionsError extends ApiError { }

class InvalidTokenError extends ApiError { }

class NotFoundError extends ApiError { }

class SimultaneousRequestError extends ApiError { }

class TransactionError extends ApiError { }

class UnauthorizedError extends ApiError { }

class UnavailableInApiVersionError extends ApiError { }

class UnknownApiVersionError extends ApiError { }

class ValidationError extends ApiError { }

class MissingFeatureError extends ApiError { }

module.exports = {

  BadRequestError: BadRequestError,

  InternalServerError: InternalServerError,

  ImmutableSubscriptionError: ImmutableSubscriptionError,

  InvalidApiKeyError: InvalidApiKeyError,

  InvalidApiVersionError: InvalidApiVersionError,

  InvalidContentTypeError: InvalidContentTypeError,

  InvalidPermissionsError: InvalidPermissionsError,

  InvalidTokenError: InvalidTokenError,

  NotFoundError: NotFoundError,

  SimultaneousRequestError: SimultaneousRequestError,

  TransactionError: TransactionError,

  UnauthorizedError: UnauthorizedError,

  UnavailableInApiVersionError: UnavailableInApiVersionError,

  UnknownApiVersionError: UnknownApiVersionError,

  ValidationError: ValidationError,

  MissingFeatureError: MissingFeatureError
}
