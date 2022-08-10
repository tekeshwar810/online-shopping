import { Order } from "../order/Order";

export type User = {
  address: string | null;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
