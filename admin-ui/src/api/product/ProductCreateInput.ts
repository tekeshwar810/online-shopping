import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  brandid?: BrandWhereUniqueInput | null;
  carts?: CartCreateNestedManyWithoutProductsInput;
  categoryid: InputJsonValue;
  image: string;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  price: number;
  productname: string;
  sku?: string | null;
};
