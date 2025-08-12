import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { ClientSchemaConfig } from '@/shared/MongoDB/schemas/Client/config';
import ClientModel, {
  ClientSchema,
} from '@/shared/MongoDB/schemas/Client/schema';

const ClientSchemaItem: ISchemaItem = {
  config: ClientSchemaConfig,
  schema: ClientSchema,
  model: ClientModel,
};

export default ClientSchemaItem;
