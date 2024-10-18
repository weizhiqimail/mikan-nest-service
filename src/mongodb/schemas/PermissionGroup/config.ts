import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/mongodb/schemas/types';

export const PermissionGroupSchemaConfig: ISchemaConfig = {
  moduleName: 'permission_groups',
  formatFn: formatPermissionGroupModelData,
};

export function formatPermissionGroupModelData(ret) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
