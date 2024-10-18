import { Document } from 'mongoose';

export enum IUserGenderEnum {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
  UNKNOWN = 'UNKNOWN',
}

export enum IUserStatusEnum {
  // 未激活
  UNACTIVATED = 'UNACTIVATED',
  // 正常
  NORMAL = 'NORMAL',
  // 禁用
  DISABLED = 'DISABLED',
}

export declare namespace UserModelTypes {
  interface Model extends Document {
    id: string;
    nickname?: string;
    avatarUrl?: string;
    email?: string;
    phone?: string;
    gender?: IUserGenderEnum;
    status?: IUserStatusEnum;
    createTime?: Date;
    updateTime?: Date;
    remark?: string;
  }

  interface QueryList {
    email?: string;
    phone?: string;
  }

  interface Create {
    nickname?: string;
    avatarUrl?: string;
    email?: string;
    phone?: string;
    gender?: IUserGenderEnum;
    status?: IUserStatusEnum;
    createTime?: Date;
    updateTime?: Date;
    remark?: string;
  }

  interface Update {
    nickname?: string;
    avatarUrl?: string;
    email?: string;
    phone?: string;
    gender?: IUserGenderEnum;
    status?: IUserStatusEnum;
    createTime?: Date;
    updateTime?: Date;
    remark?: string;
  }
}
