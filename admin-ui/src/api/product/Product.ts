import { Brand } from "../brand/Brand";
import { Cart } from "../cart/Cart";
import { Category } from "../category/Category";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  brandid?: Brand | null;
  carts?: Array<Cart>;
  categoryid?: Array<Category>;
  createdAt: Date;
  id: string;
  image: string;
  orderItems?: Array<OrderItem>;
  price: number;
  productname: string;
  sku: string | null;
  updatedAt: Date;
};
