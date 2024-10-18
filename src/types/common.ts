import { StatusCodes } from 'http-status-codes';

export enum HttpBizErrorCode {
  /** 请求成功 */
  SUCCESS = 'SUCCESS',

  /** 表单错误 */
  FORM_ERROR = 'FORM_ERROR',

  /** 服务报错 */
  SERVICE_ERROR = 'SERVICE_ERROR',

  /** 没有权限 */
  UNAUTHORIZED = 'UNAUTHORIZED',

  /** 没有登录 */
  NOT_LOGGED_IN = 'NOT_LOGGED_IN',

  /** 资源未找到 */
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',

  /** 请求超时 */
  REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',

  /** 操作失败 */
  OPERATION_FAILED = 'OPERATION_FAILED',

  /**
   * 404 not found
   */
  NOT_FOUND = 'NOT_FOUND',

  /**
   * 没有匹配到的错误
   */
  NO_MATCHED_ERROR = 'NO_MATCHED_ERROR',
}

export const ExceptionHttpStatusMap: Record<HttpBizErrorCode, StatusCodes> = {
  [HttpBizErrorCode.SUCCESS]: StatusCodes.OK,
  [HttpBizErrorCode.FORM_ERROR]: StatusCodes.BAD_REQUEST,
  [HttpBizErrorCode.SERVICE_ERROR]: StatusCodes.INTERNAL_SERVER_ERROR,
  [HttpBizErrorCode.UNAUTHORIZED]: StatusCodes.FORBIDDEN,
  [HttpBizErrorCode.NOT_LOGGED_IN]: StatusCodes.UNAUTHORIZED,
  [HttpBizErrorCode.RESOURCE_NOT_FOUND]: StatusCodes.BAD_REQUEST,
  [HttpBizErrorCode.REQUEST_TIMEOUT]: StatusCodes.REQUEST_TIMEOUT,
  [HttpBizErrorCode.OPERATION_FAILED]: StatusCodes.INTERNAL_SERVER_ERROR,
  [HttpBizErrorCode.NOT_FOUND]: StatusCodes.NOT_FOUND,
  [HttpBizErrorCode.NO_MATCHED_ERROR]: StatusCodes.BAD_REQUEST,
};

export interface IOKResponse<T> {
  errorCode?: HttpBizErrorCode;
  data?: T;
  success: boolean;
}

export interface IErrorResponse {
  errorCode?: HttpBizErrorCode;
  errorMsgList?: Array<string>;
  method?: string;
  path?: string;
  time?: string;
}
