export const headerTypeJson = {
  'Content-Type': 'application/json',
};

export enum StatusCode {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  InternalServerError = 500,
}

enum ErrorMessages {
  InvalidData = 'Invalid data in request',
  InternalServerError = 'Internal Server Error',
}

export const errObj = {
  invalidData: {
    message: ErrorMessages.InvalidData,
  },
  internalServerError: {
    message: ErrorMessages.InternalServerError,
  },
};
