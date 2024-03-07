import { useForm, useSelect, SaveButton, Edit } from "@refinedev/antd";
import { Form, Input, Select, InputNumber } from "antd";

export const EditCustomer = () => {
    const { formProps, saveButtonProps} = useForm({
        redirect: "show",
      });    

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
        </Edit>
    );
};