import { Show, TextField, DateField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import type { Complaint } from "../../types";

const { Title } = Typography;

export const ComplaintShow = () => {
  const { queryResult } = useShow<Complaint>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Complainant Details</Title>
      <TextField value={record?.complainantDetails} />

      <Title level={5}>Nature of Complaint</Title>
      <TextField value={record?.natureOfComplaint} />

      <Title level={5}>Date Filed</Title>
      <DateField value={record?.dateFiled} format="YYYY-MM-DD" />

      <Title level={5}>Investigation Outcome</Title>
      <TextField value={record?.investigationOutcome} />

      <Title level={5}>Enforcement Action Taken</Title>
      <TextField value={record?.enforcementActionTaken} />
    </Show>
  );
};
