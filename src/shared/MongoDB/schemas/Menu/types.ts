import { Document, Types } from 'mongoose';

export enum IMenuStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export declare namespace MenuModelTypes {
  interface Model extends Document {
    name: string; // 菜单名称
    code: string; // 菜单唯一标识符
    description?: string; // 菜单描述
    permissionId: Types.ObjectId | string; // 权限ID
    clientId: Types.ObjectId | string; // 客户端ID
    status: IMenuStatus; // 菜单状态
    creatorId: Types.ObjectId | string; // 创建者ID
    updaterId: Types.ObjectId | string; // 更新者ID
    createdAt: Date; // 创建时间
    updatedAt: Date; // 最后更新时间
    remark?: string; // 备注
  }

  interface QueryList {
    name?: string;
    code?: string;
    status?: IMenuStatus;
  }

  interface Create {
    name: string;
    code: string;
    description?: string;
    permissionId: Types.ObjectId | string;
    clientId: Types.ObjectId | string;
    status: IMenuStatus;
    creatorId: Types.ObjectId | string;
  }

  interface Update {
    id: Types.ObjectId | string;
    name?: string;
    code?: string;
    description?: string;
    permissionId?: Types.ObjectId | string;
    clientId?: Types.ObjectId | string;
    status?: IMenuStatus;
    updaterId: Types.ObjectId | string;
  }

  interface Remove {
    id: Types.ObjectId | string;
  }
}
