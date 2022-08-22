import { CartItem } from "../cartItem/CartItem";

export type Cart = {
  active: boolean | null;
  cartitems?: Array<CartItem>;
  createdAt: Date;
  id: string;
  totalItem: number | null;
  totalprice: number | null;
  updatedAt: Date;
  userid: string | null;
};
