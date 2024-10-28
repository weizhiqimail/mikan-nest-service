import { Module } from '@nestjs/common';

import { SharedModule } from '@/shared/shared.module';
import { IconService } from '@/modules/sys/icon/services/icon.service';
import { IconController } from '@/modules/sys/icon/controllers/icon.controller';

@Module({
  imports: [SharedModule],
  providers: [IconService],
  controllers: [IconController],
})
export class IconModule {}
