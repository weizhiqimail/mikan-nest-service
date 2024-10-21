
export enum IconType {
  AntdOutlined = 'AntdOutlined',
  AntdFilled = 'AntdFilled',
  AntdTwoTone = 'AntdTwoTone',
  CustomIconfont = 'CustomIconfont',
}

export enum IconStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export declare namespace IconModelTypes {
  interface Model {
    name: string;
    code: string;
    type: IconType;
    status: IconStatus;
    remark: string;
  }
}
