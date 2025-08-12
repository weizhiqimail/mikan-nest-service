import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import LanguageWordModel from '@/shared/MongoDB/schemas/LanguageWord';

@Injectable()
export class DbLanguageWordService extends CommonDaoService {
  constructor() {
    super(LanguageWordModel);
  }
}
