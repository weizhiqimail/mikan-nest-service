import { Module } from '@nestjs/common';

import { CommonSharedModule } from '@/shared/shared_common/common-shared.module';
import { MongodbModule } from '@/shared/mongodb/mongodb.module';

@Module({
  imports: [CommonSharedModule, MongodbModule],
  exports: [CommonSharedModule, MongodbModule],
})
export class SharedModule {}
