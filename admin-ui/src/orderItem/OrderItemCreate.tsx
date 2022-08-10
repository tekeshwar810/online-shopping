import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const OrderItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="orderid">
          <SelectInput optionText={OrderTitle} />
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
      </SimpleForm>
    </Create>
  );
};
