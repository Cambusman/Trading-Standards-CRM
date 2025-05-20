import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, InputNumber } from "antd";
import type { InspectionCreateInput } from "../../types";

export const InspectionCreate = () => {
  const { formProps, saveButtonProps } = useForm<InspectionCreateInput>();

  const { selectProps: businessSelectProps } = useSelect({
    resource: "businesses",
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Business" name="businessId" rules={[{ required: true }]}>
          <Select {...businessSelectProps} />
        </Form.Item>

        <Form.Item label="Officer ID" name="officerId" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Inspection Date" name="inspectionDate" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Inspection Type" name="inspectionType" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Routine", value: "Routine" },
              { label: "Targeted", value: "Targeted" },
              { label: "Complaint-based", value: "Complaint-based" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Inspection Outcome" name="inspectionOutcome" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Compliant", value: "Compliant" },
              { label: "Non-compliant", value: "Non-compliant" },
              { label: "Enforcement required", value: "Enforcement required" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Risk Assessment Update" name="riskAssessmentUpdate" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Enforcement Action Taken" name="enforcementActionTaken" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Advice", value: "Advice" },
              { label: "Formal action", value: "Formal action" },
              { label: "Seizure", value: "Seizure" },
              { label: "Correction", value: "Correction" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Number of Items Inspected" name="numberOfItemsInspected" rules={[{ required: true }]}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item label="Number of Failures" name="numberOfFailures" rules={[{ required: true }]}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item label="Legislation Cited" name="legislationCited" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
