import { Injectable } from '@nestjs/common';

import { FoundationDataStorageDto } from '@/modules/foundation/dtos/foundation.dto';

@Injectable()
export class FoundationService {
  postDataStorage(bodyDto: FoundationDataStorageDto) {}

  getDataStorage(bodyDto: FoundationDataStorageDto) {}
}
