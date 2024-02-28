import { useTable, EditButton, ShowButton, List } from "@refinedev/antd";
import { Table, Space } from "antd";

export const ListUsers = () => {
  const { tableProps, sorters } = useTable({
    sorters: { initial: [{ field: "id", order: "asc" }] },
    syncWithLocation: true,
  });

  return (
      <List>
        <Table {...tableProps} rowKey="id">
            <Table.Column dataIndex="id" title="ID" />
            <Table.Column dataIndex="userName" title="Name" />        
            <Table.Column dataIndex="pswhash" title="Password" />
            <Table.Column dataIndex="email" title="Email" />
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