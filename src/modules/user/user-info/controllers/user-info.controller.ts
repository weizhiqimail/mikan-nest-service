import { Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { UserInfoService } from '@/modules/user/user-info/services/user-info.service';

@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @ApiOperation({ summary: '查询用户列表' })
  @Post('/list')
  async queryUserList() {
    return this.userInfoService.queryList();
  }
}
