import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartItemCreateInput = {
  cartid?: CartWhereUniqueInput | null;
  productid?: ProductWhereUniqueInput | null;
  productprice?: number | null;
  quantity?: number | null;
  userid?: string | null;
};
