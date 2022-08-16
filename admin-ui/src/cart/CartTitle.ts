import { Cart as TCart } from "../api/cart/Cart";

export const CART_TITLE_FIELD = "userid";

export const CartTitle = (record: TCart): string => {
  return record.userid || record.id;
};
