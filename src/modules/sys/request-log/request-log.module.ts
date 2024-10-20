import { Module } from '@nestjs/common';

import { RequestLogService } from '@/modules/sys/request-log/services/request-log.service';
import { RequestLogController } from '@/modules/sys/request-log/controllers/request-log.controller';
import { SharedModule } from '@/shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [RequestLogService],
  controllers: [RequestLogController],
})
export class RequestLogModule {}
