import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { mongooseModelList } from '@/mongodb/schemas';
import { MongooseDaoModule } from './mongoose-dao/mongoose-dao.module';

import { LoggerService } from './services/logger.service';
import { RedisService } from './services/redis.service';
import { LoggerTransportService } from './services/logger-transport.service';
import { MongodbConnectionService } from './services/mongodb-connection.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule, SharedModule, MongooseModule],
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
    MongooseModule.forFeature(mongooseModelList),
    MongooseDaoModule,
  ],
  providers: [
    RedisService,
    LoggerTransportService,
    LoggerService,
    MongodbConnectionService,
  ],
  exports: [
    MongooseModule,
    RedisService,
    LoggerTransportService,
    LoggerService,
    MongodbConnectionService,
    MongooseDaoModule,
  ],
})
export class SharedModule implements OnModuleInit {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly mongodbConnectionService: MongodbConnectionService,
  ) {}

  onModuleInit(): any {
    this.loggerService.log('SharedModule Init', 'SharedModule');
    // this.mongodbConnectionService.setupMongooseEventListeners();
  }
}
