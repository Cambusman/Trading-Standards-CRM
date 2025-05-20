import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import type { CaseCreateInput } from "../../types";

export const CaseCreate = () => {
  const { formProps, saveButtonProps } = useForm<CaseCreateInput>();

  const { selectProps: businessSelectProps } = useSelect({
    resource: "businesses",
    optionLabel: "name",
    optionValue: "id",
  });

  const { selectProps: complaintSelectProps } = useSelect({
    resource: "complaints",
    optionLabel: "natureOfComplaint",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Business" name="businessId" rules={[{ required: true }]}>
          <Select {...businessSelectProps} />
        </Form.Item>

        <Form.Item label="Complaint" name="complaintId">
          <Select {...complaintSelectProps} allowClear placeholder="Select a complaint if applicable" />
        </Form.Item>

        <Form.Item label="Lead Investigator" name="leadInvestigator" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="caseStartDate"
          rules={[{ required: true }]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : undefined,
          })}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Status" name="caseStatus" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Open", value: "Open" },
              { label: "Closed", value: "Closed" },
              { label: "Under Review", value: "Under Review" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Findings" name="caseFindings" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Linked Inspections" name="linkedInspections">
          <Input placeholder="Enter inspection references" />
        </Form.Item>

        <Form.Item label="Linked Legislation" name="linkedLegislation">
          <Input placeholder="Enter legislation references" />
        </Form.Item>

        <Form.Item label="Evidence Uploads" name="evidenceUploads">
          <Input placeholder="Enter evidence references" />
        </Form.Item>

        <Form.Item label="Audit Trail" name="auditTrail">
          <Input.TextArea rows={3} placeholder="Enter audit trail information" />
        </Form.Item>
      </Form>
    </Create>
  );
};
