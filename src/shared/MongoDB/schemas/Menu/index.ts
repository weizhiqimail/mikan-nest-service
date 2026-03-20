import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { MenuSchemaConfig } from '@/shared/mongodb/schemas/Menu/config';
import MenuModel, { MenuSchema } from '@/shared/mongodb/schemas/Menu/schema';

const MenuSchemaItem: ISchemaItem = {
  config: MenuSchemaConfig,
  schema: MenuSchema,
  model: MenuModel,
};

export default MenuSchemaItem;
