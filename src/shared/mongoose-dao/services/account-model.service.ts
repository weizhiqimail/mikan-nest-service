import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/mongodb/dao/CommonDaoService';
import AccountModel from '@/mongodb/schemas/Account';

@Injectable()
export class AccountModelService extends CommonDaoService {
  constructor() {
    super(AccountModel);
  }
}
