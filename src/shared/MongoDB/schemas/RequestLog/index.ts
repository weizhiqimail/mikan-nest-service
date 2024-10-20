import { Schema, model } from 'mongoose';
import {
  ILogLevelEnum,
  RequestLogModelTypes,
} from '@/shared/MongoDB/schemas/RequestLog/types';
import {
  formatRequestLogModelData,
  RequestLogSchemaConfig,
} from '@/shared/MongoDB/schemas/RequestLog/config';

export const RequestLogSchema = new Schema<RequestLogModelTypes.Model>({
  requestId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }, // 默认是当前时间
  level: { type: String, default: ILogLevelEnum.INFO },
  headers: { type: String, required: false },
  query: { type: String, required: false },
  body: { type: String, required: false },
  params: { type: String, required: false },
  responseData: { type: String, required: false },
  method: { type: String, required: false },
  url: { type: String, required: false },
  statusCode: { type: Number, required: false },
  ip: { type: String, required: false },
  userAgent: { type: String, required: false },
  stack: { type: String, required: false },
  duration: { type: Number, required: false },
  additionalInfo: { type: Schema.Types.Mixed, required: false },
});

RequestLogSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatRequestLogModelData(ret);
  },
});
RequestLogSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatRequestLogModelData(ret);
  },
});

const RequestLogModel = model<RequestLogModelTypes.Model>(
  RequestLogSchemaConfig.moduleName,
  RequestLogSchema,
);

export default RequestLogModel;
