import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/mongodb/services/common-dao.service';
import UserModel from '@/shared/mongodb/schemas/User/schema';

@Injectable()
export class DbUserModelService extends CommonDaoService {
  constructor() {
    super(UserModel);
  }
}
