import React from 'react';

import styles from './styles.module.css';

import help from '../../../../assets/icons/help.png';
import arrow from '../../../../assets/icons/arrow-up.png';

const InsightBar = () => {
  return (
    <div className={styles.container}>
      <h3>MARKET INSIGHT</h3>
      <div className={styles.helpContainer}>
        <img className={styles.helpIcon} src={help}/>
        <p>Click Here for Help</p>
        <img className={styles.arrowUp} src={arrow}/>
      </div>
    </div>
  );
};

export default InsightBar;