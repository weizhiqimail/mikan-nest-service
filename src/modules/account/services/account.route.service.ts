import { BadRequestException, Injectable } from '@nestjs/common';

import { AccountLoginDto, AccountResetPasswordDto } from '@/modules/account/controllers/account.controller.dto';
import { AccountModelService } from '@/shared/MongoDB/services/account/account-model.service';
import { UserModelBizService } from '@/shared/MongoDB/services/user/user-model-biz.service';
import { AccountCommonService } from '@/modules/account/services/account.common.service';

@Injectable()
export class AccountRouteService {
  constructor(
    private readonly accountModelService: AccountModelService,
    private readonly userModelBizService: UserModelBizService,
    private readonly accountCommonService: AccountCommonService,
  ) {}

  async accountLogin(loginDto: AccountLoginDto) {
    const userExistResult = await this.userModelBizService.queryUserByEmail(
      loginDto.email,
    );

    if (!userExistResult.data) {
      throw new BadRequestException('邮箱不存在');
    }

    // hash 用户的 password
    const userInfo = userExistResult.data;
    const hashPassword = await this.accountCommonService.hashUserPassword(
      loginDto.password,
    );

    // 查询账号
    const accountExistResult =
      await this.accountModelService.queryItemByConditions({
        userId: userInfo.id,
      });

    if (!accountExistResult.success) {
      throw new BadRequestException('用户不存在');
    }

    const accountData = accountExistResult.data;
    if (accountData.password !== hashPassword) {
      throw new BadRequestException('密码错误');
    }

    // 删除原有的 token
    await this.accountCommonService.deleteAccountUserToken(userInfo.id);

    userInfo.accountId = accountData.id;

    await this.accountCommonService.saveAccountUserToken(
      userInfo.id,
      userInfo,
    );
    
    return { token: userInfo.id }
    
  }
  
  async accountLogout(authToken: string) {
    return this.accountCommonService.deleteAccountUserToken(authToken);
  }
  
  async accountResetPassword(dto: AccountResetPasswordDto) {
    const userExistResult = await this.userModelBizService.queryUserByEmail(
      dto.email,
    );
    
    const userInfo = userExistResult.data;
    
    if (!userInfo) {
      throw new BadRequestException('邮箱不存在');
    }
   
    return this.accountCommonService.setUserPassword(userInfo.id, dto.password1);
  
  }
  
  
  
}
