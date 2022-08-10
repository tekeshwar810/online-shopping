import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemUpdateInput = {
  orderid?: OrderWhereUniqueInput | null;
  productid?: ProductWhereUniqueInput | null;
  productprice?: number | null;
  quantity?: number | null;
};
