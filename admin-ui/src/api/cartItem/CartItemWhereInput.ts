import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CartItemWhereInput = {
  cartid?: CartWhereUniqueInput;
  id?: StringFilter;
  productid?: ProductWhereUniqueInput;
  productprice?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  userid?: StringNullableFilter;
};
