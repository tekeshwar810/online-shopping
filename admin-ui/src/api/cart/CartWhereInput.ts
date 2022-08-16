import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CartWhereInput = {
  id?: StringFilter;
  productid?: ProductListRelationFilter;
  productprice?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  userid?: StringNullableFilter;
};
