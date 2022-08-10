import { Attribute as TAttribute } from "../api/attribute/Attribute";

export const ATTRIBUTE_TITLE_FIELD = "name";

export const AttributeTitle = (record: TAttribute): string => {
  return record.name || record.id;
};
