import { DateField, NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import type { Inspection } from "../../types";

const { Title } = Typography;

export const InspectionShow = () => {
  const { queryResult } = useShow<Inspection>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />

      <Title level={5}>Business ID</Title>
      <TextField value={record?.businessId} />

      <Title level={5}>Officer ID</Title>
      <TextField value={record?.officerId} />

      <Title level={5}>Inspection Date</Title>
      <DateField value={record?.inspectionDate} format="YYYY-MM-DD" />

      <Title level={5}>Inspection Type</Title>
      <TextField value={record?.inspectionType} />

      <Title level={5}>Inspection Outcome</Title>
      <TextField value={record?.inspectionOutcome} />

      <Title level={5}>Risk Assessment Update</Title>
      <TextField value={record?.riskAssessmentUpdate} />

      <Title level={5}>Enforcement Action Taken</Title>
      <TextField value={record?.enforcementActionTaken} />

      <Title level={5}>Number of Items Inspected</Title>
      <NumberField value={record?.numberOfItemsInspected ?? 0} />

      <Title level={5}>Number of Failures</Title>
      <NumberField value={record?.numberOfFailures ?? 0} />

      <Title level={5}>Legislation Cited</Title>
      <TextField value={record?.legislationCited} />
    </Show>
  );
};
