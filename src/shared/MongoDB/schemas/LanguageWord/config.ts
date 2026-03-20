import { formatDateTime } from '@/helper/date';
import { ISchemaConfig } from '@/shared/mongodb/schemas/types';

export const LanguageWordSchemaConfig: ISchemaConfig = {
  moduleName: 'language_words',
  formatFn: formatLanguageWordModelData,
};

export function formatLanguageWordModelData(ret: Record<any, any>) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}

export enum LanguageWordDifficulty {
  N1 = 'N1',
  N2 = 'N2',
  N3 = 'N3',
  N4 = 'N4',
  N5 = 'N5',
}

export enum LanguageWordPartOfSpeech {
  NOUN = '名词',
  PRONOUN = '代名词',
  VERB = '动词',
  SURU_VERB = 'サ変动词',
  ICHIDAN_VERB = '一段动词',
  GODAN_VERB = '五段动词',
  ADJECTIVE = '形容词',
  I_ADJECTIVE = 'い形容词',
  NA_ADJECTIVE = 'な形容词',
  ADVERB = '副词',
  CONJUNCTION = '接续词',
  PREPOSITION = '前置词',
  INTERJECTION = '感叹词',
  PARTICLE = '助词',
  AUXILIARY_VERB = '助动词',
  PREFIX = '前缀',
  SUFFIX = '后缀',
  PHRASE = '短语',
  ONOMATOPOEIA = '拟声词/拟态词',
  PROPER_NOUN = '专有名词',
  NUMBER = '数词',
  COUNTER = '量词/计数器',
}
