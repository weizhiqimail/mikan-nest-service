import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import SinglePermissionModel from '@/shared/MongoDB/schemas/SinglePermission';

@Injectable()
export class DbSinglePermissionService extends CommonDaoService {
  constructor() {
    super(SinglePermissionModel);
  }
}
