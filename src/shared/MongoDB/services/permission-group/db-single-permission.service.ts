import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/mongodb/services/common-dao.service';
import PermissionGroupModel from '@/shared/mongodb/schemas/PermissionGroup/schema';

@Injectable()
export class DbPermissionGroupService extends CommonDaoService {
  constructor() {
    super(PermissionGroupModel);
  }
}
