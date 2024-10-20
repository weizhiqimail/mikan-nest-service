import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import UserModel from '@/shared/MongoDB/schemas/User';

@Injectable()
export class DbUserModelBizService extends CommonDaoService {
  constructor() {
    super(UserModel);
  }

  async queryUserByEmail(email: string) {
    const result = await this.queryItemByConditions({ email });
    if (!result.success) {
      return { success: false, errorMsg: '查询用户失败' };
    }
    return result;
  }

  async queryUserList() {}
}
