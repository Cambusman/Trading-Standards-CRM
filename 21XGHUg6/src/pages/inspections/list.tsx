import { List, useTable, EditButton, ShowButton, DeleteButton, DateField } from "@refinedev/antd";
import { Table, Space } from "antd";
import type { Inspection } from "../../types";

export const InspectionList: React.FC = () => {
  const { tableProps } = useTable<Inspection>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="Inspection ID" />
        <Table.Column dataIndex="businessId" title="Business ID" />
        <Table.Column dataIndex="officerId" title="Officer ID" />
        <Table.Column
          dataIndex="inspectionDate"
          title="Inspection Date"
          render={(value: string) => <DateField value={value} />}
        />
        <Table.Column dataIndex="inspectionType" title="Type" />
        <Table.Column dataIndex="inspectionOutcome" title="Outcome" />
        <Table.Column dataIndex="riskAssessmentUpdate" title="Risk Assessment" />
        <Table.Column dataIndex="enforcementActionTaken" title="Enforcement Action" />
        <Table.Column dataIndex="numberOfItemsInspected" title="Items Inspected" />
        <Table.Column dataIndex="numberOfFailures" title="Failures" />
        <Table.Column dataIndex="legislationCited" title="Legislation" />
        <Table.Column<Inspection>
          fixed="right"
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
