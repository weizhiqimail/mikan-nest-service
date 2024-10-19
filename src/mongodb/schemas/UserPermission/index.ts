import { Schema, model, Types } from 'mongoose';

import {
  formatUserPermissionModelData,
  UserPermissionSchemaConfig,
} from '@/mongodb/schemas/UserPermission/config';
import { PermissionGroupSchemaConfig } from '@/mongodb/schemas/PermissionGroup/config';
import { SinglePermissionSchemaConfig } from '@/mongodb/schemas/SinglePermission/config';
import { UserPermissionModelTypes } from '@/mongodb/schemas/UserPermission/types';

export const UserPermissionSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    creatorId: {
      type: Types.ObjectId,
      ref: UserPermissionSchemaConfig.moduleName,
      required: true,
    },
    type: { type: String, required: false },
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
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

UserPermissionSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatUserPermissionModelData(ret);
  },
});
UserPermissionSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatUserPermissionModelData(ret);
  },
});

const UserPermissionModel = model<UserPermissionModelTypes.Model>(
  UserPermissionSchemaConfig.moduleName,
  UserPermissionSchema,
);

export default UserPermissionModel;
