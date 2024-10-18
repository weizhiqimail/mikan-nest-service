import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { LoggerService } from './services/logger.service';
import { RedisService } from './services/redis.service';
import { LoggerTransportService } from './services/logger-transport.service';
import { MongodbConnectionService } from './services/mongodb-connection.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule, SharedModule],
      useFactory: (
        configService: ConfigService,
        loggerService: LoggerService,
      ) => {
        const MONGODB_HOST = configService.get('MONGODB_HOST');
        const MONGODB_PORT = configService.get('MONGODB_PORT');
        const MONGODB_DB_NAME = configService.get('MONGODB_DB_NAME');
        const uri = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB_NAME}`;
        loggerService.log(`uri: ${uri}`, 'MongooseModule');

        return { uri };
      },
      inject: [ConfigService, LoggerService],
    }),
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
  ],
})
export class SharedModule implements OnModuleInit {
  constructor(private readonly loggerService: LoggerService) {}

  onModuleInit(): any {
    this.loggerService.log('SharedModule Init', 'SharedModule');
  }
}
