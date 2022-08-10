import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  createdAt: Date;
  id: string;
  orderid?: Order | null;
  productid?: Product | null;
  productprice: number | null;
  quantity: number | null;
  updatedAt: Date;
};
