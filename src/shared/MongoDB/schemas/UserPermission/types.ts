import { Document } from 'mongoose';

export declare namespace UserPermissionModelTypes {
  // 用户角色
  interface Model extends Document {
    name: string;
    code: string;
    creatorId: string;
    type?: string;
    permissionGroup?: string[];
    singlePermission?: string[];
    remark?: string;
  }

  interface Create {
    name: string;
    code: string;
    creatorId: string;
    type?: string;
    permissionGroup?: string[];
    singlePermission?: string[];
    remark?: string;
  }

  interface Update {
    name: string;
    type?: string;
    permissionGroup?: string[];
    singlePermission?: string[];
    remark?: string;
  }

  interface QueryList {
    name?: string;
    code?: string;
    type?: string;
    permissionGroup?: string[];
    singlePermission?: string[];
  }
}
