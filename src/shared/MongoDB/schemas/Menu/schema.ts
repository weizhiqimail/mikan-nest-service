import { Schema, model } from 'mongoose';
import {
  IMenuStatus,
  MenuModelTypes,
} from '@/shared/mongodb/schemas/Menu/types';
import {
  formatMenuModelData,
  MenuSchemaConfig,
} from '@/shared/mongodb/schemas/Menu/config';

export const MenuSchema = new Schema<MenuModelTypes.Model>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    permissionId: {
      type: Schema.Types.ObjectId,
      ref: 'permissions',
      required: false,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'clients',
      required: false,
    },
    status: {
      type: String,
      required: true,
      default: IMenuStatus.ACTIVE,
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    updaterId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

MenuSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatMenuModelData(ret);
  },
});
MenuSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatMenuModelData(ret);
  },
});

const MenuModel = model<MenuModelTypes.Model>(
  MenuSchemaConfig.moduleName,
  MenuSchema,
);

export default MenuModel;
