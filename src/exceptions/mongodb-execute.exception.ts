import { HttpException, HttpStatus } from '@nestjs/common';

export class MongodbExecuteException extends HttpException {
  constructor(
    message: string,
    statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super(
      {
        statusCode,
        message,
        exceptionName: 'MongodbExecuteException',
      },
      statusCode,
    );
  }
}
