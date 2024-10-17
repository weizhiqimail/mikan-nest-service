import { Module } from '@nestjs/common';
import { UserInfoController } from './controllers/user-info.controller';
import { UserInfoService } from './services/user-info.service';

@Module({
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
