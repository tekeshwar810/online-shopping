import { Attribute } from "../attribute/Attribute";
import { Brand } from "../brand/Brand";
import { Cart } from "../cart/Cart";
import { JsonValue } from "type-fest";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  attributeid?: Attribute | null;
  brandid?: Brand | null;
  carts?: Array<Cart>;
  categoryid: JsonValue;
  createdAt: Date;
  id: string;
  image: string;
  orderItems?: Array<OrderItem>;
  price: number;
  productname: string;
  sku: string | null;
  updatedAt: Date;
};
