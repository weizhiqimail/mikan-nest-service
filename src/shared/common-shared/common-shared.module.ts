import { Module } from '@nestjs/common';

import { RedisService } from './services/redis.service';
import { LoggerService } from './services/logger.service';

@Module({
  providers: [RedisService, LoggerService],
  exports: [RedisService, LoggerService],
})
export class CommonSharedModule {}
