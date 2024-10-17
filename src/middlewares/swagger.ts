import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function useSwagger(app: NestExpressApplication) {
  const config = new DocumentBuilder()
    .setTitle('mikan-nest-service')
    .setDescription('mikan 服务接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
}
