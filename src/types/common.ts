import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export interface IOKResponse<T> {
  data?: T;
  success: boolean;
}

export interface IErrorResponse {
  statusCode: StatusCodes;
  exceptionName: string;
  errorMsgList?: Array<string>;
  method?: string;
  path?: string;
  time?: string;
}
