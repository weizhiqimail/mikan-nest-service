import { Document } from 'mongoose';
import { PermissionType } from '@/database/schemas/SinglePermission/types';

export declare namespace PermissionGroupModelTypes {
  // 权限组
  interface Model extends Document {
    name: string;
    code: string;
    description?: string;
    type?: PermissionType;
    enable?: boolean;
    permissionGroup?: string[];
    singlePermission?: string[];
    creatorId: string;
    updaterId: string;
    createTime?: Date;
    updateTime?: Date;
    remark?: string;
  }

  interface Create {
    name: string;
    code: string;
    description?: string;
    type: PermissionType;
    enable?: boolean;
    permissionGroup?: string[];
    singlePermission?: string[];
    creatorId: string;
    remark?: string;
  }

  interface Update {
    name: string;
    code: string;
    description?: string;
    type?: PermissionType;
    enable?: boolean;
    permissionGroup?: string[];
    singlePermission?: string[];
    remark?: string;
  }

  interface QueryList {
    name: string;
    code: string;
    description?: string;
    type?: PermissionType;
    enable?: boolean;
  }
}
