import { ProductUpdateManyWithoutCartsInput } from "./ProductUpdateManyWithoutCartsInput";

export type CartUpdateInput = {
  productid?: ProductUpdateManyWithoutCartsInput;
  productprice?: number | null;
  quantity?: number | null;
  userid?: number | null;
};
