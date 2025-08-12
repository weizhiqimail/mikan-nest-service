import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import AccountModel from '@/shared/MongoDB/schemas/Account/schema';

@Injectable()
export class DbAccountModelService extends CommonDaoService {
  constructor() {
    super(AccountModel);
  }
}
