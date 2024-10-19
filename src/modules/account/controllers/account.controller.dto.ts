import { IsEmail, IsString } from 'class-validator';

// 通过邮箱登录
export class AccountLoginDto {
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;

  @IsString({ message: '密码必须是字符串' })
  password: string;
}
