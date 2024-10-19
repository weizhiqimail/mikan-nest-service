import { Request } from 'express';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoggerService } from '@/shared/common-shared/services/logger.service';
import { formatDateTimeWithMilliseconds } from '@/helper/date';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap((data) => {
        this.writeLog(request, data);
      }),
    );
  }

  writeLog(req: Request, data: any) {
    const content = {
      time: formatDateTimeWithMilliseconds(),
      headers: req.headers,
      query: req.query,
      body: req.body,
      method: req.method,
      path: req.path,
      responseData: data,
    };
    this.logger.log(JSON.stringify(content), 'LoggerInterceptor');
  }
}
