import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  categoryname?: StringNullableFilter;
  id?: StringFilter;
  parentid?: IntNullableFilter;
  products?: ProductListRelationFilter;
};
