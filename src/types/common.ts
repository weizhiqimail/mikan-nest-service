import { StatusCodes } from 'http-status-codes';

export interface IErrorResponse {
  statusCode: StatusCodes;
  exceptionName: string;
  errorMsgList: Array<string>;
  method: string;
  path: string;
  time: string;
}
