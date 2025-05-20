import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import type { Business } from "../../types";

const { Title } = Typography;

export const BusinessShow = () => {
  const { queryResult } = useShow<Business>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Business Name</Title>
      <TextField value={record?.name} />

      <Title level={5}>Business Type</Title>
      <TextField value={record?.type} />

      <Title level={5}>Trading Status</Title>
      <TextField value={record?.tradingStatus} />

      <Title level={5}>Risk Assessment Score</Title>
      <TextField value={record?.riskAssessmentScore} />

      <Title level={5}>Compliance Status</Title>
      <TextField value={record?.complianceStatus} />

      <Title level={5}>Address</Title>
      <TextField value={record?.address} />

      <Title level={5}>Primary Contact</Title>
      <TextField value={record?.primaryContact?.name} />
      <TextField value={record?.primaryContact?.email} />
      <TextField value={record?.primaryContact?.phone} />

      <Title level={5}>Business Sector</Title>
      <TextField value={record?.businessSector} />
    </Show>
  );
};
