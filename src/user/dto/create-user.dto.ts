import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 20, { message: '用户名长度必须在4到20之间' })
  name: string;

  @IsString({ message: '密码必须是字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;

  @IsInt({ message: '年龄必须是整数' })
  // @Min(0, { message: '年龄必须大于等于0' })
  // @Max(150, { message: '年龄必须小于等于150' })
  age: number;
}
