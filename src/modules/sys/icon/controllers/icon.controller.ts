import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { IconService } from '@/modules/sys/icon/services/icon.service';

@ApiTags('系统模块：icon')
@Controller('/api/v1/sys/icon')
export class IconController {
  
  constructor(
    private readonly iconService: IconService,
  ) {
  }

  @ApiOperation({ summary: '查询 icon 列表' })
  @Post('/list')
  async queryIconList() {
    return this.iconService.queryIconList();
  }
}
