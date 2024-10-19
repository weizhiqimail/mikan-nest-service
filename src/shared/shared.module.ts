import { Module } from '@nestjs/common';

import { CommonSharedModule } from '@/shared/common-shared/common-shared.module';
import { MongodbModule } from '@/shared/MongoDB/mongodb.module';

@Module({
  imports: [CommonSharedModule, MongodbModule],
  exports: [CommonSharedModule, MongodbModule],
})
export class SharedModule {}
