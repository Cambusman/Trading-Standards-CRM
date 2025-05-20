import { EditButton, List, ShowButton, useTable } from "@refinedev/antd";
import { Table, Space } from "antd";
import type { Equipment } from "../../types";

export const EquipmentList = () => {
  const { tableProps } = useTable<Equipment>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column<Equipment> dataIndex="category" title="Category of Equipment" sorter />
        <Table.Column<Equipment> dataIndex="verificationStatus" title="Verification Status" sorter />
        <Table.Column<Equipment> dataIndex="numberInspected" title="Number Inspected" sorter />
        <Table.Column<Equipment> dataIndex="numberDisqualified" title="Number Disqualified" sorter />
        <Table.Column<Equipment>
          dataIndex="numberFoundOutsideLimitOfError"
          title="Number Found Outside Limit of Error"
          sorter
        />
        <Table.Column<Equipment> dataIndex="noticesGiven" title="Notices Given" />
        <Table.Column<Equipment> dataIndex="resultingProsecutions" title="Resulting Prosecutions" />
        <Table.Column<Equipment>
          title="Actions"
          dataIndex="actions"
          fixed="right"
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
