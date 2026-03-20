import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { LanguageWordSchemaConfig } from '@/shared/mongodb/schemas/LanguageWord/config';
import LanguageWordModel, {
  LanguageWordSchema,
} from '@/shared/mongodb/schemas/LanguageWord/schema';

const LanguageWordSchemaItem: ISchemaItem = {
  config: LanguageWordSchemaConfig,
  schema: LanguageWordSchema,
  model: LanguageWordModel,
};

export default LanguageWordSchemaItem;
