import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker } from "antd";
import type { Case } from "../../types";
import dayjs from "dayjs";

export const CasesEdit = () => {
  const { form, formProps, saveButtonProps } = useForm<Case>();

  const { selectProps: businessSelectProps } = useSelect({
    resource: "businesses",
    optionLabel: "name",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Business" name="businessId" rules={[{ required: true }]}>
          <Select {...businessSelectProps} />
        </Form.Item>

        <Form.Item label="Complaint ID" name="complaintId">
          <Input />
        </Form.Item>

        <Form.Item label="Lead Investigator" name="leadInvestigator" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Case Start Date"
          name="caseStartDate"
          rules={[{ required: true }]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : undefined,
          })}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Case Status" name="caseStatus" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Open", value: "Open" },
              { label: "Closed", value: "Closed" },
              { label: "Under Review", value: "Under Review" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Case Findings" name="caseFindings" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Linked Inspections" name="linkedInspections">
          <Input />
        </Form.Item>

        <Form.Item label="Linked Legislation" name="linkedLegislation">
          <Input />
        </Form.Item>

        <Form.Item label="Evidence Uploads" name="evidenceUploads">
          <Input />
        </Form.Item>

        <Form.Item label="Audit Trail" name="auditTrail">
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
