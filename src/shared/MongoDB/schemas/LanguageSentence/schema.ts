import { Schema, model } from 'mongoose';

import {
  LanguageSentenceSchemaConfig,
  formatLanguageSentenceModelData,
} from './config';
import { LanguageSentenceModelTypes } from '@/shared/mongodb/schemas/LanguageSentence/types';

export const LanguageSentenceSchema = new Schema(
  {
    sentence: { type: String, default: '' },
    definition: { type: String, default: '' },
    words: [
      {
        type: Schema.Types.ObjectId,
        description: '单词',
      },
    ],
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

LanguageSentenceSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatLanguageSentenceModelData(ret);
  },
});
LanguageSentenceSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatLanguageSentenceModelData(ret);
  },
});

const LanguageSentenceModel = model<LanguageSentenceModelTypes.Model>(
  LanguageSentenceSchemaConfig.moduleName,
  LanguageSentenceSchema,
);

export default LanguageSentenceModel;
