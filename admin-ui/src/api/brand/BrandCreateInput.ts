import { ProductCreateNestedManyWithoutBrandsInput } from "./ProductCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  brandname: string;
  products?: ProductCreateNestedManyWithoutBrandsInput;
};
