import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { MediaModule } from './modules/media/media.module';
import { SysModule } from './modules/sys/sys.module';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './modules/shared/shared.module';

import globalConfig from './config/global';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [globalConfig],
  }), AccountModule, AuthModule, MediaModule, SysModule, UserModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
