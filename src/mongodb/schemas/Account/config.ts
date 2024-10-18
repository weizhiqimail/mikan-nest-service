import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/mongodb/schemas/types';

export const AccountSchemaConfig: ISchemaConfig = {
  moduleName: 'accounts',
  formatFn: formatAccountModelData,
};

export function formatAccountModelData(ret: Record<any, any>) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  ret.userId = ret.userId.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
