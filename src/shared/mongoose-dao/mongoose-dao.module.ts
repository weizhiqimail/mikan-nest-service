import { Module } from '@nestjs/common';

import { GenericDaoService } from './services/generic-dao.service';
import { UserSchemaService } from './services/user-schema.service';

@Module({
  providers: [GenericDaoService, UserSchemaService],
  exports: [GenericDaoService, UserSchemaService],
})
export class MongooseDaoModule {}
