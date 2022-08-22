import { CartItem as TCartItem } from "../api/cartItem/CartItem";

export const CARTITEM_TITLE_FIELD = "userid";

export const CartItemTitle = (record: TCartItem): string => {
  return record.userid || record.id;
};
