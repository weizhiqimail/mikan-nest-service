import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { UserSchemaConfig } from '@/shared/MongoDB/schemas/User/config';
import UserModel, { UserSchema } from '@/shared/MongoDB/schemas/User/schema';

const UserSchemaItem: ISchemaItem = {
  config: UserSchemaConfig,
  schema: UserSchema,
  model: UserModel,
};

export default UserSchemaItem;
