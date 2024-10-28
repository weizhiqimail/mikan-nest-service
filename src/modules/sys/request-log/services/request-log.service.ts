import { Injectable } from '@nestjs/common';

import { QueryRequestLogList } from '@/modules/sys/request-log/controllers/request-log.controller.dto';
import { DbRequestLogService } from '@/shared/MongoDB/services/request-log/db-request-log.service';

@Injectable()
export class RequestLogService {
  constructor(private readonly dbRequestLogService: DbRequestLogService) {}

  async queryRequestLogList(queryDto: QueryRequestLogList) {
    const queryConditions: Record<any, any> = {}; // 初始化空的查询对象

    // 字符串字段模糊查询 (使用正则表达式)
    if (queryDto.requestId) {
      queryConditions.requestId = { $regex: queryDto.requestId, $options: 'i' };
    }

    if (queryDto.url) {
      queryConditions.url = { $regex: queryDto.url, $options: 'i' };
    }

    if (queryDto.method) {
      queryConditions.method = { $regex: queryDto.method, $options: 'i' };
    }

    if (queryDto.ip) {
      queryConditions.ip = { $regex: queryDto.ip, $options: 'i' };
    }

    if (queryDto.userAgent) {
      queryConditions.userAgent = { $regex: queryDto.userAgent, $options: 'i' };
    }

    // 枚举类型精确匹配
    if (queryDto.level) {
      queryConditions.level = queryDto.level;
    }

    // 数值类型和日期类型精确匹配
    if (queryDto.statusCode) {
      queryConditions.statusCode = queryDto.statusCode;
    }

    if (queryDto.startTime) {
      // 时间大于等于开始时间
      queryConditions.timestamp = {
        ...queryConditions.timestamp,
        $gte: new Date(queryDto.startTime),
      };
    }

    if (queryDto.endTime) {
      // 时间小于等于结束时间
      queryConditions.timestamp = {
        ...queryConditions.timestamp,
        $lte: new Date(queryDto.endTime),
      };
    }

    // 持续时间（duration）的数值范围匹配
    if (queryDto.duration) {
      queryConditions.duration = queryDto.duration;
    }

    // 额外信息匹配（模糊查询）
    if (queryDto.additionalInfo) {
      queryConditions.additionalInfo = {
        $regex: queryDto.additionalInfo,
        $options: 'i',
      };
    }

    return this.dbRequestLogService.queryList({
      queryParams: queryConditions,
      pageNum: queryDto.pageNum || 1,
      pageSize: queryDto.pageSize || 20,
    });
  }
}
