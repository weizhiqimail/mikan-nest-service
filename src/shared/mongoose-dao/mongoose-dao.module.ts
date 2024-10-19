import * as path from 'path';
import { globSync } from 'glob';
import mongoose from 'mongoose';

import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CommonSharedModule } from '@/shared/common-shared/common-shared.module';
import { AccountModelService } from './services/account-model.service';
import { UserModelService } from '@/shared/mongoose-dao/services/user-model.service';
import { LoggerService } from '@/shared/common-shared/services/logger.service';

@Module({
  imports: [ConfigModule, CommonSharedModule],
  providers: [UserModelService, AccountModelService],
  exports: [UserModelService, AccountModelService],
})
export class MongooseDaoModule implements OnModuleInit {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService,
  ) {}

  onModuleInit(): any {
    this.initSchemaList();
    this.initConnectMongoDB();
  }

  initSchemaList() {
    const schemasDirPath = path.resolve('@/mongodb/schemas/*/index.ts');

    globSync(schemasDirPath).forEach((schema) => {
      import(schema);
    });
  }

  async initConnectMongoDB() {
    const HOST = this.configService.get('MONGODB_HOST');
    const PORT = this.configService.get('MONGODB_PORT');
    const DATABASE = this.configService.get('MONGODB_DB_NAME');
    const uri = `mongodb://${HOST}:${PORT}/${DATABASE}`;

    try {
      await mongoose.connect(uri, {
        maxPoolSize: 10,
      });
      this.loggerService.log(`MongoDB 数据库连接成功`, 'MongoDB');
    } catch (error) {
      this.loggerService.log(`MongoDB 数据库连接失败`, 'MongoDB');
      console.log(error);
    }

    mongoose.connection.on('error', (error) => {
      this.loggerService.log(`MongoDB 数据库连接发生错误`, 'MongoDB');
      console.log(error);
    });

    mongoose.connection.on('disconnected', () => {
      this.loggerService.log(`MongoDB 数据库断开连接`, 'MongoDB');
    });
  }
}
