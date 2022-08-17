import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brandidId?: SortOrder;
  categoryid?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  price?: SortOrder;
  productname?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
