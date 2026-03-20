import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { LanguageSentenceSchemaConfig } from '@/shared/mongodb/schemas/LanguageSentence/config';
import LanguageSentenceModel, {
  LanguageSentenceSchema,
} from '@/shared/mongodb/schemas/LanguageSentence/schema';

const LanguageSentenceSchemaItem: ISchemaItem = {
  config: LanguageSentenceSchemaConfig,
  schema: LanguageSentenceSchema,
  model: LanguageSentenceModel,
};

export default LanguageSentenceSchemaItem;
