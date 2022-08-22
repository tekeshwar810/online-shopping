import { Cart } from "../cart/Cart";
import { Product } from "../product/Product";

export type CartItem = {
  cartid?: Cart | null;
  createdAt: Date;
  id: string;
  productid?: Array<Product>;
  productprice: number | null;
  quantity: number | null;
  updatedAt: Date;
  userid: string | null;
};
