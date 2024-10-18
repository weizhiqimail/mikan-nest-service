import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Document } from 'mongoose';

@Injectable()
export class GenericDaoService<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async queryList(): Promise<T[]> {
    return this.model.find().exec();
  }

  async queryItem(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async create(createDto: Partial<T>): Promise<T> {
    const createdItem = new this.model(createDto);
    return createdItem.save();
  }

  async updateById(id: string, updateDto: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async removeById(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id);
  }
}
