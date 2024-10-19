import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import AccountModel from '@/shared/MongoDB/schemas/Account';

@Injectable()
export class AccountModelService extends CommonDaoService {
  constructor() {
    super(AccountModel);
  }
}
