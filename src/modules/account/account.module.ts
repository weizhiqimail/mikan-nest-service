import { Module } from '@nestjs/common';

import { AccountController } from './controllers/account.controller';
import { AccountCommonService } from './services/account.common.service';
import { AccountRouteService } from './services/account.route.service';
import { SharedModule } from '@/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [AccountController],
  providers: [AccountCommonService, AccountRouteService],
})
export class AccountModule {}
