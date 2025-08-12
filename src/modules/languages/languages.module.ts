import { Module } from '@nestjs/common';

import { SharedModule } from '@/shared/shared.module';

import { LanguageSentencesController } from '@/modules/languages/sentences/controllers/language-sentences.controller';
import { LanguageSentencesService } from '@/modules/languages/sentences/services/language-sentences.service';

import { LanguageWordsController } from '@/modules/languages/words/controllers/language-words.controller';
import { LanguageWordsService } from '@/modules/languages/words/services/language-words.service';

@Module({
  imports: [SharedModule],
  controllers: [LanguageSentencesController, LanguageWordsController],
  providers: [LanguageSentencesService, LanguageWordsService],
})
export class LanguagesModule {}
