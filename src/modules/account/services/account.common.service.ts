import crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountCommonService {
  
  private readonly tokenPrefix: string;
  
  constructor() {
    this.tokenPrefix = 'account::token::'
  }
  
  // 创建用户 token 的 key
  createAccountKey(key: string) {
    return `${this.tokenPrefix}${key}`;
  }
  
  // 生成用户的 token
  generateAccountUserToken(length = 32): string {
    return crypto.randomBytes(length).toString('hex');
  }
  
}
