import { Attribute } from "../attribute/Attribute";
import { Brand } from "../brand/Brand";
import { CartItem } from "../cartItem/CartItem";
import { JsonValue } from "type-fest";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  attributeId?: Attribute | null;
  brandid?: Brand | null;
  carts?: Array<CartItem>;
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
