import { Injectable } from '@nestjs/common';

import { DbLanguageWordService } from '@/shared/MongoDB/services/language/db-language-word.service';
import { DbLanguageSentenceService } from '@/shared/MongoDB/services/language/db-language-sentence.service';

@Injectable()
export class LanguageSentencesService {
  constructor(
    private readonly dbLanguageWordService: DbLanguageWordService,
    private readonly dbLanguageSentenceService: DbLanguageSentenceService,
  ) {}
}
