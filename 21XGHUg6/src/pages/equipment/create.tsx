import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import type { EquipmentCreateInput } from "../../types";

export const EquipmentCreate = () => {
  const { formProps, saveButtonProps } = useForm<EquipmentCreateInput>();

  const { selectProps: businessSelectProps } = useSelect({
    resource: "businesses",
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Category" name="category" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Liquid fuel dispensers", value: "Liquid fuel dispensers" },
              { label: "Weighbridges", value: "Weighbridges" },
              { label: "Automatic weighing instruments", value: "Automatic weighing instruments" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Business" name="businessId" rules={[{ required: true }]}>
          <Select {...businessSelectProps} />
        </Form.Item>

        <Form.Item label="Verification Status" name="verificationStatus" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Verified", value: "Verified" },
              { label: "Non-verified", value: "Non-verified" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Number Inspected" name="numberInspected" rules={[{ required: true }]}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item label="Number Disqualified" name="numberDisqualified" rules={[{ required: true }]}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Number Found Outside Limit of Error"
          name="numberFoundOutsideLimitOfError"
          rules={[{ required: true }]}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item label="Notices Given" name="noticesGiven">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Resulting Prosecutions" name="resultingProsecutions">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Create>
  );
};
