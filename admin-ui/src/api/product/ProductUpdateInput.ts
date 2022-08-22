import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartItemUpdateManyWithoutProductsInput } from "./CartItemUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  attributeId?: AttributeWhereUniqueInput | null;
  brandid?: BrandWhereUniqueInput | null;
  carts?: CartItemUpdateManyWithoutProductsInput;
  categoryid?: InputJsonValue;
  image?: string;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number;
  productname?: string;
  sku?: string | null;
};
