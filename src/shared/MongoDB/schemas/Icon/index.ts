import { Schema, model } from 'mongoose';

import {
  IconModelTypes,
  IconStatus,
} from '@/shared/MongoDB/schemas/Icon/types';
import {
  formatIconModelData,
  IconSchemaConfig,
} from '@/shared/MongoDB/schemas/Icon/config';

export const IconSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    status: { type: String, default: IconStatus.ACTIVE },
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

IconSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatIconModelData(ret);
  },
});
IconSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatIconModelData(ret);
  },
});

const IconModel = model<IconModelTypes.Model>(
  IconSchemaConfig.moduleName,
  IconSchema,
);

export default IconModel;
