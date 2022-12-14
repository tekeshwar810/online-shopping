import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AttributeTitle } from "../attribute/AttributeTitle";
import { BrandTitle } from "../brand/BrandTitle";
import { CartItemTitle } from "../cartItem/CartItemTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attribute.id"
          reference="Attribute"
          label="attribute_id"
        >
          <SelectInput optionText={AttributeTitle} />
        </ReferenceInput>
        <ReferenceInput source="brand.id" reference="Brand" label="brandid">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="carts"
          reference="CartItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CartItemTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="image" source="image" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <TextInput label="productname" source="productname" />
        <TextInput label="sku" source="sku" />
      </SimpleForm>
    </Edit>
  );
};
