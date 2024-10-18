// src/database/schemas/SinglePermission/config.ts
import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/mongodb/schemas/types';

export const SinglePermissionSchemaConfig: ISchemaConfig = {
  moduleName: 'single_permissions',
  formatFn: formatSinglePermissionModelData,
};

// 格式化 SinglePermission 模型数据
export function formatSinglePermissionModelData(ret) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
