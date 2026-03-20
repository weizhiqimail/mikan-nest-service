import { Model } from 'mongoose';

import { CommonPromiseRes } from '@/types/http';
import { daoPromisify, daoPromisifyListTotal } from '@/shared/mongodb/utils';
import { CommonDaoQueryListOptions } from '@/shared/mongodb/services/types';
import { MongodbExecuteException } from '@/exceptions/mongodb-execute.exception';

export class CommonDaoService {
  constructor(private readonly model: typeof Model) {
    this.model = model;
  }

  /**
   * 通用的查询方法
   */

  async queryList(
    options?: CommonDaoQueryListOptions,
  ): Promise<CommonPromiseRes> {
    const {
      queryParams = {},
      pageNum = 1,
      pageSize = 20,
      sortField = '',
      sortType = -1,
    } = options || {};

    let $sort: Record<any, any> | null = null;
    if (sortField) {
      $sort = { [sortField]: sortField };
      if (sortType === 1 || sortType === -1) {
        $sort[sortType] = sortType;
      } else {
        $sort[sortType] = -1;
      }
    }

    const result = await daoPromisifyListTotal(
      this.model.aggregate(
        [
          { $match: queryParams },
          $sort ? { $sort } : null,
          {
            $facet: {
              total: [{ $count: 'count' }],
              data: [{ $skip: (pageNum - 1) * pageSize }, { $limit: pageSize }],
            },
          },
        ].filter(Boolean),
      ),
      { model: this.model },
    );
    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }

  async queryItemByConditions(
    params: Record<any, any>,
  ): Promise<CommonPromiseRes> {
    if (Object.keys(params).length === 0) {
      return { success: false, errorMsg: '查询条件不能为空' };
    }
    const result = await daoPromisify(this.model.findOne(params).lean(), {
      model: this.model,
    });
    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }

  async queryById(id: string): Promise<CommonPromiseRes> {
    const result = await daoPromisify(this.model.findById(id), {
      model: this.model,
    });
    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }

  async create(params: Record<any, any>): Promise<CommonPromiseRes> {
    const result = await daoPromisify(this.model.create(params), {
      model: this.model,
    });
    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }

  async updateById(
    id: string,
    params: Record<any, any>,
  ): Promise<CommonPromiseRes> {
    delete params.id;
    const result = await daoPromisify(
      this.model.updateOne({ _id: id }, { $set: params }),
      {
        model: this.model,
      },
    );
    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }

  async updateByIds(ids: Array<string>, params: Record<any, any>) {
    const result = await daoPromisify(
      this.model.updateMany({ _id: { $in: ids } }, { $set: params }),
      {
        model: this.model,
      },
    );
    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }

  async removeById(id: string): Promise<CommonPromiseRes> {
    const result = await daoPromisify(this.model.updateMany({ _id: id }), {
      model: this.model,
    });

    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }

  async removeByIds(ids: Array<string>): Promise<CommonPromiseRes> {
    const result = await daoPromisify(
      this.model.deleteMany({ _id: { $in: ids } }),
      {
        model: this.model,
      },
    );

    if (result.success) {
      return result;
    }
    throw new MongodbExecuteException('MongoDB 执行失败');
  }
}
