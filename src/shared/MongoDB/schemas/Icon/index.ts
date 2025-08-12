import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { IconSchemaConfig } from '@/shared/MongoDB/schemas/Icon/config';
import IconModel, { IconSchema } from '@/shared/MongoDB/schemas/Icon/schema';

const IconSchemaItem: ISchemaItem = {
  config: IconSchemaConfig,
  schema: IconSchema,
  model: IconModel,
};

export default IconSchemaItem;
