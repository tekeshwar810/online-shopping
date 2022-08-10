import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttributeWhereInput = {
  attributeType?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: StringNullableFilter;
};
