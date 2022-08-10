import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryname?: string | null;
  parentid?: number | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
