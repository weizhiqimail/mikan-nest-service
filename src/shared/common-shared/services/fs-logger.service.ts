import { Injectable, LoggerService as InnerLoggerService } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

@Injectable()
export class FsLoggerService implements InnerLoggerService {
  private logger: winston.Logger;
  
  constructor() {
    this.logger = winston.createLogger({
      levels: winston.config.npm.levels,
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.colorize(), // 默认给 level（如 info, error 等）添加颜色
        winston.format.printf(({ timestamp, level, message, context }) => {
          return `${timestamp} ${level}: ${message}${context ? ' [' + context + ']' : ''}`;
        })
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
