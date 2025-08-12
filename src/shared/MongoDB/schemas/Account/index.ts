import { ISchemaItem } from '@/shared/MongoDB/schemas/types';
import { AccountSchemaConfig } from '@/shared/MongoDB/schemas/Account/config';
import AccountModel, {
  AccountSchema,
} from '@/shared/MongoDB/schemas/Account/schema';

const AccountSchemaItem: ISchemaItem = {
  config: AccountSchemaConfig,
  schema: AccountSchema,
  model: AccountModel,
};

export default AccountSchemaItem;
