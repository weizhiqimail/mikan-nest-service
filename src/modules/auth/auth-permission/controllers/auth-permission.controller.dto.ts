import {
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
} from 'class-validator';

import { ISinglePermissionType } from '@/shared/MongoDB/schemas/SinglePermission/types';

export class CreateSinglePermissionDto {
  @IsNotEmpty({ message: '权限名称不能为空' })
  @IsString({ message: '权限名称必须是字符串' })
  name: string;

  @IsNotEmpty({ message: '权限代码不能为空' })
  @IsString({ message: '权限代码必须是字符串' })
  code: string;

  @IsOptional()
  @IsString({ message: '描述必须是字符串' })
  description?: string;

  @IsNotEmpty({ message: '权限类型不能为空' })
  @IsEnum(ISinglePermissionType, { message: '权限类型无效' })
  type: ISinglePermissionType;

  @IsOptional()
  @IsBoolean({ message: '启用状态必须是布尔值' })
  enable?: boolean;

  @IsNotEmpty({ message: '创建者 ID 不能为空' })
  @IsMongoId({ message: '创建者 ID 必须是有效的 MongoDB ID' })
  creatorId: string;

  @IsNotEmpty({ message: '更新者 ID 不能为空' })
  @IsMongoId({ message: '更新者 ID 必须是有效的 MongoDB ID' })
  updaterId: string;

  @IsOptional()
  @IsString({ message: '备注必须是字符串' })
  remark?: string;
}

export class UpdateSinglePermissionDto extends CreateSinglePermissionDto {
  @IsNotEmpty({ message: '权限 ID 不能为空' })
  @IsMongoId({ message: '权限 ID 必须是有效的 MongoDB ID' })
  id: string;
}

export class QuerySinglePermissionItemByIdDto {
  @IsNotEmpty({ message: '权限 ID 不能为空' })
  @IsMongoId({ message: '权限 ID 必须是有效的 MongoDB ID' })
  id: string; // 要查询的权限 ID
}

export class QuerySinglePermissionListDto {
  @IsOptional()
  @IsString({ message: '权限名称必须是字符串' })
  name?: string;

  @IsOptional()
  @IsString({ message: '权限代码必须是字符串' })
  code?: string;
}

export class CreatePermissionGroupDto {
  @IsNotEmpty({ message: '权限组名称不能为空' })
  @IsString({ message: '权限组名称必须是字符串' })
  name: string;

  @IsNotEmpty({ message: '权限组代码不能为空' })
  @IsString({ message: '权限组代码必须是字符串' })
  code: string;

  @IsOptional()
  @IsString({ message: '描述必须是字符串' })
  description?: string;

  @IsNotEmpty({ message: '权限类型不能为空' })
  @IsEnum(ISinglePermissionType, { message: '权限类型无效' })
  type: ISinglePermissionType;

  @IsOptional()
  @IsBoolean({ message: '启用状态必须是布尔值' })
  enable?: boolean;

  @IsOptional()
  @IsArray({ message: '权限组必须是数组' })
  permissionGroup?: string[]; // 可以是 ObjectId 数组

  @IsOptional()
  @IsArray({ message: '单个权限必须是数组' })
  singlePermission?: string[]; // 可以是 ObjectId 数组

  @IsNotEmpty({ message: '创建者 ID 不能为空' })
  @IsMongoId({ message: '创建者 ID 必须是有效的 MongoDB ID' })
  creatorId: string;

  @IsNotEmpty({ message: '更新者 ID 不能为空' })
  @IsMongoId({ message: '更新者 ID 必须是有效的 MongoDB ID' })
  updaterId: string;

  @IsOptional()
  @IsString({ message: '备注必须是字符串' })
  remark?: string;
}

export class UpdatePermissionGroupDto extends CreatePermissionGroupDto {
  @IsNotEmpty({ message: '权限组 ID 不能为空' })
  @IsMongoId({ message: '权限组 ID 必须是有效的 MongoDB ID' })
  id: string; // 要更新的权限组 ID
}

export class QueryPermissionGroupItemByIdDto {
  @IsNotEmpty({ message: '权限组 ID 不能为空' })
  @IsMongoId({ message: '权限组 ID 必须是有效的 MongoDB ID' })
  id: string; // 要查询的权限组 ID
}

export class QueryPermissionGroupListDto {
  @IsOptional()
  @IsString({ message: '权限组名称必须是字符串' })
  name?: string;

  @IsOptional()
  @IsString({ message: '权限组代码必须是字符串' })
  code?: string;
}
