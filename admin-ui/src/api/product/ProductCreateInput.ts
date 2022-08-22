import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartItemCreateNestedManyWithoutProductsInput } from "./CartItemCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  attributeId?: AttributeWhereUniqueInput | null;
  brandid?: BrandWhereUniqueInput | null;
  carts?: CartItemCreateNestedManyWithoutProductsInput;
  categoryid: InputJsonValue;
  image: string;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  price: number;
  productname: string;
  sku?: string | null;
};
