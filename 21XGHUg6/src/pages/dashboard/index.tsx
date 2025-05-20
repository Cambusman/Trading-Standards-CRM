import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { useList, useCustom } from "@refinedev/core";
import { Line, Pie, Column } from "@ant-design/charts";

interface InspectionData {
  type: string;
  count: number;
}

interface CaseData {
  priority: string;
  count: number;
}

export const Dashboard: React.FC = () => {
  const { data: businessData } = useList({
    resource: "businesses",
  });

  const { data: inspectionData } = useList({
    resource: "inspections",
  });

  const { data: complaintData } = useList({
    resource: "complaints",
  });

  const { data: caseData } = useList({
    resource: "cases",
  });

  const trendData =
    useCustom({
      url: "trend-data",
      method: "get",
    }).data?.data || [];

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="Total Businesses" value={businessData?.total || 0} valueStyle={{ color: "#3f8600" }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Inspections"
              value={inspectionData?.total || 0}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="Open Complaints" value={complaintData?.total || 0} valueStyle={{ color: "#cf1322" }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="Active Cases" value={caseData?.total || 0} valueStyle={{ color: "#722ed1" }} />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Activity Trends">
            <Line
              data={trendData}
              xField="date"
              yField="value"
              seriesField="type"
              smooth={true}
              animation={{
                appear: {
                  animation: "wave-in",
                  duration: 1000,
                },
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Complaint Distribution">
            <Pie
              data={
                complaintData?.data?.map((item) => ({
                  type: item.status,
                  value: 1,
                })) || []
              }
              angleField="value"
              colorField="type"
              radius={0.8}
              label={{ type: "outer" }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Case Distribution">
            <Pie
              data={
                caseData?.data?.map((item) => ({
                  type: item.status,
                  value: 1,
                })) || []
              }
              angleField="value"
              colorField="type"
              radius={0.8}
              label={{ type: "outer" }}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="Inspections by Type">
            <Column
              data={
                inspectionData?.data?.reduce((acc: InspectionData[], item) => {
                  const existing = acc.find((x: InspectionData) => x.type === item.type);
                  if (existing) {
                    existing.count += 1;
                  } else {
                    acc.push({ type: item.type, count: 1 });
                  }
                  return acc;
                }, []) || []
              }
              xField="type"
              yField="count"
              label={{
                position: "middle",
                style: { fill: "#fff" },
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Cases by Priority">
            <Column
              data={
                caseData?.data?.reduce((acc: CaseData[], item) => {
                  const existing = acc.find((x: CaseData) => x.priority === item.priority);
                  if (existing) {
                    existing.count += 1;
                  } else {
                    acc.push({ priority: item.priority, count: 1 });
                  }
                  return acc;
                }, []) || []
              }
              xField="priority"
              yField="count"
              label={{
                position: "middle",
                style: { fill: "#fff" },
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};
