import { Product } from "../product/Product";

export type Attribute = {
  attributeType: string | null;
  createdAt: Date;
  dummy: number | null;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
  value: string | null;
};
