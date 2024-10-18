import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

import { LoggerTransportService } from './logger-transport.service';

@Injectable()
export class LoggerService extends ConsoleLogger {
  private logger: winston.Logger;

  constructor() {
    super();

    this.logger = winston.createLogger({
      levels: winston.config.npm.levels,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.label(),
        winston.format.json(),
      ),
      transports: [
        // new winston.transports.Console(),
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
    super.log(message, context);
    this.logger.info({ message, context });
  }

  error(message: string, context?: string) {
    super.error(message, context);
    this.logger.error({ message, context });
  }

  warn(message: string, context?: string) {
    super.warn(message, context);
    this.logger.warn({ message, context });
  }

  debug(message: string, context?: string) {
    super.debug(message, context);
    this.logger.debug({ message, context });
  }

  verbose(message: string, context?: string) {
    super.verbose(message, context);
    this.logger.verbose({ message, context });
  }
}
