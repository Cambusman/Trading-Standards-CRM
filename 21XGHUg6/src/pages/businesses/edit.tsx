import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import type { Business } from "../../types";

export const BusinessEdit = () => {
  const { formProps, saveButtonProps } = useForm<Business>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Business Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Business Type" name="businessType" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Manufacturer", value: "Manufacturer" },
              { label: "Online Retailer", value: "Online Retailer" },
              { label: "Packaging Plant", value: "Packaging Plant" },
              { label: "Importer", value: "Importer" },
              { label: "Retailer", value: "Retailer" },
              { label: "Medical Institution", value: "Medical Institution" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Trading Status" name="tradingStatus" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Active", value: "Active" },
              { label: "Suspended", value: "Suspended" },
              { label: "Closed", value: "Closed" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Risk Assessment Score" name="riskAssessmentScore" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Compliance Status" name="complianceStatus" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Compliant", value: "Compliant" },
              { label: "Non-compliant", value: "Non-compliant" },
              { label: "Assisted into compliance", value: "Assisted into compliance" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Registered Address" name="registeredAddress" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Primary Contact Details" name="primaryContactDetails" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Business Sector" name="businessSector" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Retail", value: "Retail" },
              { label: "Manufacturing", value: "Manufacturing" },
              { label: "Distribution", value: "Distribution" },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
