import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CART_TITLE_FIELD } from "./CartTitle";

export const CartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="total_item" source="totalItem" />
        <TextField label="totalprice" source="totalprice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userid" source="userid" />
        <ReferenceManyField
          reference="CartItem"
          target="CartId"
          label="cartitems"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="cartid" source="cart.id" reference="Cart">
              <TextField source={CART_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="productprice" source="productprice" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userid" source="userid" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
