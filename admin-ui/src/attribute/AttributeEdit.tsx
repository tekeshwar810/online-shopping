import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AttributeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="attribute_type" source="attributeType" />
        <TextInput label="name" source="name" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
