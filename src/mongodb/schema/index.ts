import { UserDocument, UserSchema } from '@/mongodb/schema/user/user.schema';


export const mongooseModelList = [
  {
    name: UserDocument.name,
    schema: UserSchema,
  },
];
