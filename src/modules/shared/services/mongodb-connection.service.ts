import { Injectable, OnModuleInit } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { LoggerService } from './logger.service';

@Injectable()
export class MongodbConnectionService implements OnModuleInit {
  constructor(
    private readonly logger: LoggerService,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  onModuleInit() {
    this.logger.log('onModuleInit', 'MongooseConnectionService');
    this.setupMongooseEventListeners();
  }

  private setupMongooseEventListeners() {
    this.connection.on('connected', () => {
      this.logger.log('Mongoose connection established.', 'mongodb-connection');
    });

    this.connection.on('error', (err) => {
      this.logger.error(
        `Mongoose connection error: ${err}`,
        'mongodb-connection',
      );
    });

    this.connection.on('disconnected', () => {
      this.logger.warn(
        'Mongoose connection disconnected.',
        'mongodb-connection',
      );
    });

    this.connection.on('reconnected', () => {
      this.logger.log(
        'Mongoose connection reestablished.',
        'mongodb-connection',
      );
    });

    this.connection.on('close', () => {
      this.logger.log('Mongoose connection closed.', 'mongodb-connection');
    });
  }
}
