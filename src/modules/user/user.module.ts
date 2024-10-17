import { Module } from '@nestjs/common';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  imports: [UserInfoModule],
})
export class UserModule {}
