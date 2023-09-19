import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

function Homepage() {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets"></Statistic>
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
