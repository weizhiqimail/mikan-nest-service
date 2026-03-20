import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/shared/mongodb/schemas/types';

export const IconSchemaConfig: ISchemaConfig = {
  moduleName: 'icons',
  formatFn: formatIconModelData,
};

export function formatIconModelData(ret) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
