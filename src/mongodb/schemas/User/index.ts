import { Schema, model } from 'mongoose';
import { formatDateTime } from '@/helper/date';
import {
  IUserGenderEnum,
  IUserStatusEnum,
  UserModelTypes,
} from '@/mongodb/schemas/User/types';
import { UserSchemaConfig } from '@/mongodb/schemas/User/config';

export function formatUserModelData(ret: Record<any, any>) {
  ret.createdAt = formatDateTime(ret.createdAt);
  ret.updatedAt = formatDateTime(ret.updatedAt);
  ret.id = ret._id.toString();
  delete ret.__v;
  delete ret._id;
  return ret;
}

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
