import { Injectable } from '@nestjs/common';

import { DbLanguageWordService } from '@/shared/MongoDB/services/language/db-language-word.service';
import { DbLanguageSentenceService } from '@/shared/MongoDB/services/language/db-language-sentence.service';
import { LanguageWordModelTypes } from '@/shared/MongoDB/schemas/LanguageWord/types';

@Injectable()
export class LanguageWordsService {
  constructor(
    private readonly dbLanguageWordService: DbLanguageWordService,
    private readonly dbLanguageSentenceService: DbLanguageSentenceService,
  ) {}

  async queryWordById(id: string) {
    return this.dbLanguageWordService.queryById(id);
  }

  async queryWordList(queryParams: LanguageWordModelTypes.QueryParams) {
    return this.dbLanguageWordService.queryList({
      queryParams: queryParams,
    });
  }

  async createWord(params: LanguageWordModelTypes.CreateParams) {
    return this.dbLanguageWordService.create(params);
  }

  async updateWordById(params: LanguageWordModelTypes.UpdateParams) {
    return this.dbLanguageWordService.updateById(params.id, params);
  }
}
