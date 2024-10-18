import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import {
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  NotAcceptableException,
  RequestTimeoutException,
  ConflictException,
  GoneException,
  UnsupportedMediaTypeException,
  UnprocessableEntityException,
  InternalServerErrorException,
  NotImplementedException,
  BadGatewayException,
  ServiceUnavailableException,
  GatewayTimeoutException,
} from '@nestjs/common';
import { transformListToMap } from 'mikan-utils';

export interface ExceptionHttpStatusItem {
  httpStatusCode: StatusCodes;
  httpStatusText: string;
  exceptionName: string;
  exception: any;
  customMessage: string;
}

export const ExceptionHttpStatusList: Array<ExceptionHttpStatusItem> = [
  {
    httpStatusCode: StatusCodes.BAD_REQUEST,
    httpStatusText: getReasonPhrase(StatusCodes.BAD_REQUEST),
    exceptionName: 'BadRequestException',
    exception: BadRequestException,
    customMessage: '请求参数错误，请检查输入数据', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.UNAUTHORIZED,
    httpStatusText: getReasonPhrase(StatusCodes.UNAUTHORIZED),
    exceptionName: 'UnauthorizedException',
    exception: UnauthorizedException,
    customMessage: '用户未授权，访问受限', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.FORBIDDEN,
    httpStatusText: getReasonPhrase(StatusCodes.FORBIDDEN),
    exceptionName: 'ForbiddenException',
    exception: ForbiddenException,
    customMessage: '权限不足，无法执行操作', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.NOT_FOUND,
    httpStatusText: getReasonPhrase(StatusCodes.NOT_FOUND),
    exceptionName: 'NotFoundException',
    exception: NotFoundException,
    customMessage: '资源未找到，请确认请求路径', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.NOT_ACCEPTABLE,
    httpStatusText: getReasonPhrase(StatusCodes.NOT_ACCEPTABLE),
    exceptionName: 'NotAcceptableException',
    exception: NotAcceptableException,
    customMessage: '请求格式不可接受', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.REQUEST_TIMEOUT,
    httpStatusText: getReasonPhrase(StatusCodes.REQUEST_TIMEOUT),
    exceptionName: 'RequestTimeoutException',
    exception: RequestTimeoutException,
    customMessage: '请求超时，请稍后重试', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.CONFLICT,
    httpStatusText: getReasonPhrase(StatusCodes.CONFLICT),
    exceptionName: 'ConflictException',
    exception: ConflictException,
    customMessage: '资源冲突，操作失败', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.GONE,
    httpStatusText: getReasonPhrase(StatusCodes.GONE),
    exceptionName: 'GoneException',
    exception: GoneException,
    customMessage: '资源已不再可用', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.UNSUPPORTED_MEDIA_TYPE,
    httpStatusText: getReasonPhrase(StatusCodes.UNSUPPORTED_MEDIA_TYPE),
    exceptionName: 'UnsupportedMediaTypeException',
    exception: UnsupportedMediaTypeException,
    customMessage: '不支持的媒体类型', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.UNPROCESSABLE_ENTITY,
    httpStatusText: getReasonPhrase(StatusCodes.UNPROCESSABLE_ENTITY),
    exceptionName: 'UnprocessableEntityException',
    exception: UnprocessableEntityException,
    customMessage: '请求数据不可处理', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    httpStatusText: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    exceptionName: 'InternalServerErrorException',
    exception: InternalServerErrorException,
    customMessage: '服务器内部错误，请联系管理员', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.NOT_IMPLEMENTED,
    httpStatusText: getReasonPhrase(StatusCodes.NOT_IMPLEMENTED),
    exceptionName: 'NotImplementedException',
    exception: NotImplementedException,
    customMessage: '功能尚未实现', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.BAD_GATEWAY,
    httpStatusText: getReasonPhrase(StatusCodes.BAD_GATEWAY),
    exceptionName: 'BadGatewayException',
    exception: BadGatewayException,
    customMessage: '网关错误，请稍后重试', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.SERVICE_UNAVAILABLE,
    httpStatusText: getReasonPhrase(StatusCodes.SERVICE_UNAVAILABLE),
    exceptionName: 'ServiceUnavailableException',
    exception: ServiceUnavailableException,
    customMessage: '服务不可用，请稍后再试', // 自定义描述
  },
  {
    httpStatusCode: StatusCodes.GATEWAY_TIMEOUT,
    httpStatusText: getReasonPhrase(StatusCodes.GATEWAY_TIMEOUT),
    exceptionName: 'GatewayTimeoutException',
    exception: GatewayTimeoutException,
    customMessage: '网关超时，请稍后再试', // 自定义描述
  },
];

export const ExceptionHttpStatusMapByExceptionName: Record<string, ExceptionHttpStatusItem> = transformListToMap(ExceptionHttpStatusList, 'exceptionName');

export const ExceptionHttpStatusMapByHttpStatusCode: Record<StatusCodes, ExceptionHttpStatusItem> = transformListToMap(ExceptionHttpStatusList, 'httpStatusCode');


