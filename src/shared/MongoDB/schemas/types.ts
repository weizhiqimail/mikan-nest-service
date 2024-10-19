export interface ISchemaConfig {
  moduleName: string;
  formatFn: (ret: Record<any, any>) => Record<any, any>;
}
