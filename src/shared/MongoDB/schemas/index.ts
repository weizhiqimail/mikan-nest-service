import { Schema, Model } from 'mongoose';

import { ISchemaConfig } from '@/shared/MongoDB/schemas/types';

import { AccountSchemaConfig } from '@/shared/MongoDB/schemas/Account/config';
import AccountModel, { AccountSchema } from '@/shared/MongoDB/schemas/Account';

import { ClientSchemaConfig } from '@/shared/MongoDB/schemas/Client/config';
import ClientModel, { ClientSchema } from '@/shared/MongoDB/schemas/Client';

import { MenuSchemaConfig } from '@/shared/MongoDB/schemas/Menu/config';
import MenuModel, { MenuSchema } from '@/shared/MongoDB/schemas/Menu';

import { PermissionGroupSchemaConfig } from '@/shared/MongoDB/schemas/PermissionGroup/config';
import PermissionGroupModel, {
  PermissionGroupSchema,
} from '@/shared/MongoDB/schemas/PermissionGroup';

import { SinglePermissionSchemaConfig } from '@/shared/MongoDB/schemas/SinglePermission/config';
import SinglePermissionModel, {
  SinglePermissionSchema,
} from '@/shared/MongoDB/schemas/SinglePermission';

import { TaskSchemaConfig } from '@/shared/MongoDB/schemas/Task/config';
import TaskModel, { TaskSchema } from '@/shared/MongoDB/schemas/Task';

import { UserSchemaConfig } from '@/shared/MongoDB/schemas/User/config';
import UserModel, { UserSchema } from '@/shared/MongoDB/schemas/User';

import { UserPermissionSchemaConfig } from '@/shared/MongoDB/schemas/UserPermission/config';
import UserPermissionModel, {
  UserPermissionSchema,
} from '@/shared/MongoDB/schemas/UserPermission';

import { RequestLogSchemaConfig } from '@/shared/MongoDB/schemas/RequestLog/config';
import RequestLogModel, {
  RequestLogSchema,
} from '@/shared/MongoDB/schemas/RequestLog';

import LanguageSentenceModel, {
  LanguageSentenceSchema,
} from '@/shared/MongoDB/schemas/LanguageSentence';
import { LanguageSentenceSchemaConfig } from '@/shared/MongoDB/schemas/LanguageSentence/config';

import { LanguageWordSchemaConfig } from '@/shared/MongoDB/schemas/LanguageWord/config';
import LanguageWordModel, {
  LanguageWordSchema,
} from '@/shared/MongoDB/schemas/LanguageWord';

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
  {
    config: RequestLogSchemaConfig,
    schema: RequestLogSchema,
    model: RequestLogModel,
  },
  {
    config: LanguageSentenceSchemaConfig,
    schema: LanguageSentenceSchema,
    model: LanguageSentenceModel,
  },
  {
    config: LanguageWordSchemaConfig,
    schema: LanguageWordSchema,
    model: LanguageWordModel,
  },
];
