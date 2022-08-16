import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  categoryname?: StringNullableFilter;
  id?: StringFilter;
  parentid?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
