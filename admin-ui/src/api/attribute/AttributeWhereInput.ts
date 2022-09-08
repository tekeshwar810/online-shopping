import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type AttributeWhereInput = {
  attributeType?: StringNullableFilter;
  dummy?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  value?: StringNullableFilter;
};
