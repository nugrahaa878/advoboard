import React from 'react';

import styles from './styles.module.css';

import Navbar from '../../components/Navbar';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import InsightBar from './components/InsightBar';
import TurnOverCard from './components/TurnOverCard';
import SkuCard from './components/SkuCard';

import { dummyBestSelling } from './data/item';
import CustomChart from './components/CustomChart';

const bestSellingSkuTitle = 'BEST SELLING SKU';
const topCompetitorSkuTitle = 'TOP COMPETITOR SKU';

const Dashboard = () => {
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
            <CustomChart />
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