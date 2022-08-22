import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CartTitle } from "../cart/CartTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CartItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
