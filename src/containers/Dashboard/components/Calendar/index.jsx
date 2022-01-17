import React, { useState } from 'react';

import styles from './styles.module.css';

import calendarIcon from '../../../../assets/icons/calendar.png';
import arrow from '../../../../assets/icons/arrow-down.png';
import closeBlack from '../../../../assets/icons/close-black.png';

import CustomCalendar from '../CustomCalendar';

const Calendar = () => {
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const showCalendar = () => {
    setIsShowCalendar(!isShowCalendar);
  }

  const calendar = isShowCalendar ? <CustomCalendar /> : null;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img className={styles.calendarIcon} src={calendarIcon} alt='' />
        <p className={styles.title}>Period</p>
        <p className={styles.date}>11 September 2018 - 14 September 2018</p>
        <button
          className={styles.buttonArrow}
          onClick={showCalendar}
        >
          {!isShowCalendar && (
            <img
              className={styles.arrowDown}
              src={arrow}
              alt=''
            />
          )}
          
          {isShowCalendar && (
            <img
              className={styles.arrowDown}
              src={closeBlack}
              alt=''
            />
          )}
          
        </button>
      </div>
      
      {isShowCalendar && (
        <div className={styles.calendarContainer}>
          <CustomCalendar />
        </div>
      )}
    </div>
  );
};

export default Calendar;