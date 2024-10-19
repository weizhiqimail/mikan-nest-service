import { Schema, Model } from 'mongoose';

import { ISchemaConfig } from '@/mongodb/schemas/types';

import { AccountSchemaConfig } from '@/mongodb/schemas/Account/config';
import AccountModel, { AccountSchema } from '@/mongodb/schemas/Account';

import { ClientSchemaConfig } from '@/mongodb/schemas/Client/config';
import ClientModel, { ClientSchema } from '@/mongodb/schemas/Client';

import { MenuSchemaConfig } from '@/mongodb/schemas/Menu/config';
import MenuModel, { MenuSchema } from '@/mongodb/schemas/Menu';

import { PermissionGroupSchemaConfig } from '@/mongodb/schemas/PermissionGroup/config';
import PermissionGroupModel, {
  PermissionGroupSchema,
} from '@/mongodb/schemas/PermissionGroup';

import { SinglePermissionSchemaConfig } from '@/mongodb/schemas/SinglePermission/config';
import SinglePermissionModel, {
  SinglePermissionSchema,
} from '@/mongodb/schemas/SinglePermission';

import { TaskSchemaConfig } from '@/mongodb/schemas/Task/config';
import TaskModel, { TaskSchema } from '@/mongodb/schemas/Task';

import { UserSchemaConfig } from '@/mongodb/schemas/User/config';
import UserModel, { UserSchema } from '@/mongodb/schemas/User';

import { UserPermissionSchemaConfig } from '@/mongodb/schemas/UserPermission/config';
import UserPermissionModel, {
  UserPermissionSchema,
} from '@/mongodb/schemas/UserPermission';

export interface ISchemaItem<T = any> {
  config: ISchemaConfig;
  schema: Schema;
  model: Model<T>;
}
export const schemaList: Array<ISchemaItem> = [
  {
    config: AccountSchemaConfig,
    schema: AccountSchema,
    model: AccountModel,
  },
  {
    config: ClientSchemaConfig,
    schema: ClientSchema,
    model: ClientModel,
  },
  {
    config: MenuSchemaConfig,
    schema: MenuSchema,
    model: MenuModel,
  },
  {
    config: PermissionGroupSchemaConfig,
    schema: PermissionGroupSchema,
    model: PermissionGroupModel,
  },
  {
    config: SinglePermissionSchemaConfig,
    schema: SinglePermissionSchema,
    model: SinglePermissionModel,
  },
  {
    config: TaskSchemaConfig,
    schema: TaskSchema,
    model: TaskModel,
  },
  {
    config: UserSchemaConfig,
    schema: UserSchema,
    model: UserModel,
  },
  {
    config: UserPermissionSchemaConfig,
    schema: UserPermissionSchema,
    model: UserPermissionModel,
  },
];
