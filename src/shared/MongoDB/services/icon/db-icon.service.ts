import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/mongodb/services/common-dao.service';
import IconModel from '@/shared/mongodb/schemas/Icon/schema';

@Injectable()
export class DbIconModelService extends CommonDaoService {
  constructor() {
    super(IconModel);
  }
}
