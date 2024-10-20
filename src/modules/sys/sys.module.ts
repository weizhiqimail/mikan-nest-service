import { Module } from '@nestjs/common';

import { ClientModule } from './client/client.module';
import { DbModule } from './db/db.module';
import { MenuModule } from './menu/menu.module';
import { RequestLogModule } from './request-log/request-log.module';

@Module({
  imports: [ClientModule, DbModule, MenuModule, RequestLogModule],
})
export class SysModule {}
