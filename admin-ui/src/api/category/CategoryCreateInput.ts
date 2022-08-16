import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryname?: string | null;
  parentid?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
