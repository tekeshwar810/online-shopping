import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productprice?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  userid?: SortOrder;
};
