import {
  IsEmail,
  Length,
  IsString,
  IsOptional,
  IsEnum,
  IsMongoId,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IUserGenderEnum,
  IUserStatusEnum,
} from '@/shared/MongoDB/schemas/User/types';

export class QueryUserInfoListDto {
  @ApiPropertyOptional({ name: 'nickName', description: '昵称' })
  @IsString({ message: '昵称必须是字符串' })
  @IsOptional()
  nickname?: string;

  @ApiPropertyOptional({ name: 'email', description: '邮箱' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ name: 'phone', description: '手机号' })
  @IsString({ message: '手机号必须是字符串' })
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ name: 'status', description: '用户状态' })
  @IsEnum(IUserStatusEnum, { message: '用户状态不正确' })
  @IsOptional()
  status?: IUserStatusEnum;

  @ApiPropertyOptional({
    enum: IUserGenderEnum,
    name: 'gender',
    description: '性别',
  })
  @IsEnum(IUserGenderEnum, { message: '性别不正确' })
  @IsOptional()
  gender?: IUserGenderEnum;

  @ApiPropertyOptional({ name: 'pageNum', description: '页码' })
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  pageNum?: number = 1;

  @ApiPropertyOptional({ name: 'pageSize', description: '每页数量' })
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  pageSize?: number = 20;
}

export class QueryUserInfoItemByIdDto {
  @ApiProperty({ name: 'id', description: '用户id' })
  @IsMongoId({ message: 'id格式不正确' })
  id: string;
}

export class CreateUserInfoDto {
  @ApiProperty({ name: 'nickName', description: '昵称' })
  @IsString({ message: '昵称必须是字符串' })
  @Length(6, 20, { message: '昵称长度必须在6-20之间' })
  nickname: string;

  @ApiProperty({ name: 'email', description: '邮箱' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;

  @ApiProperty({ name: 'password', description: '密码' })
  @IsString({ message: '密码必须是字符串' })
  @Length(10, 100, { message: '昵称长度必须在10-100之间' })
  password: string;

  @ApiProperty({ name: 'phone', description: '手机号' })
  @IsString({ message: '手机号必须是字符串' })
  @IsOptional()
  phone: string;

  @ApiProperty({ name: 'gender', description: '性别' })
  @IsEnum(IUserGenderEnum, { message: '性别不正确' })
  @IsOptional()
  gender: IUserGenderEnum;
}

export class UpdateUserInfoDto {
  @ApiProperty({ name: 'id', description: '用户id' })
  @IsMongoId({ message: 'id格式不正确' })
  id: string;

  @ApiProperty({ name: 'nickName', description: '昵称' })
  @IsString({ message: '昵称必须是字符串' })
  @Length(6, 20, { message: '昵称长度必须在6-20之间' })
  @IsOptional()
  nickname?: string;

  @ApiProperty({ name: 'email', description: '邮箱' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  @IsOptional()
  email?: string;

  @ApiProperty({ name: 'phone', description: '手机号' })
  @IsString({ message: '手机号必须是字符串' })
  @IsOptional()
  phone?: string;

  @ApiProperty({ name: 'gender', description: '性别' })
  @IsEnum(IUserGenderEnum, { message: '性别不正确' })
  @IsOptional()
  gender?: IUserGenderEnum;
}
