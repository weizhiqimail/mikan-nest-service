import { Model, Schema } from 'mongoose';

export interface ISchemaConfig {
  moduleName: string;
  formatFn: (ret: Record<any, any>) => Record<any, any>;
}

export interface ISchemaItem<T = any> {
  config: ISchemaConfig;
  schema: Schema;
  model: Model<T>;
}
