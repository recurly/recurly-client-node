/* istanbul ignore file */
/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

let ApiError = require('./ApiError')

class ResponseError extends ApiError { }
class ServerError extends ResponseError { }
class InternalServerError extends ServerError { }
class ServiceNotAvailableError extends InternalServerError { }
class BadGatewayError extends ServerError { }
class ServiceUnavailableError extends ServerError { }
class TimeoutError extends ServerError { }
class RedirectionError extends ResponseError { }
class NotModifiedError extends ResponseError { }
class ClientError extends ApiError { }
class BadRequestError extends ClientError { }
class InvalidContentTypeError extends BadRequestError { }
class UnauthorizedError extends ClientError { }
class PaymentRequiredError extends ClientError { }
class ForbiddenError extends ClientError { }
class InvalidApiKeyError extends ForbiddenError { }
class InvalidPermissionsError extends ForbiddenError { }
class NotFoundError extends ClientError { }
class NotAcceptableError extends ClientError { }
class UnknownApiVersionError extends NotAcceptableError { }
class UnavailableInApiVersionError extends NotAcceptableError { }
class InvalidApiVersionError extends NotAcceptableError { }
class PreconditionFailedError extends ClientError { }
class UnprocessableEntityError extends ClientError { }
class ValidationError extends UnprocessableEntityError { }
class MissingFeatureError extends UnprocessableEntityError { }
class TransactionError extends UnprocessableEntityError { }
class SimultaneousRequestError extends UnprocessableEntityError { }
class ImmutableSubscriptionError extends UnprocessableEntityError { }
class InvalidTokenError extends UnprocessableEntityError { }
class TooManyRequestsError extends ClientError { }
class RateLimitedError extends TooManyRequestsError { }

const ERROR_MAP = {
  500: InternalServerError,
  502: BadGatewayError,
  503: ServiceUnavailableError,
  504: TimeoutError,
  304: NotModifiedError,
  400: BadRequestError,
  401: UnauthorizedError,
  402: PaymentRequiredError,
  403: ForbiddenError,
  404: NotFoundError,
  406: NotAcceptableError,
  412: PreconditionFailedError,
  422: UnprocessableEntityError,
  429: TooManyRequestsError
}

module.exports = {
  ERROR_MAP: ERROR_MAP,
  ResponseError: ResponseError,
  ServerError: ServerError,
  InternalServerError: InternalServerError,
  ServiceNotAvailableError: ServiceNotAvailableError,
  BadGatewayError: BadGatewayError,
  ServiceUnavailableError: ServiceUnavailableError,
  TimeoutError: TimeoutError,
  RedirectionError: RedirectionError,
  NotModifiedError: NotModifiedError,
  ClientError: ClientError,
  BadRequestError: BadRequestError,
  InvalidContentTypeError: InvalidContentTypeError,
  UnauthorizedError: UnauthorizedError,
  PaymentRequiredError: PaymentRequiredError,
  ForbiddenError: ForbiddenError,
  InvalidApiKeyError: InvalidApiKeyError,
  InvalidPermissionsError: InvalidPermissionsError,
  NotFoundError: NotFoundError,
  NotAcceptableError: NotAcceptableError,
  UnknownApiVersionError: UnknownApiVersionError,
  UnavailableInApiVersionError: UnavailableInApiVersionError,
  InvalidApiVersionError: InvalidApiVersionError,
  PreconditionFailedError: PreconditionFailedError,
  UnprocessableEntityError: UnprocessableEntityError,
  ValidationError: ValidationError,
  MissingFeatureError: MissingFeatureError,
  TransactionError: TransactionError,
  SimultaneousRequestError: SimultaneousRequestError,
  ImmutableSubscriptionError: ImmutableSubscriptionError,
  InvalidTokenError: InvalidTokenError,
  TooManyRequestsError: TooManyRequestsError,
  RateLimitedError: RateLimitedError
}
