import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type BrandWhereInput = {
  brandname?: StringFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
