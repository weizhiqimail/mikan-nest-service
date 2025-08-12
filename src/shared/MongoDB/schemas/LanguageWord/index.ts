import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { LanguageWordSchemaConfig } from '@/shared/MongoDB/schemas/LanguageWord/config';
import LanguageWordModel, {
  LanguageWordSchema,
} from '@/shared/MongoDB/schemas/LanguageWord/schema';

const LanguageWordSchemaItem: ISchemaItem = {
  config: LanguageWordSchemaConfig,
  schema: LanguageWordSchema,
  model: LanguageWordModel,
};

export default LanguageWordSchemaItem;
