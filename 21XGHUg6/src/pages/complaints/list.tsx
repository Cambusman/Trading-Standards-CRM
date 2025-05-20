import { List, useTable, ShowButton, EditButton, DeleteButton } from "@refinedev/antd";
import { Table } from "antd";
import type { Complaint } from "../../types";
import { DateField } from "@refinedev/antd";

export const ComplaintList = () => {
  const { tableProps } = useTable<Complaint>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="Complaint ID" />
        <Table.Column dataIndex="complainantDetails" title="Complainant Details" />
        <Table.Column dataIndex="businessId" title="Business ID" />
        <Table.Column dataIndex="natureOfComplaint" title="Nature of Complaint" />
        <Table.Column
          dataIndex="dateFiled"
          title="Date Filed"
          render={(value) => <DateField value={value} format="DD/MM/YYYY" />}
        />
        <Table.Column dataIndex="investigationOutcome" title="Investigation Outcome" />
        <Table.Column dataIndex="enforcementActionTaken" title="Enforcement Action" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          fixed="right"
          render={(_, record) => (
            <>
              <ShowButton size="small" recordItemId={record.id} hideText />
              <EditButton size="small" recordItemId={record.id} hideText />
              <DeleteButton size="small" recordItemId={record.id} hideText />
            </>
          )}
        />
      </Table>
    </List>
  );
};
