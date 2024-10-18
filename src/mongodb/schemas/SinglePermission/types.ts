// src/database/schemas/SinglePermission/types.ts
import { Document, Types } from 'mongoose';

// 权限类型
export enum ISinglePermissionType {
  MENU = 'MENU',
  API = 'API',
  ROLE = 'ROLE',
}

export declare namespace SinglePermissionModelTypes {
  interface Model extends Document {
    name: string; // 权限名称
    code: string; // 权限代码
    description?: string; // 权限描述
    type: ISinglePermissionType; // 权限类型
    enable: boolean; // 是否启用
    creatorId: Types.ObjectId | string; // 创建者ID
    updaterId: Types.ObjectId | string; // 更新者ID
    remark?: string; // 备注
    createdAt: Date; // 创建时间
    updatedAt: Date; // 更新时间
  }

  interface QueryList {
    name?: string;
    code?: string;
    type?: ISinglePermissionType;
    enable?: boolean;
  }

  interface Create {
    name: string;
    code: string;
    description?: string;
    type: ISinglePermissionType;
    enable?: boolean;
    creatorId: Types.ObjectId | string;
  }

  interface Update {
    id: Types.ObjectId | string;
    name?: string;
    code?: string;
    description?: string;
    type?: ISinglePermissionType;
    enable?: boolean;
    updaterId: Types.ObjectId | string;
  }

  interface Remove {
    id: Types.ObjectId | string;
  }
}
