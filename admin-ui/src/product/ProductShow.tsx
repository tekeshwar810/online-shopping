import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { ATTRIBUTE_TITLE_FIELD } from "../attribute/AttributeTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="attribute_id"
          source="attribute.id"
          reference="Attribute"
        >
          <TextField source={ATTRIBUTE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="brandid" source="brand.id" reference="Brand">
          <TextField source={BRAND_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="categoryid" source="categoryid" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="price" source="price" />
        <TextField label="productname" source="productname" />
        <TextField label="sku" source="sku" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CartItem"
          target="ProductId"
          label="cartitems"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="cartid" source="cart.id" reference="Cart">
              <TextField source={CART_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="productid"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="productprice" source="productprice" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userid" source="userid" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderItem"
          target="ProductId"
          label="order_items"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="orderid" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="productid"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="productprice" source="productprice" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
