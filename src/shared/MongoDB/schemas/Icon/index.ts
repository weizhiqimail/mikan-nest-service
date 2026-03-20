import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { IconSchemaConfig } from '@/shared/mongodb/schemas/Icon/config';
import IconModel, { IconSchema } from '@/shared/mongodb/schemas/Icon/schema';

const IconSchemaItem: ISchemaItem = {
  config: IconSchemaConfig,
  schema: IconSchema,
  model: IconModel,
};

export default IconSchemaItem;
