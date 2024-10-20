import { IsEmail, IsString } from 'class-validator';
import IsMatchValidator from '@/validators/is-match.validator';
import { ApiProperty } from '@nestjs/swagger';

// 通过邮箱登录
export class AccountLoginDto {
  @ApiProperty({ name: 'email', description: '邮箱' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;
  
  @ApiProperty({ name: 'password', description: '密码' })
  @IsString({ message: '密码必须是字符串' })
  password: string;
}

// 重置密码
export class AccountResetPasswordDto {
  @ApiProperty({ name: 'email', description: '邮箱' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;
  
  @ApiProperty({ name: 'password1', description: '密码' })
  @IsString({ message: '密码必须是字符串' })
  password1: string;
  
  @ApiProperty({ name: 'password2', description: '重复密码' })
  @IsMatchValidator('password1', { message: '两次输入的密码不一致' })
  @IsString({ message: '密码必须是字符串' })
  password2: string;
}
