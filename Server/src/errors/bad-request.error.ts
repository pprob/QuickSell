import CustomError from './custom-error';

class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}

export default BadRequestError;
