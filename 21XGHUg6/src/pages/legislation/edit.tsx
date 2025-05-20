import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import type { Legislation } from "../../types";

export const LegislationEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<Legislation>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Fair Trading", value: "Fair Trading" },
              { label: "Safety", value: "Safety" },
              { label: "Metrology", value: "Metrology" },
              { label: "Animal Health & Welfare", value: "Animal Health & Welfare" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Compliance Criteria" name="complianceCriteria" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Applicable Business Types" name="applicableBusinessTypes" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item label="Linked Inspections" name="linkedInspections">
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
