import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { UserPermissionSchemaConfig } from '@/shared/mongodb/schemas/UserPermission/config';
import UserPermissionModel, {
  UserPermissionSchema,
} from '@/shared/mongodb/schemas/UserPermission/schema';

const UserPermissionSchemaItem: ISchemaItem = {
  config: UserPermissionSchemaConfig,
  schema: UserPermissionSchema,
  model: UserPermissionModel,
};

export default UserPermissionSchemaItem;
