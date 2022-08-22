import { CartItemCreateNestedManyWithoutCartsInput } from "./CartItemCreateNestedManyWithoutCartsInput";

export type CartCreateInput = {
  active?: boolean | null;
  cartitems?: CartItemCreateNestedManyWithoutCartsInput;
  totalItem?: number | null;
  totalprice?: number | null;
  userid?: string | null;
};
