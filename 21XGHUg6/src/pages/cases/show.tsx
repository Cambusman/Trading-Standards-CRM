import { useShow } from "@refinedev/core";
import { Show, DateField, TextField } from "@refinedev/antd";
import { Typography } from "antd";
import type { Case } from "../../types";

const { Title } = Typography;

export const CaseShow = () => {
  const { queryResult } = useShow<Case>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Business ID</Title>
      <TextField value={record?.businessId} />

      <Title level={5}>Complaint ID</Title>
      <TextField value={record?.complaintId} />

      <Title level={5}>Lead Investigator</Title>
      <TextField value={record?.leadInvestigator} />

      <Title level={5}>Case Start Date</Title>
      <DateField value={record?.caseStartDate} format="YYYY-MM-DD" />

      <Title level={5}>Case Status</Title>
      <TextField value={record?.caseStatus} />

      <Title level={5}>Case Findings</Title>
      <TextField value={record?.caseFindings} />

      <Title level={5}>Linked Inspections</Title>
      <TextField value={record?.linkedInspections} />

      <Title level={5}>Linked Legislation</Title>
      <TextField value={record?.linkedLegislation} />

      <Title level={5}>Evidence Uploads</Title>
      <TextField value={record?.evidenceUploads} />

      <Title level={5}>Audit Trail</Title>
      <TextField value={record?.auditTrail} />
    </Show>
  );
};
