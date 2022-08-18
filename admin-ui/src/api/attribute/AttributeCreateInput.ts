import { ProductCreateNestedManyWithoutAttributesInput } from "./ProductCreateNestedManyWithoutAttributesInput";

export type AttributeCreateInput = {
  attributeType?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutAttributesInput;
  value?: string | null;
};
