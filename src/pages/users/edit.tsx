import { useForm, useSelect, SaveButton, Edit } from "@refinedev/antd";
import { Form, Input, Select, InputNumber } from "antd";

export const EditUser = () => {
    const { formProps, saveButtonProps, queryResult } = useForm({
        redirect: "show",
      });    

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="userName">
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="pswhash">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};