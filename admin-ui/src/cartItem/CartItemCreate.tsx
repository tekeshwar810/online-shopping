import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
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
        <ReferenceInput
          source="product.id"
          reference="Product"
          label="productid"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput label="productprice" source="productprice" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="userid" source="userid" />
      </SimpleForm>
    </Create>
  );
};
