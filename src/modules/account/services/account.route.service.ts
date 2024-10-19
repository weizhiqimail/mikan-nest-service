import { BadRequestException, Injectable } from '@nestjs/common';

import { AccountLoginDto } from '@/modules/account/controllers/account.controller.dto';
import { AccountModelService } from '@/shared/MongoDB/services/account/account-model.service';
import { UserModelService } from '@/shared/MongoDB/services/user/user-model.service';
import { UserModelBizService } from '@/shared/MongoDB/services/user/user-model-biz.service';

@Injectable()
export class AccountRouteService {
  constructor(
    private readonly accountModelService: AccountModelService,
    private readonly userModelService: UserModelService,
    private readonly userModelBizService: UserModelBizService,
  ) {}

  async accountLogin(loginDto: AccountLoginDto) {
    const userExistResult = await this.userModelBizService.queryUserByEmail(
      loginDto.email,
    );

    if (!userExistResult.data) {
      throw new BadRequestException('邮箱不存在');
    }
  }
}
