import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTRIBUTE_TITLE_FIELD } from "../attribute/AttributeTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"products"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
