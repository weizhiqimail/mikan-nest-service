export interface CommonDaoQueryListOptions<T = Record<any, any>> {
  queryParams: T;
  pageNum?: number;
  pageSize?: number;
  sortField?: string;
  sortType?: 1 | -1;
}
