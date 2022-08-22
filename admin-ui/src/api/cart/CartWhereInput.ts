import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CartWhereInput = {
  active?: BooleanNullableFilter;
  cartitems?: CartItemListRelationFilter;
  id?: StringFilter;
  totalItem?: IntNullableFilter;
  totalprice?: FloatNullableFilter;
  userid?: StringNullableFilter;
};
