import { Module } from '@nestjs/common';

import { CommonSharedModule } from '@/shared/common-shared/common-shared.module';
import { MongooseDaoModule } from '@/shared/mongoose-dao/mongoose-dao.module';

@Module({
  imports: [CommonSharedModule, MongooseDaoModule],
  providers: [],
  exports: [CommonSharedModule, MongooseDaoModule],
})
export class SharedModule {}
