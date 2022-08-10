import { ProductCreateNestedManyWithoutCartsInput } from "./ProductCreateNestedManyWithoutCartsInput";

export type CartCreateInput = {
  productid?: ProductCreateNestedManyWithoutCartsInput;
  productprice?: number | null;
  quantity?: number | null;
  userid?: number | null;
};
