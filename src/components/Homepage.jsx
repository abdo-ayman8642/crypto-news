import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, useAppDispatch, useAppSelector } from "../store";
const { Title } = Typography;

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { data, loading, error } = useAppSelector((state) => state.data);
  const globalStats = data?.data?.stats;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats?.total) || 0}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats?.totalExchanges) || 0}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats?.totalMarketCap) || 0}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats?.total24hVolume) || 0}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats?.totalMarkets) || 0}></Statistic>
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
