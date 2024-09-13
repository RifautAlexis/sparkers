import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";

export interface ColumnDefinition<T> {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<T> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<T> | null;
  sortDirections: NzTableSortOrder[];
  filterMultiple: boolean;
  width: string | null;
}
