import { NestExpressApplication } from '@nestjs/platform-express';
import { useSwagger } from './swagger';

export function useMiddlewares(app: NestExpressApplication) {
  useSwagger(app);
}
