import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/shared/MongoDB/schemas/types';

export const ClientSchemaConfig: ISchemaConfig = {
  moduleName: 'clients',
  formatFn: formatClientModelData,
};

export function formatClientModelData(ret) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
