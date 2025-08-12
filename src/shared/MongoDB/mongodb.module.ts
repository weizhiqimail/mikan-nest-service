import * as path from 'path';
import { globSync } from 'glob';
import mongoose from 'mongoose';
import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CommonSharedModule } from '@/shared/common-shared/common-shared.module';

import { DbAccountModelService } from '@/shared/MongoDB/services/account/db-account-model.service';
import { DbAccountModelBizService } from '@/shared/MongoDB/services/account/db-account-model-biz.service';
import { DbUserModelService } from '@/shared/MongoDB/services/user/db-user-model.service';
import { DbUserModelBizService } from '@/shared/MongoDB/services/user/db-user-model-biz.service';
import { DbRequestLogService } from '@/shared/MongoDB/services/request-log/db-request-log.service';
import { DbIconModelService } from '@/shared/MongoDB/services/icon/db-icon.service';
import { DbSinglePermissionService } from '@/shared/MongoDB/services/single-permission/db-single-permission.service';
import { DbPermissionGroupService } from '@/shared/MongoDB/services/permission-group/db-single-permission.service';
import { DbLanguageWordService } from '@/shared/MongoDB/services/language/db-language-word.service';
import { DbLanguageSentenceService } from '@/shared/MongoDB/services/language/db-language-sentence.service';

const serviceList = [
  DbAccountModelService,
  DbAccountModelBizService,

  DbUserModelService,
  DbUserModelBizService,

  DbSinglePermissionService,
  DbPermissionGroupService,

  DbRequestLogService,

  DbIconModelService,

  DbLanguageWordService,
  DbLanguageSentenceService,
];

@Module({
  imports: [ConfigModule, CommonSharedModule],
  providers: [...serviceList],
  exports: [...serviceList],
})
export class MongodbModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  onModuleInit(): any {
    this.initSchemaList();
    this.initConnectMongoDB();
  }

  initSchemaList() {
    const schemasDirPath = path.resolve('@/shared/MongoDB/schemas/*/index.ts');

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
      Logger.log(`MongoDB 数据库连接成功`, 'MongoDB');
    } catch (error) {
      Logger.log(`MongoDB 数据库连接失败`, 'MongoDB');
      console.log(error);
    }

    mongoose.connection.on('error', (error) => {
      Logger.log(`MongoDB 数据库连接发生错误`, 'MongoDB');
      console.log(error);
    });

    mongoose.connection.on('disconnected', () => {
      Logger.log(`MongoDB 数据库断开连接`, 'MongoDB');
    });
  }
}
