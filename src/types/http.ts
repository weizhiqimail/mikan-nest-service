// 通用的异步返回类型
export interface CommonPromiseRes<T = any> {
  success: boolean;
  data?: T;
  error?: any;
  errorMsg?: string;
}

// Redis 操作返回类型
export interface RedisOperateResponse<T = any> extends CommonPromiseRes<T> {}
