import { Controller, Post, Get, Query, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { UserInfoService } from '@/modules/user/user-info/services/user-info.service';
import {
  CreateUserInfoDto,
  QueryUserInfoItemByIdDto,
  QueryUserInfoListDto,
  UpdateUserInfoDto,
} from '@/modules/user/user-info/controllers/user-info.controller.dto';

@Controller('/api/v1/user/userInfo')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @ApiOperation({ summary: '查询用户列表' })
  @Get('/list')
  async queryUserInfoList(@Query() queryDto: QueryUserInfoListDto) {
    return this.userInfoService.queryUserInfoList(queryDto);
  }

  @ApiOperation({ summary: '通过 id 查询用户详情' })
  @Get('/itemById')
  async queryUserInfoItem(@Query() queryDto: QueryUserInfoItemByIdDto) {
    return this.userInfoService.queryUserInfoDetailById(queryDto);
  }

  @ApiOperation({ summary: '创建用户' })
  @Post('/create')
  async createUserInfo(@Body() bodyDto: CreateUserInfoDto) {
    return this.userInfoService.createUserInfo(bodyDto);
  }

  @ApiOperation({ summary: '更新用户信息' })
  @Post('/updateById')
  async updateUserInfo(@Body() bodyDto: UpdateUserInfoDto) {
    return this.userInfoService.updateUserInfoById(bodyDto.id, bodyDto);
  }

  @ApiOperation({ summary: '删除用户' })
  @Post('/removeById')
  async removeUserInfo(@Body() queryDto: QueryUserInfoItemByIdDto) {
    return this.userInfoService.removeUserInfoById(queryDto.id);
  }
}
