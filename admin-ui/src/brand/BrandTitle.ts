import { Brand as TBrand } from "../api/brand/Brand";

export const BRAND_TITLE_FIELD = "brandname";

export const BrandTitle = (record: TBrand): string => {
  return record.brandname || record.id;
};
