import { Schema, model } from 'mongoose';

import { AccountSchemaConfig, formatAccountModelData } from './config';
import { AccountModelTypes, IAccountStatusEnum } from './types';
import { UserSchemaConfig } from '@/shared/MongoDB/schemas/User/config';

export const AccountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: UserSchemaConfig.moduleName,
      required: true,
    },
    status: { type: String, default: IAccountStatusEnum.UNACTIVATED },
    password: { type: String, required: false },
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

AccountSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatAccountModelData(ret);
  },
});
AccountSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatAccountModelData(ret);
  },
});

const AccountModel = model<AccountModelTypes.Model>(
  AccountSchemaConfig.moduleName,
  AccountSchema,
);

export default AccountModel;
