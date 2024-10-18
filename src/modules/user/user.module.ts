import { Module } from '@nestjs/common';

import { UserInfoModule } from './user-info/user-info.module';
import { SharedModule } from '@/modules/shared/shared.module';

@Module({
  imports: [UserInfoModule, SharedModule],
})
export class UserModule {}
