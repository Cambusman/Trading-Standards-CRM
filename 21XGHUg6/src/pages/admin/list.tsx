import { List } from "@refinedev/antd";
import { Card, Form, Input, Button, Space, Table } from "antd";

export const AdminList = () => {
  return (
    <List>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Card title="Menu Configuration">
          <Form layout="vertical">
            <Form.Item label="Menu Title" name="title">
              <Input />
            </Form.Item>
            <Form.Item label="Icon" name="icon">
              <Input />
            </Form.Item>
            <Form.Item label="Path" name="path">
              <Input />
            </Form.Item>
            <Button type="primary">Add Menu Item</Button>
          </Form>
        </Card>

        <Card title="Report Configuration">
          <Table
            columns={[
              { title: "Field Name", dataIndex: "field" },
              { title: "Data Type", dataIndex: "type" },
              { title: "Report Type", dataIndex: "reportType" },
              {
                title: "Actions",
                render: () => (
                  <Space>
                    <Button type="link">Edit</Button>
                    <Button type="link" danger>
                      Delete
                    </Button>
                  </Space>
                ),
              },
            ]}
            dataSource={[]}
          />
        </Card>
      </Space>
    </List>
  );
};
