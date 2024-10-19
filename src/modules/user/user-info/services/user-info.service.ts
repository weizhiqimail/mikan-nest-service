import { Injectable } from '@nestjs/common';

import { UserModelService } from '@/shared/MongoDB/services/user/user-model.service';
import {
  CreateUserInfoDto,
  QueryUserInfoItemByIdDto,
  QueryUserInfoListDto,
  UpdateUserInfoDto,
} from '@/modules/user/user-info/controllers/user-info.controller.dto';

@Injectable()
export class UserInfoService {
  constructor(private readonly userModelService: UserModelService) {}

  async queryUserInfoList(queryParams: QueryUserInfoListDto) {
    return this.userModelService.queryList(queryParams);
  }

  async queryUserInfoDetailById(queryParams: QueryUserInfoItemByIdDto) {
    return this.userModelService.queryById(queryParams.id);
  }

  async createUserInfo(bodyParams: CreateUserInfoDto) {
    return this.userModelService.create(bodyParams);
  }

  async updateUserInfoById(id: string, bodyParams: UpdateUserInfoDto) {
    return this.userModelService.updateById(id, bodyParams);
  }

  async removeUserInfoById(id: string) {
    return this.userModelService.removeById(id);
  }
}
