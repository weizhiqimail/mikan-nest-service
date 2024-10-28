import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import PermissionGroupModel from '@/shared/MongoDB/schemas/PermissionGroup';

@Injectable()
export class DbPermissionGroupService extends CommonDaoService {
  constructor() {
    super(PermissionGroupModel);
  }
}
