import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="categoryname" source="categoryname" />
        <TextInput label="parentid" source="parentid" />
      </SimpleForm>
    </Edit>
  );
};
