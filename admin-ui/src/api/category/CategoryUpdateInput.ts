import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryname?: string | null;
  parentid?: number | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
