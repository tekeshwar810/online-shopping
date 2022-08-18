import { Product } from "../product/Product";

export type Attribute = {
  attributeType: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
  value: string | null;
};
