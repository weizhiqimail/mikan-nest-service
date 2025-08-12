import { Schema, model } from 'mongoose';

import {
  LanguageWordSchemaConfig,
  formatLanguageWordModelData,
  LanguageWordDifficulty,
  LanguageWordPartOfSpeech,
} from './config';
import { LanguageWordModelTypes } from './types';

export const LanguageWordSchema = new Schema(
  {
    word: { type: String, required: true },
    kana: { type: String, required: true, description: '假名' },
    partOfSpeech: {
      type: [String],
      enum: Object.values(LanguageWordPartOfSpeech),
      default: [],
      description: '词性',
    },
    definition: { type: String, description: '中文翻译', default: '' },
    sentences: [{ type: Schema.Types.ObjectId, description: '例句' }],
    difficulty: {
      type: String,
      enum: Object.values(LanguageWordDifficulty),
      default: LanguageWordDifficulty.N5,
      description: '日语能力考试等级 (N1最高，N5最低)',
    },
    synonyms: [{ type: Schema.Types.ObjectId, description: '近义词' }],
    antonyms: [{ type: Schema.Types.ObjectId, description: '反义词' }],
    relations: [{ type: Schema.Types.ObjectId, description: '相关词' }],
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

LanguageWordSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatLanguageWordModelData(ret);
  },
});
LanguageWordSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatLanguageWordModelData(ret);
  },
});

const LanguageWordModel = model<LanguageWordModelTypes.Model>(
  LanguageWordSchemaConfig.moduleName,
  LanguageWordSchema,
);

export default LanguageWordModel;
