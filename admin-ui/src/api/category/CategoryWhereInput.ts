import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  categoryname?: StringNullableFilter;
  id?: StringFilter;
  parentid?: StringNullableFilter;
};
