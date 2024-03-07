import { useTable, EditButton, ShowButton, List } from "@refinedev/antd";
import { Table, Space } from "antd";

export const ListCustomer = () => {
  const { tableProps, sorters } = useTable({
    sorters: { initial: [{ field: "id", order: "asc" }] },
    syncWithLocation: true,
  });

  return (
      <List>
        <Table {...tableProps} rowKey="id">
            <Table.Column dataIndex="id" title="ID" />
            <Table.Column dataIndex="cus_desc" title="Desc" />        
            <Table.Column dataIndex="cus_address" title="Address" />
            <Table.Column dataIndex="date_create" title="Date Created" />
            <Table.Column
            title="Actions"
            render={(_, record) => (
                <Space>
                <ShowButton hideText size="small" recordItemId={record.id} />
                <EditButton hideText size="small" recordItemId={record.id} />
                </Space>
            )}
            />
        </Table>
      </List>
  );
};