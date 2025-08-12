import { Schema, model } from 'mongoose';
import {
  ILogLevelEnum,
  RequestLogModelTypes,
} from '@/shared/MongoDB/schemas/RequestLog/types';
import {
  formatRequestLogModelData,
  RequestLogSchemaConfig,
} from '@/shared/MongoDB/schemas/RequestLog/config';

export const RequestLogSchema = new Schema<RequestLogModelTypes.Model>(
  {
    requestId: { type: String, required: true },
    level: { type: String, default: ILogLevelEnum.INFO },
    headers: { type: Schema.Types.Mixed, required: false },
    query: { type: Schema.Types.Mixed, required: false },
    body: { type: Schema.Types.Mixed, required: false },
    params: { type: Schema.Types.Mixed, required: false },
    responseData: { type: Schema.Types.Mixed, required: false },
    method: { type: String, required: false },
    url: { type: String, required: false },
    statusCode: { type: Number, required: false },
    ip: { type: String, required: false },
    userAgent: { type: String, required: false },
    stack: { type: String, required: false },
    duration: { type: Number, required: false },
    additionalInfo: { type: Schema.Types.Mixed, required: false },
  },
  { timestamps: true },
);

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
