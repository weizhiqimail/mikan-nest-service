import { Schema, model } from 'mongoose';

import {
  ISinglePermissionType,
  SinglePermissionModelTypes,
} from '@/shared/MongoDB/schemas/SinglePermission/types';
import { UserSchemaConfig } from '@/shared/MongoDB/schemas/User/config';
import {
  formatSinglePermissionModelData,
  SinglePermissionSchemaConfig,
} from '@/shared/MongoDB/schemas/SinglePermission/config';

export const SinglePermissionSchema =
  new Schema<SinglePermissionModelTypes.Model>(
    {
      name: { type: String, required: true },
      code: { type: String, required: true },
      description: { type: String, default: '' },
      type: {
        type: String,
        required: true,
        enum: Object.values(ISinglePermissionType),
      },
      enable: { type: Boolean, default: false },
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

// 设置 toJSON 和 toObject 的格式化操作
SinglePermissionSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatSinglePermissionModelData(ret);
  },
});
SinglePermissionSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatSinglePermissionModelData(ret);
  },
});

const SinglePermissionModel = model<SinglePermissionModelTypes.Model>(
  SinglePermissionSchemaConfig.moduleName,
  SinglePermissionSchema,
);

export default SinglePermissionModel;
