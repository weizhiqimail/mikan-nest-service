import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

// 数据存储结构
export class FoundationDataStorageDto {
  @ApiProperty({ name: 'mainKey', description: '一级业务模块key' })
  @IsString({ message: '一级业务模块key不正确' })
  mainKey: string;

  @ApiProperty({ name: 'subKey', description: '二级业务模块key' })
  @IsString({ message: '二级业务模块key不正确' })
  subKey: string;

  @ApiProperty({ name: 'text', description: '存储正文' })
  @IsString({ message: '正文必须是字符串' })
  text: string;
}

// 查询存储结构
export class FoundationDataQueryDto {
  @ApiProperty({ name: 'mainKey', description: '一级业务模块key' })
  @IsString({ message: '一级业务模块key不正确' })
  mainKey: string;

  @ApiProperty({ name: 'subKey', description: '二级业务模块key' })
  @IsString({ message: '二级业务模块key不正确' })
  subKey: string;
}
