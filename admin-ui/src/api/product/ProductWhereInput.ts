import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  brandid?: BrandWhereUniqueInput;
  carts?: CartListRelationFilter;
  categoryid?: CategoryListRelationFilter;
  id?: StringFilter;
  image?: StringFilter;
  orderItems?: OrderItemListRelationFilter;
  price?: FloatFilter;
  productname?: StringFilter;
  sku?: StringNullableFilter;
};