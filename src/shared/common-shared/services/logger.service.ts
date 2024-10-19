import {
  LoggerService as InnerLoggerService,
  Injectable,
} from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import WinstonTransport from 'winston-transport';

class LoggerTransportService extends WinstonTransport {
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

@Injectable()
export class LoggerService implements InnerLoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      levels: winston.config.npm.levels,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.label(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
          dirname: 'logs',
          filename: 'application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxFiles: '30d',
          maxSize: '20d',
        }),
        new LoggerTransportService(),
      ],
    });
  }

  log(message: string, context?: string) {
    this.logger.info({ message, context });
  }

  error(message: string, context?: string) {
    this.logger.error({ message, context });
  }

  warn(message: string, context?: string) {
    this.logger.warn({ message, context });
  }

  debug(message: string, context?: string) {
    this.logger.debug({ message, context });
  }

  verbose(message: string, context?: string) {
    this.logger.verbose({ message, context });
  }
}
