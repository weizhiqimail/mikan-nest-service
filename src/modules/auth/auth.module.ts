import { Module } from '@nestjs/common';

import { SharedModule } from '@/shared/shared.module';
import { AuthPermissionModule } from './auth-permission/auth-permission.module';
import { AuthRoleModule } from './auth-role/auth-role.module';

@Module({
  controllers: [],
  providers: [],
  imports: [AuthPermissionModule, AuthRoleModule, SharedModule],
})
export class AuthModule {}
