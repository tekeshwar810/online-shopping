import { SortOrder } from "../../util/SortOrder";

export type AttributeOrderByInput = {
  attributeType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
