import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoundationDataStorageDto } from '@/modules/foundation/dtos/foundation.dto';
import { FoundationService } from '@/shared/shared_common/services/foundation.service';

@Controller('controllers')
export class FoundationController {
  constructor(private readonly foundationService: FoundationService) {}

  @Post('/data/storage')
  postDataStorage(@Body() bodyDto: FoundationDataStorageDto) {
    return this.foundationService.postDataStorage(bodyDto);
  }

  @Get('/data/get')
  getDataStorage(@Body() bodyDto: FoundationDataStorageDto) {
    return this.foundationService.getDataStorage(bodyDto);
  }
}
