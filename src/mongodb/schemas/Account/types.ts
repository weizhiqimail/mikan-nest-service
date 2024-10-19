import { Document } from 'mongoose';

export enum IAccountStatusEnum {
  UNACTIVATED = 'UNACTIVATED',
}

export declare namespace AccountModelTypes {
  interface Model extends Document {
    id: string;
    userId?: string;
    password?: string;
    status: IAccountStatusEnum;
    createTime?: Date;
    updateTime?: Date;
    remark?: string;
  }
}
