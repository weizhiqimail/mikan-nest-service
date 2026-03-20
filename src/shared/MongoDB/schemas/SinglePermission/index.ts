import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { SinglePermissionSchemaConfig } from '@/shared/mongodb/schemas/SinglePermission/config';
import SinglePermissionModel, {
  SinglePermissionSchema,
} from '@/shared/mongodb/schemas/SinglePermission/schema';

const SinglePermissionSchemaItem: ISchemaItem = {
  config: SinglePermissionSchemaConfig,
  schema: SinglePermissionSchema,
  model: SinglePermissionModel,
};

export default SinglePermissionSchemaItem;
