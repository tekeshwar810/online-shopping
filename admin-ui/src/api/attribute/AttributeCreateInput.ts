import { ProductCreateNestedManyWithoutAttributesInput } from "./ProductCreateNestedManyWithoutAttributesInput";

export type AttributeCreateInput = {
  attributeType?: string | null;
  dummy?: number | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutAttributesInput;
  value?: string | null;
};
