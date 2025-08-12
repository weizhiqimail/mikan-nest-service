import { Model } from 'mongoose';
import { transformListToMap } from 'mikan-utils';

import { CommonPromiseRes } from '@/types/http';
import { ISchemaConfig } from '@/shared/MongoDB/schemas/types';
import { schemaList } from '@/shared/MongoDB/schemas';

interface DaoPromisifyOptions {
  model: typeof Model;
}

// promise 统一 DB 单一查询的结果
export function daoPromisify<T>(
  promise: Promise<T>,
  options: DaoPromisifyOptions,
): Promise<CommonPromiseRes> {
  const model = options.model;
  const modelName = model.modelName;
  return new Promise((resolve) => {
    return promise
      .then((result: any) => {
        if (Array.isArray(result)) {
          return resolve({
            success: true,
            data: result.filter(Boolean).map((item) => {
              return formatModelItemData(item, modelName);
            }),
          });
        }

        return resolve({
          success: true,
          data: result ? formatModelItemData(result, modelName) : null,
        });
      })
      .catch((error) => {
        console.log('error', error);
        return resolve({ success: false, error });
      });
  });
}

// promise 统一 DB 查询列表和总数的结果
export function daoPromisifyListTotal(
  promise: Promise<any>,
  options: DaoPromisifyOptions,
): Promise<CommonPromiseRes> {
  return new Promise((resolve) => {
    return promise
      .then((resultList: any) => {
        const result: any = resultList[0] || {};
        const totalInfo: any = result?.total[0] || {};
        const total = totalInfo?.count || 0;
        const list = (result.data || [])
          .filter(Boolean)
          .map((item) => formatModelItemData(item, options.model.modelName));
        return resolve({
          success: true,
          data: { list, total },
        });
      })
      .catch((error) => {
        console.log('error', error);
        return resolve({ success: false, error });
      });
  });
}

function formatModelItemData(ret: Record<any, any>, modelName: string) {
  const schemaConfigList = schemaList.map((item) => item.config);
  const schemaConfigMap = transformListToMap(schemaConfigList, 'moduleName');
  const schemaConfig: ISchemaConfig = schemaConfigMap[modelName];

  if (schemaConfig) {
    return schemaConfig.formatFn(ret);
  }
  return ret;
}
