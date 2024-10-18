import { Module } from '@nestjs/common';
import { UserInfoController } from './controllers/user-info.controller';
import { UserInfoService } from './services/user-info.service';
import { SharedModule } from '@/modules/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
