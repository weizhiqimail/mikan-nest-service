import { ISchemaItem } from '@/shared/mongodb/schemas/types';
import { AccountSchemaConfig } from '@/shared/mongodb/schemas/Account/config';
import AccountModel, {
  AccountSchema,
} from '@/shared/mongodb/schemas/Account/schema';

const AccountSchemaItem: ISchemaItem = {
  config: AccountSchemaConfig,
  schema: AccountSchema,
  model: AccountModel,
};

export default AccountSchemaItem;
