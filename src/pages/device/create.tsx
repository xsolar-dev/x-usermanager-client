import { useForm, useSelect, SaveButton, Create } from "@refinedev/antd";
import { Form, Input, Select, InputNumber } from "antd";

export const CreateDevice = () => {
    const { formProps, saveButtonProps } = useForm({
        redirect: "edit",
      });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Description" name="dev_desc">
            <Input />
        </Form.Item>

        <Form.Item label="State" name="state">
            <Input />
        </Form.Item>
        
        <Form.Item label="MQTT server" name="mqtt_path">
            <Input />
        </Form.Item>

        <Form.Item label="MQTT Username" name="mqtt_user">
            <Input />
        </Form.Item>

        <Form.Item label="MQTT Password" name="mqtt_pass">
            <Input />
        </Form.Item>

        <Form.Item label="MQTT Topic" name="mqtt_topic">
            <Input />
        </Form.Item>

        <Form.Item label="InfluxDB server" name="influx_path">
            <Input />
        </Form.Item>

        <Form.Item label="Influx Bucket" name="influx_bucket">
            <Input />
        </Form.Item>

        <Form.Item label="Influx Key" name="influx_key">
            <Input />
        </Form.Item>

      </Form>
    </Create>
  );
};