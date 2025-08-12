import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { RequestLogSchemaConfig } from '@/shared/MongoDB/schemas/RequestLog/config';
import RequestLogModel, {
  RequestLogSchema,
} from '@/shared/MongoDB/schemas/RequestLog/schema';

const RequestLogSchemaItem: ISchemaItem = {
  config: RequestLogSchemaConfig,
  schema: RequestLogSchema,
  model: RequestLogModel,
};

export default RequestLogSchemaItem;
