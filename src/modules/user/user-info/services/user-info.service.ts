import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserDocument } from '@/mongodb/schema/user/user.schema';
import { UserModelTypes } from '@/mongodb/schema/user/types';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserDocument.name)
    private userModel: Model<UserModelTypes.Model>,
  ) {}
}
