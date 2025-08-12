import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { TaskSchemaConfig } from '@/shared/MongoDB/schemas/Task/config';
import TaskModel, { TaskSchema } from '@/shared/MongoDB/schemas/Task/schema';

const TaskSchemaItem: ISchemaItem = {
  config: TaskSchemaConfig,
  schema: TaskSchema,
  model: TaskModel,
};

export default TaskSchemaItem;
