import React from 'react';

import styles from './styles.module.css';

import Navbar from '../../components/Navbar';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.salesContainer}>
          <div className={styles.header}>
            <h1>Dashboard</h1>
            <p>Period</p>
          </div>

          <div>
            <p>Market Insight</p>
          </div>

          <div>
            <p>Sales Turnover</p>
          </div>

          <div>
            <p>average purchase value</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;