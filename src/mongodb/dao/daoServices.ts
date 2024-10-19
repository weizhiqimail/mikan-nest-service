import { CommonDaoService } from '@/mongodb/dao/CommonDaoService';
import ClientModel from '@/mongodb/schemas/Client';
import MenuModel from '@/mongodb/schemas/Menu';
import PermissionGroupModel from '@/mongodb/schemas/PermissionGroup';
import SinglePermissionModel from '@/mongodb/schemas/SinglePermission';
import TaskModel from '@/mongodb/schemas/Task';
import AccountModel from '@/mongodb/schemas/Account';
import UserModel from '@/mongodb/schemas/User';
import UserPermissionModel from '@/mongodb/schemas/UserPermission';

export const clientDao = new CommonDaoService(ClientModel);
export const menuDao = new CommonDaoService(MenuModel);
export const permissionGroupDao = new CommonDaoService(PermissionGroupModel);
export const singlePermissionDao = new CommonDaoService(SinglePermissionModel);
export const sysTaskDao = new CommonDaoService(TaskModel);
export const userAccountDao = new CommonDaoService(AccountModel);
export const userMemberDao = new CommonDaoService(UserModel);
export const userPermissionDao = new CommonDaoService(UserPermissionModel);
