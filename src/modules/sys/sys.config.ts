import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { DbModule } from './db/db.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [ClientModule, DbModule, MenuModule]
})
export class SysModule {}
