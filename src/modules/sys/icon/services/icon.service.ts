import { Injectable } from '@nestjs/common';

import { DbIconModelService } from '@/shared/MongoDB/services/icon/db-icon.service';

@Injectable()
export class IconService {
  constructor(private readonly dbIconModelService: DbIconModelService) {}

  queryIconList() {
    return this.dbIconModelService.queryList();
  }
}
