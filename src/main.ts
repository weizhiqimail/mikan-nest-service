import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { useMiddlewares } from './middlewares';
import { LoggerService } from './shared/common-shared/services/logger.service';

async function bootstrap() {
  return new Promise(async (resolve, reject) => {
    const logger = new LoggerService();
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      logger,
    });

    app.enableCors();

    useMiddlewares(app);

    const PORT = 13000;
    await app.listen(PORT);

    const localHostIndexURL = `http://localhost:${PORT}`;
    logger.log(`server is running at ${localHostIndexURL}`, 'main.ts');
    logger.log(
      `api docs is running at ${localHostIndexURL}/api-docs`,
      'main.ts',
    );
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
