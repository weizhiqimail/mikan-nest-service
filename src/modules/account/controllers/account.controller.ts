import { Body, Controller, Post } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AccountLoginDto } from '@/modules/account/controllers/account.controller.dto';
import { AccountRouteService } from '@/modules/account/services/account.route.service';

@ApiTags('用户账号模块')
@Controller(`/api/v1/account`)
export class AccountController {
  constructor(
    private readonly configService: ConfigService,
    private readonly accountRouteService: AccountRouteService,
  ) {}

  @ApiOperation({ summary: '用户登录' })
  @Post('/login')
  async accountLogin(@Body() dto: AccountLoginDto) {
    return this.accountRouteService.accountLogin(dto);
  }

  @ApiOperation({ summary: '用户退出登录' })
  @Post('/logout')
  async accountLogout() {}

  @ApiOperation({ summary: '重置密码' })
  @Post('/reset-password')
  async accountResetPassword() {}

  @ApiOperation({ summary: '验证用户token' })
  @Post('/verify-token')
  async accountVerifyToken() {}
}
