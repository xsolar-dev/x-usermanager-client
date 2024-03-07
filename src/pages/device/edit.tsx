import { useForm, useSelect, SaveButton, Edit } from "@refinedev/antd";
import { Form, Input, Select, InputNumber } from "antd";

export const EditPage = () => {
    const { formProps, saveButtonProps, queryResult } = useForm({
        redirect: "show",
      });    

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Device Description" name="dev_desc">
                    <Input />
                </Form.Item>
                <Form.Item label="Date Create" name="date_create">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="State" name="state">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};