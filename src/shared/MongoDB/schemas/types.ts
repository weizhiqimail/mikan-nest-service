export interface ISchemaConfig {
  moduleName: string;
  formatFn: (ret: Record<any, any>) => Record<any, any>;
}

export interface ISchemaExport {}
