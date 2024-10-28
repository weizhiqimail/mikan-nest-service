import { Document, Types } from 'mongoose';

export enum ILogLevelEnum {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  DEBUG = 'debug',
}

export declare namespace RequestLogModelTypes {
  interface Model extends Document {
    requestId: string;
    level: ILogLevelEnum;
    headers?: any;
    query?: any;
    body?: any;
    params?: any;
    responseData?: any;
    method?: string;
    url?: string;
    statusCode?: number;
    ip?: string;
    userAgent?: string;
    stack?: string;
    duration?: number;
    additionalInfo?: any;
  }
}
