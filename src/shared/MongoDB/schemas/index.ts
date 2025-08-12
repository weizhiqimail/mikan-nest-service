import { ISchemaItem } from '@/shared/MongoDB/schemas/types';

import AccountSchemaItem from '@/shared/MongoDB/schemas/Account';
import ClientSchemaItem from '@/shared/MongoDB/schemas/Client';
import MenuSchemaItem from '@/shared/MongoDB/schemas/Menu';
import PermissionGroupSchemaItem from '@/shared/MongoDB/schemas/PermissionGroup';
import SinglePermissionSchemaItem from '@/shared/MongoDB/schemas/SinglePermission';
import TaskSchemaItem from '@/shared/MongoDB/schemas/Task';
import UserSchemaItem from '@/shared/MongoDB/schemas/User';
import UserPermissionSchemaItem from '@/shared/MongoDB/schemas/UserPermission';
import RequestLogSchemaItem from '@/shared/MongoDB/schemas/RequestLog';
import LanguageSentenceSchemaItem from '@/shared/MongoDB/schemas/LanguageSentence';
import LanguageWordSchemaItem from '@/shared/MongoDB/schemas/LanguageWord';
import IconSchemaItem from '@/shared/MongoDB/schemas/Icon';

export const schemaList: Array<ISchemaItem> = [
  AccountSchemaItem,
  ClientSchemaItem,
  IconSchemaItem,
  MenuSchemaItem,
  PermissionGroupSchemaItem,
  SinglePermissionSchemaItem,
  TaskSchemaItem,
  UserSchemaItem,
  UserPermissionSchemaItem,
  RequestLogSchemaItem,
  LanguageSentenceSchemaItem,
  LanguageWordSchemaItem,
];
