import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { generateUUID } from '@/helper/utils';
import { DbRequestLogService } from '@/shared/MongoDB/services/request-log/db-request-log.service';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly requestLogService: DbRequestLogService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const originalJson = res.json.bind(res);
    const requestId = generateUUID(); // 生成唯一的 requestId

    res.json = (body: any) => {
      res.locals.responseData = body; // 将 responseData 存储在 res.locals 中
      return originalJson(body); // 调用原始的 res.json 方法继续处理
    };

    req['requestId'] = requestId;
    req['startTime'] = startTime;
    res.setHeader('X-Request-Id', requestId);

    // 监听响应完成事件
    res.on('finish', async () => {
      const ignoreRegExp = /^\/|^\/api\/v1\/sys\/request-log(\/.*)?$/;
      if (ignoreRegExp.test(req.url)) {
        return;
      }
      const duration = Date.now() - startTime;
      this.requestLogService.createHttpRequestLog(req, res, { duration });
    });

    next();
  }
}
