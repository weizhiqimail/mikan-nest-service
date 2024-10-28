import { Module } from '@nestjs/common';

import { RedisService } from '@/shared/common-shared/services/redis.service';
import { FsLoggerService } from '@/shared/common-shared/services/fs-logger.service';

const serviceList = [RedisService, FsLoggerService];

@Module({
  providers: [...serviceList],
  exports: [...serviceList],
})
export class CommonSharedModule {}
