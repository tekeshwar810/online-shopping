import { Product } from "../product/Product";

export type Brand = {
  brandname: string;
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
