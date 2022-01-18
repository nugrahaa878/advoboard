import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import Navbar from '../../components/Navbar';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import InsightBar from './components/InsightBar';
import TurnOverCard from './components/TurnOverCard';
import SkuCard from './components/SkuCard';

import CustomChart from './components/CustomChart';

const bestSellingSkuTitle = 'BEST SELLING SKU';
const topCompetitorSkuTitle = 'TOP COMPETITOR SKU';

const Dashboard = () => {
  const bestSelling = useSelector((state) => state.dashboard.bestSellingData);
  const bestCompetitor = useSelector((state) => state.dashboard.competitorData);

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
              products={bestSelling}
            />
            <SkuCard
              title={topCompetitorSkuTitle}
              products={bestCompetitor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;