import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

import { AppModule } from '@/app.module';
import { useMiddlewares } from '@/middlewares';

async function bootstrap() {
  return new Promise(async (resolve, reject) => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {});

    app.enableCors();

    useMiddlewares(app);

    const PORT = 13000;
    await app.listen(PORT);

    const serverUrl = `http://localhost:${PORT}`;
    Logger.log(`server is running at ${serverUrl}`, 'main.ts');
    Logger.log(`api docs is running at ${serverUrl}/api-docs`, 'main.ts');
    return resolve(true);
  });
}

bootstrap()
  .then(() => {
    Logger.log('服务已启动!', 'main.ts');
  })
  .catch((err) => {
    Logger.log('服务启动失败', 'main.ts');
    Logger.error(err, 'main.ts');
  });
