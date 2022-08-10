import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brandidId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  price?: SortOrder;
  productname?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
