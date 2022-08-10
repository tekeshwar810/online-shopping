import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";
import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  brandid?: BrandWhereUniqueInput | null;
  carts?: CartCreateNestedManyWithoutProductsInput;
  categoryid?: CategoryCreateNestedManyWithoutProductsInput;
  image: string;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  price: number;
  productname: string;
  sku?: string | null;
};
