import { Module } from '@nestjs/common';

import { AuthRoleController } from './controllers/auth-role.controller';
import { AuthRoleService } from './services/auth-role.service';

@Module({
  controllers: [AuthRoleController],
  providers: [AuthRoleService],
})
export class AuthRoleModule {}
