import { SortDirection } from "../../enums/shared/sortDirection.enum";

export type ListColumn<TKey extends string> = {
  key: TKey;
  label: string;
  sortDirection: SortDirection;
  sortable: boolean;
};
