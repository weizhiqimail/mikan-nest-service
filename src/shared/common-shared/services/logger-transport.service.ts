import { Injectable } from '@nestjs/common';
import WinstonTransport from 'winston-transport';
import { RedisService } from './redis.service';

@Injectable()
export class LoggerTransportService extends WinstonTransport {
  private readonly redisService: RedisService;

  constructor() {
    super();
  }

  log(info: any, next: () => void): any {
    setImmediate(() => {
      this.emit('logged', info);
    });
    next();
  }
}
