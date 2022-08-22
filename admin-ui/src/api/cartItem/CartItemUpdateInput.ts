import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ProductUpdateManyWithoutCartItemsInput } from "./ProductUpdateManyWithoutCartItemsInput";

export type CartItemUpdateInput = {
  cartid?: CartWhereUniqueInput | null;
  productid?: ProductUpdateManyWithoutCartItemsInput;
  productprice?: number | null;
  quantity?: number | null;
  userid?: string | null;
};
