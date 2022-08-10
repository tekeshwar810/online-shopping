import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "categoryname";

export const CategoryTitle = (record: TCategory): string => {
  return record.categoryname || record.id;
};
