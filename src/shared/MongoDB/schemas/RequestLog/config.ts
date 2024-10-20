import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/shared/MongoDB/schemas/types';

export const RequestLogSchemaConfig: ISchemaConfig = {
  moduleName: 'request_logs',
  formatFn: formatRequestLogModelData,
};

export function formatRequestLogModelData(ret) {
  ret.timestamp = formatDateTime(ret.timestamp);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
