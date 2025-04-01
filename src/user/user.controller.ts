import { UserService } from './user.service';
import { Controller, Delete, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getList(): any {
    return this.userService.getList();
  }

  @Delete(':id')
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
