import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AttributeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="attribute_type" source="attributeType" />
        <TextInput label="name" source="name" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
