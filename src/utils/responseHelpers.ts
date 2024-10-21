export const headerTypeJson = {
  'Content-Type': 'application/json',
};

export enum StatusCode {
  Success = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

enum ErrorMessages {
  InvalidData = 'Invalid data in request',
  InternalServerError = 'Internal Server Error',
  InvalidMethod = 'Invalid method',
  InvalidEndpoint = 'Invalid endpoint',
  InvalidIdFormat = 'Invalid id format',
  UserNotFound = 'User not found',
}

export const errObj = {
  invalidData: {
    message: ErrorMessages.InvalidData,
  },
  internalServerError: {
    message: ErrorMessages.InternalServerError,
  },
  invalidMethod: {
    message: ErrorMessages.InvalidMethod,
  },
  invalidEndpoint: {
    message: ErrorMessages.InvalidEndpoint,
  },
  invalidIdFormat: {
    message: ErrorMessages.InvalidIdFormat,
  },
  userNotFound: {
    message: ErrorMessages.UserNotFound,
  },
};
