import CustomError from './custom-error';
import { ValidationError } from 'express-validator';

class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('Invalid request');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(error => ({
      message: error.msg,
      field: error.param,
    }));
  }
}

export default RequestValidationError;
