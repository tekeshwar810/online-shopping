import { CartItemUpdateManyWithoutCartsInput } from "./CartItemUpdateManyWithoutCartsInput";

export type CartUpdateInput = {
  active?: boolean | null;
  cartitems?: CartItemUpdateManyWithoutCartsInput;
  totalItem?: number | null;
  totalprice?: number | null;
  userid?: string | null;
};
