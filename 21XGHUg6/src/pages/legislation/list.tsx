import { List, useTable, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import type { Legislation } from "../../types";

export const LegislationList: React.FC = () => {
  const { tableProps } = useTable<Legislation>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="Legislation Name" sorter />
        <Table.Column dataIndex="category" title="Category" sorter />
        <Table.Column dataIndex="complianceCriteria" title="Compliance Criteria" />
        <Table.Column dataIndex="applicableBusinessTypes" title="Applicable Business Types" />
        <Table.Column
          fixed="right"
          title="Actions"
          dataIndex="actions"
          render={(_, record: Legislation) => (
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
