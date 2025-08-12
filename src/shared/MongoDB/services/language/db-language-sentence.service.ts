import { Injectable } from '@nestjs/common';

import { CommonDaoService } from '@/shared/MongoDB/services/common-dao.service';
import LanguageSentenceModel from '@/shared/MongoDB/schemas/LanguageSentence/schema';

@Injectable()
export class DbLanguageSentenceService extends CommonDaoService {
  constructor() {
    super(LanguageSentenceModel);
  }
}
