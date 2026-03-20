import { Schema, model } from 'mongoose';

import {
  ISysTaskStatus,
  TaskModelTypes,
} from '@/shared/mongodb/schemas/Task/types';
import {
  formatTaskModelData,
  TaskSchemaConfig,
} from '@/shared/mongodb/schemas/Task/config';
import { UserSchemaConfig } from '@/shared/mongodb/schemas/User/config';

export const TaskSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    type: { type: String, required: true },
    status: { type: String, default: ISysTaskStatus.INIT },
    priority: { type: Number, default: 1 },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: UserSchemaConfig.moduleName,
      required: true,
    },
    failReason: { type: String, default: '' },
    inputData: { type: Schema.Types.Mixed, default: {} },
    executeResult: { type: Schema.Types.Mixed, default: {} },
    statusHistory: [
      {
        status: String,
        time: { type: Date, default: Date.now },
        operatorId: {
          type: Schema.Types.ObjectId,
          ref: UserSchemaConfig.moduleName,
          required: false,
        },
      },
    ],
    remark: { type: String, default: '' },
  },
  { timestamps: true },
);

TaskSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatTaskModelData(ret);
  },
});
TaskSchema.set('toObject', {
  virtuals: true,
  transform: function (doc, ret) {
    return formatTaskModelData(ret);
  },
});

const TaskModel = model<TaskModelTypes.Model>(
  TaskSchemaConfig.moduleName,
  TaskSchema,
);

export default TaskModel;
