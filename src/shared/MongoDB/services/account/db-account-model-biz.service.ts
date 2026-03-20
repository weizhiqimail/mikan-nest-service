import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/mongodb/services/common-dao.service';
import AccountModel from '@/shared/mongodb/schemas/Account/schema';

@Injectable()
export class DbAccountModelBizService extends CommonDaoService {
  constructor() {
    super(AccountModel);
  }
}
