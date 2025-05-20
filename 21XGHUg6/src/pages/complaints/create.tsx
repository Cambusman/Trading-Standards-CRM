import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker } from "antd";
import type { ComplaintCreateInput } from "../../types";
import dayjs from "dayjs";

export const ComplaintCreate = () => {
  const { formProps, saveButtonProps } = useForm<ComplaintCreateInput>();

  const { selectProps: businessSelectProps } = useSelect({
    resource: "businesses",
    optionLabel: "name",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Complainant Details" name="complainantDetails" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item label="Business" name="businessId" rules={[{ required: true }]}>
          <Select {...businessSelectProps} placeholder="Select business" />
        </Form.Item>

        <Form.Item label="Nature of Complaint" name="natureOfComplaint" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Date Filed"
          name="dateFiled"
          rules={[{ required: true }]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : undefined,
          })}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Investigation Outcome" name="investigationOutcome" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Resolved", value: "Resolved" },
              { label: "Escalated", value: "Escalated" },
              { label: "Non-actionable", value: "Non-actionable" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Enforcement Action Taken" name="enforcementActionTaken" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Advice", value: "Advice" },
              { label: "Notice Issued", value: "Notice Issued" },
              { label: "Formal Action", value: "Formal Action" },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
