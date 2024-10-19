import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericDaoService } from '@/shared/mongoose-dao/services/generic-dao.service';
import { UserSchemaConfig } from '@/mongodb/schemas/User/config';
import { UserModelTypes } from '@/mongodb/schemas/User/types';

@Injectable()
export class UserModelService extends GenericDaoService<UserModelTypes.Model> {
  constructor(
    @InjectModel(UserSchemaConfig.moduleName)
    private readonly userModel: Model<UserModelTypes.Model>,
  ) {
    super(userModel);
  }
}
