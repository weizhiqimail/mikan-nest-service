import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { IUserGenderEnum, IUserStatusEnum } from './types';
import { formatUserModelData, UserSchemaConfig } from './config';

@Schema({
  collection: UserSchemaConfig.moduleName,
  timestamps: true,
})
export class UserDocument extends Document {
  @Prop({ required: false })
  nickname?: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ required: true })
  email!: string;

  @Prop({ required: false })
  phone?: string;

  @Prop({ type: String, default: IUserGenderEnum.UNKNOWN })
  gender: string;

  @Prop({ type: String, default: IUserStatusEnum.UNACTIVATED })
  status: string;

  @Prop({ type: String, default: '' })
  remark: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);

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
