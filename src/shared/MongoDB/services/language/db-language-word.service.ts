import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/mongodb/services/common-dao.service';
import LanguageWordModel from '@/shared/mongodb/schemas/LanguageWord/schema';

@Injectable()
export class DbLanguageWordService extends CommonDaoService {
  constructor() {
    super(LanguageWordModel);
  }
}
