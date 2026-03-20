import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { RequestLogSchemaConfig } from '@/shared/mongodb/schemas/RequestLog/config';
import RequestLogModel, {
  RequestLogSchema,
} from '@/shared/mongodb/schemas/RequestLog/schema';

const RequestLogSchemaItem: ISchemaItem = {
  config: RequestLogSchemaConfig,
  schema: RequestLogSchema,
  model: RequestLogModel,
};

export default RequestLogSchemaItem;
