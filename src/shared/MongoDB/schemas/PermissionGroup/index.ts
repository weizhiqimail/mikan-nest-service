import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { PermissionGroupSchemaConfig } from '@/shared/MongoDB/schemas/PermissionGroup/config';
import PermissionGroupModel, {
  PermissionGroupSchema,
} from '@/shared/MongoDB/schemas/PermissionGroup/schema';

const PermissionGroupSchemaItem: ISchemaItem = {
  config: PermissionGroupSchemaConfig,
  schema: PermissionGroupSchema,
  model: PermissionGroupModel,
};

export default PermissionGroupSchemaItem;
