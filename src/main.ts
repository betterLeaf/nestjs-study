import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (errors) => {
        const firstError = errors[0];
        const message = firstError.constraints
          ? Object.values(firstError.constraints)[0]
          : 'Validation failed';
        return new BadRequestException(message);
      },
      // forbidNonWhitelisted: true,
    }),
  );
  // Swagger 配置
  const config = new DocumentBuilder()
    .setTitle('API 文档')
    .setDescription('接口描述')
    .setVersion('1.0')
    .addTag('用户管理')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // 访问路径为 /api-docs

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
