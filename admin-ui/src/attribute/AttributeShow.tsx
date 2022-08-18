import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ATTRIBUTE_TITLE_FIELD } from "./AttributeTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";

export const AttributeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="attribute_type" source="attributeType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
        <ReferenceManyField
          reference="Product"
          target="AttributeId"
          label="products"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
