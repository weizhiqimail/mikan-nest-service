import { Schema, model } from 'mongoose';
import { IMenuStatus, MenuModelTypes } from '@/mongodb/schemas/Menu/types';
import {
  formatMenuModelData,
  MenuSchemaConfig,
} from '@/mongodb/schemas/Menu/config';

const MenuSchema = new Schema<MenuModelTypes.Model>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    permissionId: {
      type: Schema.Types.ObjectId,
      ref: 'permissions',
      required: true,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'clients',
      required: true,
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
