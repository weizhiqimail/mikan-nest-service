import { Schema, model } from 'mongoose';

import {
  formatPermissionGroupModelData,
  PermissionGroupSchemaConfig,
} from '@/shared/mongodb/schemas/PermissionGroup/config';
import { UserSchemaConfig } from '@/shared/mongodb/schemas/User/config';
import { SinglePermissionSchemaConfig } from '@/shared/mongodb/schemas/SinglePermission/config';
import { PermissionGroupModelTypes } from '@/shared/mongodb/schemas/PermissionGroup/types';

export const PermissionGroupSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, default: '' },
    type: { type: String, required: true, description: '权限类型' },
    enable: { type: Boolean, default: false },
    permissionGroup: [
      {
        type: Schema.Types.ObjectId,
        ref: PermissionGroupSchemaConfig.moduleName,
        required: false,
      },
    ],
    singlePermission: [
      {
        type: Schema.Types.ObjectId,
        ref: SinglePermissionSchemaConfig.moduleName,
        required: false,
      },
    ],
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: UserSchemaConfig.moduleName,
      required: true,
    },
    updaterId: {
      type: Schema.Types.ObjectId,
      ref: UserSchemaConfig.moduleName,
      required: true,
    },
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

PermissionGroupSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatPermissionGroupModelData(ret);
  },
});
PermissionGroupSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatPermissionGroupModelData(ret);
  },
});

const PermissionGroupModel = model<PermissionGroupModelTypes.Model>(
  PermissionGroupSchemaConfig.moduleName,
  PermissionGroupSchema,
);

export default PermissionGroupModel;
