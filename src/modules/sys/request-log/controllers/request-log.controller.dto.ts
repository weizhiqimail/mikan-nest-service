import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsEnum,
  IsNumber,
  IsDateString,
  IsInt,
} from 'class-validator';
import { Transform } from 'class-transformer';

import { ILogLevelEnum } from '@/shared/MongoDB/schemas/RequestLog/types';

export class QueryRequestLogList {
  @ApiPropertyOptional({
    description: '日志请求的唯一ID',
    example: 'abc123',
  })
  @IsOptional()
  @IsString()
  requestId?: string;

  @ApiPropertyOptional({
    description: '日志的级别，例如：INFO, ERROR',
    enum: ILogLevelEnum,
    example: ILogLevelEnum.INFO,
  })
  @IsOptional()
  @IsEnum(ILogLevelEnum, {
    message: '日志级别必须是 INFO, ERROR 等枚举值之一',
  })
  level?: ILogLevelEnum;

  @ApiPropertyOptional({
    description: '请求的URL',
    example: '/api/v1/users',
  })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiPropertyOptional({
    description: '请求的方法，例如：GET, POST',
    example: 'GET',
  })
  @IsOptional()
  @IsString()
  method?: string;

  @ApiPropertyOptional({
    description: '请求的状态码',
    example: 200,
  })
  @IsOptional()
  @IsInt()
  statusCode?: number;

  @ApiPropertyOptional({
    description: '客户端的IP地址',
    example: '192.168.1.1',
  })
  @IsOptional()
  @IsString()
  ip?: string;

  @ApiPropertyOptional({
    description: '用户代理字符串',
    example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  })
  @IsOptional()
  @IsString()
  userAgent?: string;

  @ApiPropertyOptional({
    description: '日志记录的开始时间，ISO格式',
    example: '2023-10-20T12:00:00Z',
  })
  @IsOptional()
  @IsDateString({}, { message: '开始时间必须是有效的 ISO 格式日期字符串' })
  startTime?: string;

  @ApiPropertyOptional({
    description: '日志记录的结束时间，ISO格式',
    example: '2023-10-20T12:59:59Z',
  })
  @IsOptional()
  @IsDateString({}, { message: '结束时间必须是有效的 ISO 格式日期字符串' })
  endTime?: string;

  @ApiPropertyOptional({
    description: '日志记录的持续时间，单位为毫秒',
    example: 300,
  })
  @IsOptional()
  @IsNumber()
  duration?: number;

  @ApiPropertyOptional({
    description: '额外的附加信息',
  })
  @IsOptional()
  @IsString()
  additionalInfo?: string;

  @ApiPropertyOptional({ name: 'pageNum', description: '页码' })
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  pageNum?: number = 1;

  @ApiPropertyOptional({ name: 'pageSize', description: '每页数量' })
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  pageSize?: number = 20;

  @ApiPropertyOptional({ name: 'sortField', description: '排序字段' })
  @IsOptional()
  sortField?: string;

  @ApiPropertyOptional({
    name: 'sortType',
    description: '排序方式，正序or倒序',
  })
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  sortType?: 1 | -1 = -1;
}
