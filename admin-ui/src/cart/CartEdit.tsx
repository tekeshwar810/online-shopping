import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CartItemTitle } from "../cartItem/CartItemTitle";

export const CartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <ReferenceArrayInput
          source="cartitems"
          reference="CartItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CartItemTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="total_item" source="totalItem" />
        <NumberInput label="totalprice" source="totalprice" />
        <TextInput label="userid" source="userid" />
      </SimpleForm>
    </Edit>
  );
};
