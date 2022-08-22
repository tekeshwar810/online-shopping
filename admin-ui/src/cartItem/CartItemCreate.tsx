import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CartTitle } from "../cart/CartTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CartItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="cart.id" reference="Cart" label="cartid">
          <SelectInput optionText={CartTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productid"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <NumberInput label="productprice" source="productprice" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="userid" source="userid" />
      </SimpleForm>
    </Create>
  );
};
