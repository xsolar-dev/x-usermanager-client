import { useShow, useOne } from "@refinedev/core";
import { TextField, NumberField, MarkdownField, Show } from "@refinedev/antd";
import { Typography } from "antd";

export const ShowCustomer = () => {
    const {
        queryResult: { data, isLoading },
      } = useShow();

    return (
        <Show isLoading={isLoading}>
            <Typography.Title level={5}>Id</Typography.Title>
            <TextField value={data?.data?.id} />

            <Typography.Title level={5}>Desc</Typography.Title>
            <TextField value={data?.data?.cus_desc} />

            <Typography.Title level={5}>Customer Adress</Typography.Title>
            <MarkdownField value={data?.data?.cus_address} />

            <Typography.Title level={5}>Date Created</Typography.Title>
            <TextField value={data?.data?.date_create} />
        </Show>
    );

};