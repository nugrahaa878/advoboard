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
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;