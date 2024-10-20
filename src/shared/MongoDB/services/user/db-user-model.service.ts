import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import UserModel from '@/shared/MongoDB/schemas/User';

@Injectable()
export class DbUserModelService extends CommonDaoService {
  constructor() {
    super(UserModel);
  }
}
