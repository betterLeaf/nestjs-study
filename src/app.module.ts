/*
 * @Author: wsj wsj@cdtrust.com
 * @Date: 2025-03-31 16:08:26
 * @LastEditors: wsj wsj@cdtrust.com
 * @LastEditTime: 2025-03-31 16:21:58
 * @FilePath: /demo-2/src/app.module.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost', // 数据库主机
    //   port: 3306, // 数据库端口
    //   username: 'root', // 数据库用户名
    //   password: '1234abcd', // 数据库密码
    //   database: 'test-database', // 数据库名称
    //   entities: [User],
    //   synchronize: true, // 开发阶段建议设置为 true
    // }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
