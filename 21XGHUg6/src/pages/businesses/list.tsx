import { List, useTable, TagField, EditButton, ShowButton, CreateButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import type { Business } from "../../types";

export const BusinessList = () => {
  const { tableProps } = useTable<Business>({
    resource: "businesses",
    sorters: {
      initial: [{ field: "name", order: "asc" }],
    },
    meta: {
      select:
        "id, name, type:businessType, tradingStatus, riskAssessmentScore, complianceStatus, primaryContact, businessSector, address",
    },
  });

  return (
    <List headerButtons={<CreateButton />}>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" sorter />
        <Table.Column dataIndex="name" title="Business Name" sorter />
        <Table.Column dataIndex="type" title="Business Type" sorter />
        <Table.Column
          dataIndex="tradingStatus"
          title="Trading Status"
          render={(value: string) => (
            <TagField value={value} color={value === "Active" ? "green" : value === "Suspended" ? "red" : "default"} />
          )}
        />
        <Table.Column
          dataIndex="riskAssessmentScore"
          title="Risk Score"
          render={(value: string) => (
            <TagField value={value} color={value === "High" ? "red" : value === "Medium" ? "orange" : "green"} />
          )}
        />
        <Table.Column
          dataIndex="complianceStatus"
          title="Compliance Status"
          render={(value: string) => (
            <TagField
              value={value}
              color={value === "Compliant" ? "green" : value === "Non-compliant" ? "red" : "orange"}
            />
          )}
        />
        <Table.Column dataIndex="businessSector" title="Business Sector" sorter />
        <Table.Column dataIndex={["primaryContact", "name"]} title="Contact" ellipsis />
        <Table.Column
          fixed="right"
          title="Actions"
          dataIndex="actions"
          render={(_, record: Business) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
