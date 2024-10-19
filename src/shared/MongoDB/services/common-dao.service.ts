import { Model } from 'mongoose';

import { CommonPromiseRes } from '@/types/http';
import { daoPromisify, daoPromisifyListTotal } from '@/shared/MongoDB/utils';

export class CommonDaoService {
  constructor(private readonly model: typeof Model) {
    this.model = model;
  }

  /**
   * 通用的查询方法
   */

  async queryList(params: Record<any, any> = {}): Promise<CommonPromiseRes> {
    const { pageNum = 1, pageSize = 10, ...restQueryParams } = params;
    return daoPromisifyListTotal(
      this.model.aggregate([
        { $match: restQueryParams },
        { $sort: { updatedAt: -1 } },
        {
          $facet: {
            total: [{ $count: 'count' }],
            data: [{ $skip: (pageNum - 1) * pageSize }, { $limit: pageSize }],
          },
        },
      ]),
      { model: this.model },
    );
  }

  async queryItemByConditions(
    params: Record<any, any>,
  ): Promise<CommonPromiseRes> {
    if (Object.keys(params).length === 0) {
      return { success: false, errorMsg: '查询条件不能为空' };
    }
    return daoPromisify(this.model.findOne(params).lean(), {
      model: this.model,
    });
  }

  async queryById(id: string): Promise<CommonPromiseRes> {
    return daoPromisify(this.model.findById(id), { model: this.model });
  }

  async create(params: Record<any, any>): Promise<CommonPromiseRes> {
    return daoPromisify(this.model.create(params), { model: this.model });
  }

  async updateById(
    id: string,
    params: Record<any, any>,
  ): Promise<CommonPromiseRes> {
    delete params.id;
    return daoPromisify(this.model.updateOne({ _id: id }, { $set: params }), {
      model: this.model,
    });
  }

  async updateByIds(ids: Array<string>, params: Record<any, any>) {
    return daoPromisify(
      this.model.updateMany({ _id: { $in: ids } }, { $set: params }),
      {
        model: this.model,
      },
    );
  }

  async removeById(id: string): Promise<CommonPromiseRes> {
    return daoPromisify(this.model.updateMany({ _id: id }), {
      model: this.model,
    });
  }

  async removeByIds(ids: Array<string>): Promise<CommonPromiseRes> {
    return daoPromisify(this.model.deleteMany({ _id: { $in: ids } }), {
      model: this.model,
    });
  }
}
