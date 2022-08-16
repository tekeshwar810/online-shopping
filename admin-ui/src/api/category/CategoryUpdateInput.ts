import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryname?: string | null;
  parentid?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
