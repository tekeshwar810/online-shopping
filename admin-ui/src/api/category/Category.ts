import { Product } from "../product/Product";

export type Category = {
  categoryname: string | null;
  createdAt: Date;
  id: string;
  parentid: number | null;
  products?: Array<Product>;
  updatedAt: Date;
};
