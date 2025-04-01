import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getList(): any {
    return {
      code: 0,
      data: '用户列表',
      msg: '',
    };
  }
}
