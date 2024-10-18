import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericDaoService } from '@/shared/mongoose-dao/services/generic-dao.service';
import { UserDocument } from '@/mongodb/schema/user/user.schema';

@Injectable()
export class UserSchemaService extends GenericDaoService<UserDocument> {
  constructor(
    @InjectModel(UserDocument.name)
    private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
