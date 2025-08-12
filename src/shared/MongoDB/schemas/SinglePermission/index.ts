import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { SinglePermissionSchemaConfig } from '@/shared/MongoDB/schemas/SinglePermission/config';
import SinglePermissionModel, {
  SinglePermissionSchema,
} from '@/shared/MongoDB/schemas/SinglePermission/schema';

const SinglePermissionSchemaItem: ISchemaItem = {
  config: SinglePermissionSchemaConfig,
  schema: SinglePermissionSchema,
  model: SinglePermissionModel,
};

export default SinglePermissionSchemaItem;
