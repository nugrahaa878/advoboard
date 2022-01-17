import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ComposedChart, Legend, Bar } from 'recharts';

import styles from './styles.module.css';

import Navbar from '../../components/Navbar';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import InsightBar from './components/InsightBar';
import TurnOverCard from './components/TurnOverCard';
import SkuCard from './components/SkuCard';

import { dummyBestSelling } from './data/item';

const bestSellingSkuTitle = 'BEST SELLING SKU';
const topCompetitorSkuTitle = 'TOP COMPETITOR SKU';

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
    upt: 8,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
    upt: 9,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
    upt: 10,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
    upt: 5,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
    upt: 8,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
    upt: 20,
  }
];

const Dashboard = () => {

  const renderChart = (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="upt" stackId='a' barSize={20} fill="#707070" />
      <Bar dataKey="uv" stackId='a' barSize={20} fill="#37B04C" />
      <Bar dataKey="cnt" stackId='a' barSize={20} fill="#289E45" />
      <Line type="monotone" dataKey="uv" stroke="#FFE854" />
    </ComposedChart>
  );

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.content}>
        <Sidebar />
        <div className={styles.salesContainer}>
          <div className={styles.header}>
            <h1>Dashboard</h1>
            <Calendar />
          </div>

          <InsightBar />

          <TurnOverCard />

          <div className={styles.chart}>
            {renderChart}

            <SkuCard
              title={bestSellingSkuTitle}
              products={dummyBestSelling}
            />
            <SkuCard
              title={topCompetitorSkuTitle}
              products={dummyBestSelling}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;