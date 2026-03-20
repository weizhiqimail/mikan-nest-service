import { Module } from '@nestjs/common';

import { FoundationController } from './controllers/foundation.controller';

@Module({
  controllers: [FoundationController],
})
export class FoundationModule {}
