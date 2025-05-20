import { List, useTable, ShowButton, EditButton, SaveButton } from "@refinedev/antd";
import { Table, Form, Input, Space } from "antd";
import type { Case } from "../../types";

interface ISearch {
  id?: string;
  leadInvestigator?: string;
  caseStatus?: string;
  businessId?: string;
  complaintId?: string;
  caseStartDate?: string;
  caseFindings?: string;
}

export const CaseList = () => {
  const { tableProps, searchFormProps } = useTable<Case, any, ISearch>({
    onSearch: (values) => {
      return [
        { field: "id", operator: "contains", value: values.id },
        { field: "leadInvestigator", operator: "contains", value: values.leadInvestigator },
        { field: "caseStatus", operator: "contains", value: values.caseStatus },
        { field: "businessId", operator: "contains", value: values.businessId },
        { field: "complaintId", operator: "contains", value: values.complaintId },
        { field: "caseStartDate", operator: "contains", value: values.caseStartDate },
        { field: "caseFindings", operator: "contains", value: values.caseFindings },
      ];
    },
  });

  return (
    <List>
      <Form {...searchFormProps} layout="inline">
        <Space>
          <Form.Item name="id">
            <Input placeholder="Search by Case ID" />
          </Form.Item>
          <Form.Item name="leadInvestigator">
            <Input placeholder="Search by Lead Investigator" />
          </Form.Item>
          <Form.Item name="caseStatus">
            <Input placeholder="Search by Status" />
          </Form.Item>
          <Form.Item name="businessId">
            <Input placeholder="Search by Business ID" />
          </Form.Item>
          <Form.Item name="complaintId">
            <Input placeholder="Search by Complaint ID" />
          </Form.Item>
          <Form.Item name="caseStartDate">
            <Input placeholder="Search by Start Date" />
          </Form.Item>
          <Form.Item name="caseFindings">
            <Input placeholder="Search by Findings" />
          </Form.Item>
          <SaveButton onClick={searchFormProps.form?.submit} />
        </Space>
      </Form>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="Case ID" />
        <Table.Column dataIndex="businessId" title="Business ID" />
        <Table.Column dataIndex="complaintId" title="Complaint ID" />
        <Table.Column dataIndex="leadInvestigator" title="Lead Investigator" />
        <Table.Column dataIndex="caseStartDate" title="Start Date" />
        <Table.Column dataIndex="caseStatus" title="Status" />
        <Table.Column dataIndex="caseFindings" title="Findings" />
        <Table.Column dataIndex="linkedInspections" title="Linked Inspections" />
        <Table.Column dataIndex="linkedLegislation" title="Linked Legislation" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          fixed="right"
          render={(_, record) => (
            <>
              <ShowButton recordItemId={record.id} />
              <EditButton recordItemId={record.id} />
            </>
          )}
        />
      </Table>
    </List>
  );
};
