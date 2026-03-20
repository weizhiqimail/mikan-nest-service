import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/mongodb/services/common-dao.service';
import LanguageSentenceModel from '@/shared/mongodb/schemas/LanguageSentence/schema';

@Injectable()
export class DbLanguageSentenceService extends CommonDaoService {
  constructor() {
    super(LanguageSentenceModel);
  }
}
