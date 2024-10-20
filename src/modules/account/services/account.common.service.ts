import crypto from 'crypto';

import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountConfig } from '@/modules/account/account.config';
import { RedisService } from '@/shared/common-shared/services/redis.service';
import { UserModelService } from '@/shared/MongoDB/services/user/user-model.service';
import { AccountModelService } from '@/shared/MongoDB/services/account/account-model.service';

@Injectable()
export class AccountCommonService {
  constructor(
    private readonly redisService: RedisService,
    private readonly userModelService: UserModelService,
    private readonly accountModelService: AccountModelService,
  ) {}

  // 生成 account 存储的 key
  createAccountKey(key: string) {
    return `${AccountConfig.AccountTokenPrefix}${key}`;
  }

  // 生成用户的 token
  generateAccountUserToken(length = 32): string {
    return crypto.randomBytes(length).toString('hex');
  }

  // 每次用户登录，都可以刷新 token，一直保持 3 天有效期。
  async saveAccountUserToken<T = any>(key: string, userInfo: T) {
    return this.redisService.set(
      this.createAccountKey(key),
      userInfo,
      60 * 60 * 24 * 3,
    );
  }

  // 验证用户 token 有效性
  async verifyAccountUserToken(key: string) {
    const redisKey = this.createAccountKey(key);
    return this.redisService.get(redisKey);
  }

  // 删除用户的 token
  async deleteAccountUserToken(key: string) {
    return this.redisService.del(this.createAccountKey(key));
  }

  // 生成加密后的用户密码
  async hashUserPassword(password: string) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  async setUserPassword(userId: string, password: string) {
    const hashPassword = await this.hashUserPassword(password);

    const userAccountExistResult =
      await this.userModelService.queryById(userId);

    const userAccountData = userAccountExistResult.data;
    if (userAccountData) {
      const userAccountUpdateResult = await this.accountModelService.updateById(
        userAccountData.id,
        { password: hashPassword },
      );
      if (userAccountUpdateResult) {
        return { success: true };
      }
      throw new BadRequestException('设置密码失败');
    }

    const createResult = await this.accountModelService.create({
      userId,
      password: hashPassword,
    });

    await this.deleteAccountUserToken(userId);

    if (createResult) {
      return createResult.data;
    }
    throw new BadRequestException('设置密码失败');
  }
}
