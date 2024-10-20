import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import RequestLogModel from '@/shared/MongoDB/schemas/RequestLog';
import { ILogLevelEnum } from '@/shared/MongoDB/schemas/RequestLog/types';

interface CreateHttpRequestLogOptions {
  duration: number;
  level?: ILogLevelEnum;
}

@Injectable()
export class DbRequestLogService extends CommonDaoService {
  constructor() {
    super(RequestLogModel);
  }

  async createHttpRequestLog(
    req: Request,
    res: Response,
    options: CreateHttpRequestLogOptions,
  ) {
    const requestId = res.getHeader('X-Request-Id');
    const duration = options.duration || null;

    // 创建日志记录
    const requestLogInfo = {
      requestId: requestId,
      timestamp: new Date(),
      level: options.level || ILogLevelEnum.INFO,
      headers: req.headers,
      query: req.query,
      body: req.body,
      params: req.params,
      responseData: res.locals.responseData,
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      duration: duration,
    };

    this.create(requestLogInfo)
      .then((res) => {
        console.log(`Request log saved with ID: ${requestId}`);
      })
      .catch((error) => {
        console.error(`Failed to save log: ${error}`);
      });
  }
}
