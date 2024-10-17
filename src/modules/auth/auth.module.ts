import { Module } from '@nestjs/common';

import { AuthPermissionModule } from './auth-permission/auth-permission.module';
import { AuthRoleModule } from './auth-role/auth-role.module';

@Module({
  controllers: [],
  providers: [],
  imports: [AuthPermissionModule, AuthRoleModule]
})
export class AuthModule {}
