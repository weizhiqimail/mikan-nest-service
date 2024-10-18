import { Document, Types } from 'mongoose';

export enum IClientStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export declare namespace ClientModelTypes {
  interface Model extends Document {
    name: string; // 平台名称
    code: string; // 平台唯一标识符 (比如缩写或代码)
    description?: string; // 平台描述
    status: IClientStatus; // 平台状态 (比如: active, inactive)
    // creatorId: Types.ObjectId | string;
    // updaterId: Types.ObjectId | string;
    createdAt: Date; // 创建时间
    updatedAt: Date; // 最后更新时间
    remark?: string; // 备注
  }

  interface QueryList {
    name?: string;
    code?: string;
    status?: IClientStatus;
  }

  interface Create {
    name: string;
    code: string;
    description?: string;
    status: IClientStatus;
    creatorId: Types.ObjectId | string;
  }

  interface Update {
    id: Types.ObjectId | string;
    name?: string;
    code?: string;
    description?: string;
    status?: IClientStatus;
    updaterId: Types.ObjectId | string;
  }

  interface Remove {
    id: Types.ObjectId | string;
  }
}
