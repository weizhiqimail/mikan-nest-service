import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { UserPermissionSchemaConfig } from '@/shared/MongoDB/schemas/UserPermission/config';
import UserPermissionModel, {
  UserPermissionSchema,
} from '@/shared/MongoDB/schemas/UserPermission/schema';

const UserPermissionSchemaItem: ISchemaItem = {
  config: UserPermissionSchemaConfig,
  schema: UserPermissionSchema,
  model: UserPermissionModel,
};

export default UserPermissionSchemaItem;
