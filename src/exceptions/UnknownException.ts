import { HttpException, HttpStatus } from '@nestjs/common';

export class UnknownException extends HttpException {
  constructor(message: string, statusCode: HttpStatus = HttpStatus.BAD_REQUEST) {
    super(
      {
        statusCode,
        message,
        exceptionName: 'UnknownException',
      },
      statusCode,
    );
  }
}

