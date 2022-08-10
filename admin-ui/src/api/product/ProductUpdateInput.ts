import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";
import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  brandid?: BrandWhereUniqueInput | null;
  carts?: CartUpdateManyWithoutProductsInput;
  categoryid?: CategoryUpdateManyWithoutProductsInput;
  image?: string;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number;
  productname?: string;
  sku?: string | null;
};
