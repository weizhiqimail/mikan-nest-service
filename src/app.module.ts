import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import globalConfig from '@/config/global';

import { TransformInterceptor } from '@/interceptors/http-transform.interceptor';
import { HttpResponseFilter } from '@/filters/http-response.filter';

import { AccountModule } from '@/modules/account/account.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { MediaModule } from '@/modules/media/media.module';
import { SysModule } from '@/modules/sys/sys.config';
import { UserModule } from '@/modules/user/user.module';
import { SharedModule } from '@/shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [globalConfig],
    }),
    AccountModule,
    AuthModule,
    MediaModule,
    SysModule,
    UserModule,
    SharedModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpResponseFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
