import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import type { Business } from "../../types";

export const BusinessCreate = () => {
  const { formProps, saveButtonProps, onFinish } = useForm<Business>({
    action: "create",
    resource: "businesses",
    redirect: "list",
    successNotification: {
      message: "Business successfully created",
      type: "success",
    },
  });

  return (
    <Create
      saveButtonProps={{
        ...saveButtonProps,
        onClick: () => {
          formProps.form?.submit();
        },
        style: { marginRight: 24 },
      }}>
      <Form {...formProps} layout="vertical" style={{ position: "relative" }}>
        <Form.Item style={{ marginLeft: 24 }} label="Business Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item style={{ marginLeft: 24 }} label="Business Type" name="type" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Manufacturer", value: "Manufacturer" },
              { label: "Online Retailer", value: "Online Retailer" },
              { label: "Packaging plant", value: "Packaging plant" },
              { label: "Importer", value: "Importer" },
              { label: "Retailer", value: "Retailer" },
              { label: "Medical institution", value: "Medical institution" },
            ]}
          />
        </Form.Item>

        <Form.Item style={{ marginLeft: 24 }} label="Trading Status" name="tradingStatus" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Active", value: "Active" },
              { label: "Suspended", value: "Suspended" },
              { label: "Closed", value: "Closed" },
            ]}
          />
        </Form.Item>

        <Form.Item
          style={{ marginLeft: 24 }}
          label="Risk Assessment Score"
          name="riskAssessmentScore"
          rules={[{ required: true }]}>
          <Select
            options={[
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
            ]}
          />
        </Form.Item>

        <Form.Item style={{ marginLeft: 24 }} label="Address" name="address" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          style={{ marginLeft: 24 }}
          label="Primary Contact Name"
          name={["primaryContact", "name"]}
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          style={{ marginLeft: 24 }}
          label="Primary Contact Email"
          name={["primaryContact", "email"]}
          rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>

        <Form.Item
          style={{ marginLeft: 24 }}
          label="Primary Contact Phone"
          name={["primaryContact", "phone"]}
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          style={{ marginLeft: 24 }}
          label="Business Sector"
          name="businessSector"
          rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Retail", value: "Retail" },
              { label: "Manufacturing", value: "Manufacturing" },
              { label: "Distribution", value: "Distribution" },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
