import { Module } from '@nestjs/common';

import { SharedModule } from '@/shared/shared.module';
import { AuthPermissionController } from './controllers/auth-permission.controller';
import { AuthPermissionService } from './services/auth-permission.service';

@Module({
  imports: [SharedModule],
  controllers: [AuthPermissionController],
  providers: [AuthPermissionService],
})
export class AuthPermissionModule {}
