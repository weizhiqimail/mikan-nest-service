import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { PermissionGroupSchemaConfig } from '@/shared/mongodb/schemas/PermissionGroup/config';
import PermissionGroupModel, {
  PermissionGroupSchema,
} from '@/shared/mongodb/schemas/PermissionGroup/schema';

const PermissionGroupSchemaItem: ISchemaItem = {
  config: PermissionGroupSchemaConfig,
  schema: PermissionGroupSchema,
  model: PermissionGroupModel,
};

export default PermissionGroupSchemaItem;
