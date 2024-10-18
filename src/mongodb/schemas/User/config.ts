import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/mongodb/schemas/types';

export const UserSchemaConfig: ISchemaConfig = {
  moduleName: 'users',
  formatFn: formatUserModelData,
};

export function formatUserModelData(ret: Record<any, any>) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
