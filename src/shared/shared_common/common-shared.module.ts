import { Module } from '@nestjs/common';

import { RedisService } from '@/shared/shared_common/services/redis.service';
import { FsLoggerService } from '@/shared/shared_common/services/fs-logger.service';
import { FoundationService } from './services/foundation.service';

const serviceList = [RedisService, FsLoggerService];

@Module({
  providers: [...serviceList, FoundationService],
  exports: [...serviceList],
})
export class CommonSharedModule {}
