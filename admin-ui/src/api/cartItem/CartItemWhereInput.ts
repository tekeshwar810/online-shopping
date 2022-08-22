import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CartItemWhereInput = {
  cartid?: CartWhereUniqueInput;
  id?: StringFilter;
  productid?: ProductListRelationFilter;
  productprice?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  userid?: StringNullableFilter;
};
