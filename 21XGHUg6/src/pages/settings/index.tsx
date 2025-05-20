import { Card, Form, Switch, Input, Select, Space, Typography } from "antd";
import { useForm } from "@refinedev/antd";

const { Title } = Typography;

export const SettingsPage: React.FC = () => {
  const { formProps } = useForm();

  return (
    <div style={{ padding: "24px" }}>
      <Title level={3}>Settings</Title>
      <Space direction="vertical" style={{ width: "100%" }} size="large">
        <Card title="General Settings">
          <Form {...formProps} layout="vertical">
            <Form.Item label="Site Name" name="siteName">
              <Input />
            </Form.Item>
            <Form.Item label="Language" name="language">
              <Select
                options={[
                  { label: "English", value: "en" },
                  { label: "Spanish", value: "es" },
                  { label: "French", value: "fr" },
                ]}
              />
            </Form.Item>
          </Form>
        </Card>

        <Card title="Notifications">
          <Form {...formProps} layout="vertical">
            <Form.Item label="Email Notifications" name="emailNotifications" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item label="Push Notifications" name="pushNotifications" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Form>
        </Card>

        <Card title="Display Settings">
          <Form {...formProps} layout="vertical">
            <Form.Item label="Theme" name="theme">
              <Select
                options={[
                  { label: "Light", value: "light" },
                  { label: "Dark", value: "dark" },
                  { label: "System", value: "system" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Compact View" name="compactView" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};
