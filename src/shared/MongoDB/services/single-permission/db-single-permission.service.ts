import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/mongodb/services/common-dao.service';
import SinglePermissionModel from '@/shared/mongodb/schemas/SinglePermission/schema';

@Injectable()
export class DbSinglePermissionService extends CommonDaoService {
  constructor() {
    super(SinglePermissionModel);
  }
}
