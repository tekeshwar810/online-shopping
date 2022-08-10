import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  brandname?: string;
  products?: ProductUpdateManyWithoutBrandsInput;
};
