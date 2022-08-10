import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderidId?: SortOrder;
  productidId?: SortOrder;
  productprice?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
