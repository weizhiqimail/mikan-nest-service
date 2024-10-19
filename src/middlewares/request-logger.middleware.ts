import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { LoggerService } from '@/shared/common-shared/services/logger.service';
import { formatDateTimeWithMilliseconds } from '@/helper/date';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.writeLog(req);
    next();
  }

  writeLog(req: Request) {
    const { method, path, headers, query, body } = req;
    const time = formatDateTimeWithMilliseconds();
    this.logger.log(`[${time}] ${method} ${path}`);
    this.logger.log(`Headers: ${JSON.stringify(headers)}`);
    this.logger.log(`Query: ${JSON.stringify(query)}`);
    this.logger.log(`Body: ${JSON.stringify(body)}`);
  }
}
