import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ExceptionHttpStatusItem,
  ExceptionHttpStatusMapByExceptionName,
} from '../config/http-response-code';
import { StatusCodes } from 'http-status-codes';
import { UnknownException } from '../exceptions/unknown.exception';

@Catch()
export class HttpResponseFilter implements ExceptionFilter {
  private readonly unknownExceptionItem: ExceptionHttpStatusItem;

  constructor() {
    this.unknownExceptionItem = {
      httpStatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      httpStatusText: '未知错误',
      exceptionName: 'UnknownException',
      exception: UnknownException,
      customMessage: 'UnknownException',
    };
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    let exceptionHttpStatusItem: ExceptionHttpStatusItem;
    if (exception instanceof HttpException) {
      exceptionHttpStatusItem = this.processException(exception);
    } else {
      exceptionHttpStatusItem = this.unknownExceptionItem;
    }

    const errorResponse = {
      method: request.method,
      path: request.url,
      time: new Date().toISOString(),
      exception,
      httpStatus: exceptionHttpStatusItem.httpStatusCode,
    };
    response.status(errorResponse.httpStatus).json(errorResponse);
  }

  processException(exception: HttpException): ExceptionHttpStatusItem {
    const constructorName = exception.constructor.name;
    const matchErrorExceptionItem =
      ExceptionHttpStatusMapByExceptionName[constructorName];
    if (matchErrorExceptionItem) {
      return matchErrorExceptionItem;
    }
    return this.unknownExceptionItem;
  }
}
