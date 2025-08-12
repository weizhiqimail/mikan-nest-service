import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/shared/MongoDB/schemas/types';

export const LanguageSentenceSchemaConfig: ISchemaConfig = {
  moduleName: 'language_sentences',
  formatFn: formatLanguageSentenceModelData,
};

export function formatLanguageSentenceModelData(ret: Record<any, any>) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}
