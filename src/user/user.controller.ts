import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @ApiOperation({ summary: '获取用户列表' })
  @ApiResponse({ status: 200, description: '返回用户列表' })
  getList(): any {
    return this.userService.getList();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户详情' })
  @ApiResponse({ status: 200, description: '返回用户详情' })
  getDetail(@Param('id') id: string): any {
    return {
      code: 0,
      data: {
        id,
        name: '张三',
        age: 18,
      },
      msg: '',
    };
  }

  @ApiOperation({ summary: '创建用户' })
  @ApiResponse({ status: 201, description: '用户创建成功' })
  @Post()
  addUser(@Body() body: CreateUserDto): User {
    console.log(body);
    return {
      id: 1,
      name: body.name,
      password: body.password,
      age: body.age,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  @ApiResponse({ status: 200, description: '用户删除成功' })
  removeUser(@Param('id') id: string): any {
    return {
      code: 0,
      data: '',
      msg: id + '移除成功',
    };
  }

  @Get('/range/:num')
  getRange(@Param('num') num: number): any {
    const data: number[] = [];
    for (let i = 0; i <= num; i++) {
      data.push(i);
    }
    return {
      code: 0,
      data,
      msg: '',
    };
  }
}
