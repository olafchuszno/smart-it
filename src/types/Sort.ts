import { SortField } from "./SortFields";
import { SortOption } from "./SortOption";

export interface Sort {
  field: SortField,
  option: SortOption,
}
