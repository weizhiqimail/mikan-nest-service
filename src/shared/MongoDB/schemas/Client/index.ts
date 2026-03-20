import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { ClientSchemaConfig } from '@/shared/mongodb/schemas/Client/config';
import ClientModel, {
  ClientSchema,
} from '@/shared/mongodb/schemas/Client/schema';

const ClientSchemaItem: ISchemaItem = {
  config: ClientSchemaConfig,
  schema: ClientSchema,
  model: ClientModel,
};

export default ClientSchemaItem;
