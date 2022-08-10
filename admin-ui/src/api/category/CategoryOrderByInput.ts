import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  categoryname?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  parentid?: SortOrder;
  updatedAt?: SortOrder;
};
