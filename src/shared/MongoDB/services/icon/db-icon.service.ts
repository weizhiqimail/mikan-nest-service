import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import IconModel from '@/shared/MongoDB/schemas/Icon/schema';

@Injectable()
export class DbIconModelService extends CommonDaoService {
  constructor() {
    super(IconModel);
  }
}
