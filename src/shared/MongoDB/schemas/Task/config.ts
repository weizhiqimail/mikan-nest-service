import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/shared/mongodb/schemas/types';

export const TaskSchemaConfig: ISchemaConfig = {
  moduleName: 'tasks',
  formatFn: formatTaskModelData,
};

export function formatTaskModelData(ret: any) {
  ret.statusHistory = (ret.statusHistory || []).map((item) => {
    return {
      ...item,
      time: formatDateTime(item.time),
    };
  });
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
