import { useForm, useSelect, SaveButton, Create } from "@refinedev/antd";
import { Form, Input, Select, InputNumber } from "antd";

export const CreateUser = () => {
    const { formProps, saveButtonProps } = useForm({
        redirect: "edit",
      });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="username">
            <Input />
        </Form.Item>

        <Form.Item label="Password" name="pswhash">
            <Input />
        </Form.Item>
        
        <Form.Item label="Email" name="email">
            <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};