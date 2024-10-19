import { Injectable } from '@nestjs/common';
import { UserModelService } from '@/shared/mongoose-dao/services/user-model.service';

@Injectable()
export class UserInfoService {
  constructor(private readonly userModelService: UserModelService) {}

  async queryList() {
    return this.userModelService.queryList();
  }
}
