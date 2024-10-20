import { Body, Controller, Post, Headers } from '@nestjs/common';

import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccountLoginDto, AccountResetPasswordDto } from '@/modules/account/controllers/account.controller.dto';
import { AccountRouteService } from '@/modules/account/services/account.route.service';

@ApiTags('账号模块')
@Controller(`/api/v1/account`)
export class AccountController {
  constructor(
    private readonly accountRouteService: AccountRouteService,
  ) {}

  @ApiOperation({ summary: '用户登录' })
  @Post('/login')
  async accountLogin(@Body() dto: AccountLoginDto) {
    return this.accountRouteService.accountLogin(dto);
  }
  
  @Post('/logout')
  @ApiOperation({ summary: '用户退出登录' })
  @ApiHeader({
    name: 'auth-token',
    description: '用户token',
    required: false,
  })
  async accountLogout(@Headers('auth-token') authToken: string) {
    return this.accountRouteService.accountLogout(authToken);
  }

  @ApiOperation({ summary: '重置密码' })
  @Post('/reset-password')
  async accountResetPassword(@Body() dto: AccountResetPasswordDto) {
    return this.accountRouteService.accountResetPassword(dto);
  }

  @ApiOperation({ summary: '验证用户token' })
  @Post('/verify-token')
  async accountVerifyToken() {}
}
