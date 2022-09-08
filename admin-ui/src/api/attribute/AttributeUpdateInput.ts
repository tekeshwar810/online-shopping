import { ProductUpdateManyWithoutAttributesInput } from "./ProductUpdateManyWithoutAttributesInput";

export type AttributeUpdateInput = {
  attributeType?: string | null;
  dummy?: number | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutAttributesInput;
  value?: string | null;
};
