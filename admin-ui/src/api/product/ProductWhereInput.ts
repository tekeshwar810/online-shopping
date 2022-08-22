import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  attributeId?: AttributeWhereUniqueInput;
  brandid?: BrandWhereUniqueInput;
  carts?: CartItemListRelationFilter;
  categoryid?: JsonFilter;
  id?: StringFilter;
  image?: StringFilter;
  orderItems?: OrderItemListRelationFilter;
  price?: FloatFilter;
  productname?: StringFilter;
  sku?: StringNullableFilter;
};
