import { ProductUpdateManyWithoutAttributesInput } from "./ProductUpdateManyWithoutAttributesInput";

export type AttributeUpdateInput = {
  attributeType?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutAttributesInput;
  value?: string | null;
};
