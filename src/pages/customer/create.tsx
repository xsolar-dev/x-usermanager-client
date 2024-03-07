import { useForm, useSelect, SaveButton, Create } from "@refinedev/antd";
import { Form, Input, Select, InputNumber } from "antd";

export const CreateCustomer = () => {
    const { formProps, saveButtonProps } = useForm({
        redirect: "edit",
      });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Description" name="cus_desc">
            <Input />
        </Form.Item>

        <Form.Item label="Address" name="cus_address">
            <Input />
        </Form.Item>
        
        <Form.Item label="Latitude" name="cus_lat">
            <Input />
        </Form.Item>

        <Form.Item label="Longtitude" name="cus_long">
            <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};