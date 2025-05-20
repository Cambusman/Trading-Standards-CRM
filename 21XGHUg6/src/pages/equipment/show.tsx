import { useShow } from "@refinedev/core";
import { Show, NumberField, TextField } from "@refinedev/antd";
import { Typography } from "antd";
import type { Equipment } from "../../types";

const { Title } = Typography;

export const EquipmentShow = () => {
  const { queryResult } = useShow<Equipment>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />

      <Title level={5}>Category</Title>
      <TextField value={record?.category} />

      <Title level={5}>Business ID</Title>
      <TextField value={record?.businessId} />

      <Title level={5}>Verification Status</Title>
      <TextField value={record?.verificationStatus} />

      <Title level={5}>Number Inspected</Title>
      <NumberField value={record?.numberInspected ?? 0} />

      <Title level={5}>Number Disqualified</Title>
      <NumberField value={record?.numberDisqualified ?? 0} />

      <Title level={5}>Number Found Outside Limit of Error</Title>
      <NumberField value={record?.numberFoundOutsideLimitOfError ?? 0} />

      <Title level={5}>Notices Given</Title>
      <TextField value={record?.noticesGiven} />

      <Title level={5}>Resulting Prosecutions</Title>
      <TextField value={record?.resultingProsecutions} />
    </Show>
  );
};
