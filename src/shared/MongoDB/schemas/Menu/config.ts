import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/shared/mongodb/schemas/types';

export const MenuSchemaConfig: ISchemaConfig = {
  moduleName: 'menus',
  formatFn: formatMenuModelData,
};

export function formatMenuModelData(ret) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
