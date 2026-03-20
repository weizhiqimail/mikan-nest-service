import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { UserSchemaConfig } from '@/shared/mongodb/schemas/User/config';
import UserModel, { UserSchema } from '@/shared/mongodb/schemas/User/schema';

const UserSchemaItem: ISchemaItem = {
  config: UserSchemaConfig,
  schema: UserSchema,
  model: UserModel,
};

export default UserSchemaItem;
