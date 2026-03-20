import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { TaskSchemaConfig } from '@/shared/mongodb/schemas/Task/config';
import TaskModel, { TaskSchema } from '@/shared/mongodb/schemas/Task/schema';

const TaskSchemaItem: ISchemaItem = {
  config: TaskSchemaConfig,
  schema: TaskSchema,
  model: TaskModel,
};

export default TaskSchemaItem;
