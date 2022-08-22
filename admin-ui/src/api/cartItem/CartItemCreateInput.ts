import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ProductCreateNestedManyWithoutCartItemsInput } from "./ProductCreateNestedManyWithoutCartItemsInput";

export type CartItemCreateInput = {
  cartid?: CartWhereUniqueInput | null;
  productid?: ProductCreateNestedManyWithoutCartItemsInput;
  productprice?: number | null;
  quantity?: number | null;
  userid?: string | null;
};
