import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { LanguageSentenceSchemaConfig } from '@/shared/MongoDB/schemas/LanguageSentence/config';
import LanguageSentenceModel, {
  LanguageSentenceSchema,
} from '@/shared/MongoDB/schemas/LanguageSentence/schema';

const LanguageSentenceSchemaItem: ISchemaItem = {
  config: LanguageSentenceSchemaConfig,
  schema: LanguageSentenceSchema,
  model: LanguageSentenceModel,
};

export default LanguageSentenceSchemaItem;
