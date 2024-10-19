import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GenericDaoService } from './services/generic-dao.service';
import { UserModelService } from './services/user-model.service';
import { schemaList } from '@/mongodb/schemas';
import { LoggerService } from '@/shared/common-shared/services/logger.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule, MongooseModule],
      useFactory: (
        configService: ConfigService,
        loggerService: LoggerService,
      ) => {
        const MONGODB_HOST = configService.get('MONGODB_HOST');
        const MONGODB_PORT = configService.get('MONGODB_PORT');
        const MONGODB_DB_NAME = configService.get('MONGODB_DB_NAME');
        const uri = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB_NAME}`;
        loggerService.log(`uri: ${uri}`, 'MongooseModule');
        
        return {
          uri,
        };
      },
      inject: [ConfigService, LoggerService],
    }),
    MongooseModule.forFeature(
      schemaList.map((item) => {
        return { name: item.config.moduleName, schema: item.schema };
      }),
    ),
  ],
  providers: [GenericDaoService, UserModelService],
  exports: [GenericDaoService, UserModelService],
})
export class MongooseDaoModule {}
