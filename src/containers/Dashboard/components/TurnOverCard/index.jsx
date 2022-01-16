import React from 'react';

import styles from './styles.module.css';

import sales from '../../../../assets/icons/sales.png';
import more from '../../../../assets/icons/more.png';

const TurnOverCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Sales Turnover</p>
      <img className={styles.moreIcon} src={more}/>
      <div className={styles.dataContainer}>
        <div>
          <h3>Rp 3,600,000</h3>
          <p>13.8% last period in products sold</p>
        </div>
        <img className={styles.sales} src={sales}/>
      </div>
    </div>
  );
};

export default TurnOverCard;