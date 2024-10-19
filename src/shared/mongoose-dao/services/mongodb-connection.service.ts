import { Injectable, LoggerService } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class MongodbConnectionService {
  constructor(
    private readonly logger: LoggerService,
    @InjectConnection() private readonly connection: Connection,
  ) {
    this.logger.log('onModuleInit', 'MongooseConnectionService');
    this.setupMongooseEventListeners();
  }

  setupMongooseEventListeners() {
    this.connection.on('connecting', () => {
      this.logger.log('Mongoose connecting.', 'Mongoose');
    });

    this.connection.on('connected', () => {
      this.logger.log('Mongoose connection established.', 'Mongoose');
    });

    this.connection.on('error', (err) => {
      this.logger.error(`Mongoose connection error: ${err}`, 'Mongoose');
    });

    this.connection.on('disconnected', () => {
      this.logger.warn('Mongoose connection disconnected.', 'Mongoose');
    });

    this.connection.on('reconnected', () => {
      this.logger.log('Mongoose connection reestablished.', 'Mongoose');
    });

    this.connection.on('close', () => {
      this.logger.log('Mongoose connection closed.', 'Mongoose');
    });
  }
}
