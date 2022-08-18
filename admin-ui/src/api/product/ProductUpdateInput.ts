import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  attributeid?: AttributeWhereUniqueInput | null;
  brandid?: BrandWhereUniqueInput | null;
  carts?: CartUpdateManyWithoutProductsInput;
  categoryid?: InputJsonValue;
  image?: string;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number;
  productname?: string;
  sku?: string | null;
};
