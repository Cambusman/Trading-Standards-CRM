import { useShow } from "@refinedev/core";
import { Show, TextField } from "@refinedev/antd";
import { Typography } from "antd";
import type { Legislation } from "../../types";

const { Title } = Typography;

export const LegislationShow: React.FC = () => {
  const { queryResult } = useShow<Legislation>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Legislation Name</Title>
      <TextField value={record?.name} />

      <Title level={5}>Category</Title>
      <TextField value={record?.category} />

      <Title level={5}>Compliance Criteria</Title>
      <TextField value={record?.complianceCriteria} />

      <Title level={5}>Applicable Business Types</Title>
      <TextField value={record?.applicableBusinessTypes} />

      <Title level={5}>Linked Inspections</Title>
      <TextField value={record?.linkedInspections} />
    </Show>
  );
};
