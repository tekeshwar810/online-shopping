import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "productname";

export const ProductTitle = (record: TProduct): string => {
  return record.productname || record.id;
};
