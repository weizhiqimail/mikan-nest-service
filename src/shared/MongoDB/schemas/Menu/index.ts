import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { MenuSchemaConfig } from '@/shared/MongoDB/schemas/Menu/config';
import MenuModel, { MenuSchema } from '@/shared/MongoDB/schemas/Menu/schema';

const MenuSchemaItem: ISchemaItem = {
  config: MenuSchemaConfig,
  schema: MenuSchema,
  model: MenuModel,
};

export default MenuSchemaItem;
