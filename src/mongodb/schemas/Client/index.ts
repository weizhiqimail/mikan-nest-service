import { Schema, model } from 'mongoose';

import {
  ClientModelTypes,
  IClientStatus,
} from '@/mongodb/schemas/Client/types';
import {
  ClientSchemaConfig,
  formatClientModelData,
} from '@/mongodb/schemas/Client/config';

export const ClientSchema = new Schema<ClientModelTypes.Model>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    status: {
      type: String,
      required: true,
      default: IClientStatus.ACTIVE,
    },
    // creatorId: {
    //   type: Schema.Types.ObjectId,
    //   ref: UserSchemaConfig.moduleName,
    //   required: true,
    // },
    // updaterId: {
    //   type: Schema.Types.ObjectId,
    //   ref: UserSchemaConfig.moduleName,
    //   required: true,
    // },
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

ClientSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatClientModelData(ret);
  },
});
ClientSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatClientModelData(ret);
  },
});

const ClientModel = model<ClientModelTypes.Model>(
  ClientSchemaConfig.moduleName,
  ClientSchema,
);

export default ClientModel;
