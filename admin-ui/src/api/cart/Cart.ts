import { Product } from "../product/Product";

export type Cart = {
  createdAt: Date;
  id: string;
  productid?: Array<Product>;
  productprice: number | null;
  quantity: number | null;
  updatedAt: Date;
  userid: number | null;
};
