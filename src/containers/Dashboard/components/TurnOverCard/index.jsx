import React from 'react';

import styles from './styles.module.css';

import sales from '../../../../assets/icons/sales.png';
import more from '../../../../assets/icons/more.png';
import arrowRed from '../../../../assets/icons/arrow-red.png';

const TurnOverCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Sales Turnover</p>
      <img className={styles.moreIcon} src={more} alt='' />
      <div className={styles.dataContainer}>
        <div>
          <h3>Rp 3,600,000</h3>
          <div className={styles.statistic}>
            <img className={styles.arrowRed} src={arrowRed} alt='' />
            <p><span>13.8%</span> last period in products sold</p>
          </div>
        </div>
        <img className={styles.sales} src={sales} alt='' />
      </div>
    </div>
  );
};

export default TurnOverCard;