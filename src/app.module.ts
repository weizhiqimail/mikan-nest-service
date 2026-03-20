import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import globalConfig from '@/config/global';

import { TransformInterceptor } from '@/interceptors/http-transform.interceptor';
import { HttpResponseFilter } from '@/filters/http-response.filter';
import { RequestValidationPipe } from '@/pipes/request-validation.pipe';

import { AccountModule } from '@/modules/account/account.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { MediaModule } from '@/modules/media/media.module';
import { SysModule } from '@/modules/sys/sys.module';
import { UserModule } from '@/modules/user/user.module';
import { SharedModule } from '@/shared/shared.module';
import { RequestLoggerMiddleware } from '@/middlewares/request-logger.middleware';
import { LanguagesModule } from '@/modules/languages/languages.module';
import { FoundationModule } from '@/modules/foundation/foundation.module';

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
    LanguagesModule,
    FoundationModule
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
    {
      provide: APP_PIPE,
      useClass: RequestValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
