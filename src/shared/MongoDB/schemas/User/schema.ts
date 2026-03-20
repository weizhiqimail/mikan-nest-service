import { Schema, model } from 'mongoose';

import {
  IUserGenderEnum,
  IUserStatusEnum,
  UserModelTypes,
} from '@/shared/mongodb/schemas/User/types';
import {
  formatUserModelData,
  UserSchemaConfig,
} from '@/shared/mongodb/schemas/User/config';

export const UserSchema = new Schema(
  {
    nickname: { type: String, required: false },
    avatarUrl: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    gender: { type: String, default: IUserGenderEnum.UNKNOWN },
    status: { type: String, default: IUserStatusEnum.UNACTIVATED },
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

UserSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatUserModelData(ret);
  },
});
UserSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatUserModelData(ret);
  },
});

const UserModel = model<UserModelTypes.Model>(
  UserSchemaConfig.moduleName,
  UserSchema,
);

export default UserModel;
