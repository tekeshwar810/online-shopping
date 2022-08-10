import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const OrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
