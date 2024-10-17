import { Module } from '@nestjs/common';
import { AuthPermissionController } from './controllers/auth-permission.controller';
import { AuthPermissionService } from './services/auth-permission.service';

@Module({
  controllers: [AuthPermissionController],
  providers: [AuthPermissionService],
})
export class AuthPermissionModule {}
