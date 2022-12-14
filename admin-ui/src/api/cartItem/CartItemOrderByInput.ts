import { SortOrder } from "../../util/SortOrder";

export type CartItemOrderByInput = {
  cartidId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productidId?: SortOrder;
  productprice?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  userid?: SortOrder;
};
