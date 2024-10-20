import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { QueryRequestLogList } from '@/modules/sys/request-log/controllers/request-log.controller.dto';
import { RequestLogService } from '@/modules/sys/request-log/services/request-log.service';

@ApiTags('系统模块：请求日志')
@Controller('/api/v1/sys/request-log')
export class RequestLogController {
  constructor(private readonly requestLogService: RequestLogService) {}

  @ApiOperation({ summary: '查询日志列表' })
  @Post('/list')
  async queryRequestLogList(@Body() dto: QueryRequestLogList) {
    return this.requestLogService.queryRequestLogList(dto);
  }
}
