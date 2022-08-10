import { OrderItem } from "../orderItem/OrderItem";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderItems?: Array<OrderItem>;
  totalprice: number | null;
  updatedAt: Date;
  userid?: User | null;
};
