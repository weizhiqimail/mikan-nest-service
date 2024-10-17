import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { useMiddlewares } from './middlewares';

async function bootstrap() {
  return new Promise(async (resolve, reject) => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors();

    useMiddlewares(app);

    const PORT = 12000;
    await app.listen(PORT);

    const localHostIndexURL = `http://localhost:${PORT}`;
    Logger.log(`server is running at ${localHostIndexURL}`);
    Logger.log(`api docs is running at ${localHostIndexURL}/api-docs`);
    return resolve(true);
  });
}

bootstrap()
  .then(() => {
    Logger.log(`服务已启动!`);
  })
  .catch((err) => {
    Logger.log('服务启动失败');
    Logger.error(err);
  });
