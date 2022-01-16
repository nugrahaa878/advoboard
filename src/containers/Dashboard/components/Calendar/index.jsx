import React from 'react';

import styles from './styles.module.css';

import calendar from '../../../../assets/icons/calendar.png';
import arrow from '../../../../assets/icons/arrow-down.png';

const Calendar = () => {
  return (
    <div className={styles.container}>
      <img className={styles.calendarIcon} src={calendar} alt='' />
      <p className={styles.title}>Period</p>
      <p className={styles.date}>11 September 2018 - 14 September 2018</p>
      <img className={styles.arrowDown} src={arrow} alt='' />
    </div>
  );
};

export default Calendar;