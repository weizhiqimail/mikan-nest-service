import { Controller, Get, Post } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@ApiTags('用户账号模块')
@Controller(`/api/v1/account`)
export class AccountController {
  constructor(
    private readonly configService: ConfigService
  ) {
  }

  @ApiOperation({ summary: '用户登录' })
  @Post('/login')
  async accountLogin() {
  
  
  }
  
  @ApiOperation({ summary: '用户登录' })
  @Post('/logout')
  async accountLogout() {
  
  }
  
  @ApiOperation({ summary: '重置密码' })
  @Post('/reset-password')
  async accountResetPassword() {
  
  }
  
  @ApiOperation({ summary: '验证用户token' })
  @Post('/verify-token')
  async accountVerifyToken() {
  
  }


}
