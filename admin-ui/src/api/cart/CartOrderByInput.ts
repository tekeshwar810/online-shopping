import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  totalItem?: SortOrder;
  totalprice?: SortOrder;
  updatedAt?: SortOrder;
  userid?: SortOrder;
};
