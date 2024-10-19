import { Module } from '@nestjs/common';

import { RedisService } from './services/redis.service';
import { LoggerService } from './services/logger.service';
import { LoggerTransportService } from './services/logger-transport.service';

@Module({
  providers: [
    RedisService,
    LoggerService,
    LoggerTransportService,
  ],
  exports: [
    RedisService,
    LoggerService,
    LoggerTransportService,
  ]
})
export class CommonSharedModule {}
